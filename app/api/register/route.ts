import {NextResponse} from 'next/server';
import nodemailer from 'nodemailer';
import ejs from 'ejs';
import fs from 'fs';
import path from 'path';

interface RegistrationFormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    experience: string;
    terms: boolean;
}

/**
 * Renders an email template with the provided data
 * @param template The name of the template to render (without extension)
 * @param data The data to pass to the template
 * @returns The rendered HTML
 */
async function renderEmailTemplate(template: string, data: Record<string, any>): Promise<string> {
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

        // Render the registration notification email template
        const notificationHtml = await renderEmailTemplate('registration-notification', {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phone: data.phone,
            experience: data.experience,
            terms: data.terms,
            title: `Nova Inscrição de Associado: ${data.firstName} ${data.lastName}`,
        });

        // Email to ASAPA
        const mailOptions = {
            from: process.env.EMAIL_FROM || 'noreply@asapa.com.br',
            to: 'inscricao@asapa.com.br',
            subject: `Nova Inscrição de Associado: ${data.firstName} ${data.lastName}`,
            html: notificationHtml,
        };

        await transporter.sendMail(mailOptions);

        // Render the registration confirmation email template
        const confirmationHtml = await renderEmailTemplate('registration-confirmation', {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phone: data.phone,
            title: 'Confirmação de Inscrição na ASAPA',
        });

        // Confirmation email to user
        const confirmationOptions = {
            from: process.env.EMAIL_FROM || 'noreply@asapa.com.br',
            to: data.email,
            subject: 'Confirmação de Inscrição na ASAPA',
            html: confirmationHtml,
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
