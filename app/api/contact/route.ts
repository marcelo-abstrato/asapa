import {NextResponse} from 'next/server';
import nodemailer from 'nodemailer';
import ejs from 'ejs';
import fs from 'fs';
import path from 'path';

interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
    newsletter: boolean;
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
        const data: ContactFormData = await request.json();

        if (!data.name || !data.email || !data.subject || !data.message) {
            return NextResponse.json(
                {error: 'Todos os campos são obrigatórios'},
                {status: 400}
            );
        }

        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST || 'smtp.gmail.com',
            port: Number(process.env.EMAIL_PORT) || 587,
            secure: process.env.EMAIL_SECURE === 'true',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Render the contact notification email template
        const notificationHtml = await renderEmailTemplate('contact-notification', {
            name: data.name,
            email: data.email,
            subject: data.subject,
            message: data.message,
            newsletter: data.newsletter,
            title: `Formulário de Contato: ${data.subject}`,
        });

        const mailOptions = {
            from: process.env.EMAIL_FROM || 'noreply@asapa.com.br',
            to: 'contato@asapa.com.br',
            subject: `Formulário de Contato: ${data.subject}`,
            html: notificationHtml,
        };

        await transporter.sendMail(mailOptions);

        if (data.newsletter) {
            // Add email to the newsletter database
            try {
                const prisma = (await import('@/lib/prisma')).default;
                await prisma.newsletter.create({
                    data: {
                        email: data.email
                    }
                });
            } catch (error) {
                console.error('Error adding email to newsletter:', error);
                // Continue even if there's an error adding to the database
            }

            // Render the newsletter confirmation email template
            const newsletterHtml = await renderEmailTemplate('newsletter-confirmation', {
                name: data.name,
                email: data.email,
                title: 'Confirmação de Inscrição na Newsletter da ASAPA',
            });

            const newsletterOptions = {
                from: process.env.EMAIL_FROM || 'noreply@asapa.com.br',
                to: data.email,
                subject: 'Confirmação de Inscrição na Newsletter da ASAPA',
                html: newsletterHtml,
            };

            await transporter.sendMail(newsletterOptions);
        }

        return NextResponse.json({success: true});
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            {error: 'Erro ao enviar mensagem'},
            {status: 500}
        );
    }
}
