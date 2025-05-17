import {NextResponse} from 'next/server';
import prisma from '@/lib/prisma';
import nodemailer from 'nodemailer';

interface NewsletterFormData {
    email: string;
}

export async function POST(request: Request) {
    try {
        const data: NewsletterFormData = await request.json();

        // Validate email
        if (!data.email) {
            return NextResponse.json(
                {error: 'O email é obrigatório'},
                {status: 400}
            );
        }

        // Check if email already exists in the database
        const existingSubscriber = await prisma.newsletter.findUnique({
            where: {
                email: data.email
            }
        });

        if (existingSubscriber) {
            return NextResponse.json(
                {success: true, message: 'Email já cadastrado na newsletter'}
            );
        }

        // Add email to the database
        await prisma.newsletter.create({
            data: {
                email: data.email
            }
        });

        // Setup email transporter
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST || 'smtp.gmail.com',
            port: Number(process.env.EMAIL_PORT) || 587,
            secure: process.env.EMAIL_SECURE === 'true',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Send confirmation email
        const mailOptions = {
            from: process.env.EMAIL_FROM || 'noreply@asapa.com.br',
            to: data.email,
            subject: 'Confirmação de Inscrição na Newsletter da ASAPA',
            html: `
                <h1>Obrigado por se inscrever na nossa newsletter!</h1>
                <p>Agradecemos por se inscrever na newsletter da ASAPA. Você receberá atualizações sobre nossos eventos e atividades.</p>
                <p>Atenciosamente,</p>
                <p>Equipe ASAPA</p>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({success: true});
    } catch (error) {
        console.error('Error processing newsletter subscription:', error);
        return NextResponse.json(
            {error: 'Erro ao processar inscrição na newsletter'},
            {status: 500}
        );
    }
}
