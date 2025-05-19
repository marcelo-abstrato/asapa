import {NextResponse} from 'next/server';
import prisma from '@/lib/prisma';
import nodemailer from 'nodemailer';
import ejs from 'ejs';
import fs from 'fs';
import path from 'path';

interface NewsletterFormData {
    email: string;
}

/**
 * Renders an email template with the provided data
 * @param template The name of the template to render (without extension)
 * @param data The data to pass to the template
 * @returns The rendered HTML
 */
async function renderEmailTemplate(template: string, data: Record<string, unknown>): Promise<string> {
    try {
        // Path to the template
        const templatePath = path.join(process.cwd(), 'templates', 'emails', `${template}.ejs`);
        const layoutPath = path.join(process.cwd(), 'templates', 'layouts', 'base.ejs');

        // Read the template and layout files
        const templateContent = fs.readFileSync(templatePath, 'utf-8');
        const layoutContent = fs.readFileSync(layoutPath, 'utf-8');

        // Render the template
        const body = await ejs.render(templateContent, data, {async: true});

        // Render the layout with the template content
        const html = await ejs.render(layoutContent, {
            ...data,
            body,
            title: data.title || 'ASAPA - Associação de Surf das Areias do Campeche',
            email: data.email || 'membro@asapa.org.br',
            unsubscribeUrl: data.unsubscribeUrl || 'https://asapa.org.br/unsubscribe',
        }, {async: true});

        return html;
    } catch (error) {
        console.error('Error rendering email template:', error);
        throw new Error(`Failed to render email template: ${error instanceof Error ? error.message : String(error)}`);
    }
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

        // No longer checking for existing subscribers as we now allow duplicate emails

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

        // Render the newsletter confirmation email template
        const newsletterHtml = await renderEmailTemplate('newsletter-confirmation', {
            name: 'Assinante', // Since we only have the email, we use a generic name
            email: data.email,
            title: 'Confirmação de Inscrição na Newsletter da ASAPA',
        });

        // Send confirmation email
        const mailOptions = {
            from: process.env.EMAIL_FROM || 'noreply@asapa.com.br',
            to: data.email,
            subject: 'Confirmação de Inscrição na Newsletter da ASAPA',
            html: newsletterHtml,
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
