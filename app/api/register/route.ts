import {NextResponse} from 'next/server';
import nodemailer from 'nodemailer';

interface RegistrationFormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    experience: string;
    terms: boolean;
}

export async function POST(request: Request) {
    try {
        const data: RegistrationFormData = await request.json();

        // Validate required fields
        if (!data.firstName || !data.lastName || !data.email || !data.phone || !data.experience) {
            return NextResponse.json(
                {error: 'Todos os campos são obrigatórios'},
                {status: 400}
            );
        }

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

        // Email to ASAPA
        const mailOptions = {
            from: process.env.EMAIL_FROM || 'noreply@asapa.com.br',
            to: 'inscricao@asapa.com.br',
            subject: `Nova Inscrição de Associado: ${data.firstName} ${data.lastName}`,
            html: `
        <h1>Nova inscrição de associado</h1>
        <p><strong>Nome:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Telefone:</strong> ${data.phone}</p>
        <p><strong>Experiência com Surf:</strong> ${data.experience}</p>
        <p><strong>Aceitou os Termos:</strong> ${data.terms ? 'Sim' : 'Não'}</p>
      `,
        };

        await transporter.sendMail(mailOptions);

        // Confirmation email to user
        const confirmationOptions = {
            from: process.env.EMAIL_FROM || 'noreply@asapa.com.br',
            to: data.email,
            subject: 'Confirmação de Inscrição na ASAPA',
            html: `
        <h1>Obrigado por se inscrever na ASAPA!</h1>
        <p>Olá ${data.firstName},</p>
        <p>Recebemos sua inscrição e dentro de alguns instantes uma pessoa entrará em contato para finalizar o processo.</p>
        <p>Detalhes da sua inscrição:</p>
        <ul>
          <li><strong>Nome:</strong> ${data.firstName} ${data.lastName}</li>
        </ul>
        <p>Atenciosamente,</p>
        <p>Equipe ASAPA</p>
      `,
        };

        await transporter.sendMail(confirmationOptions);

        return NextResponse.json({success: true});
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            {error: 'Erro ao processar inscrição'},
            {status: 500}
        );
    }
}
