import nodemailer from 'nodemailer';
import ejs from 'ejs';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

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

/**
 * Sends an email using the specified template and data
 * @param to The recipient's email address
 * @param subject The email subject
 * @param template The name of the template to use
 * @param data The data to pass to the template
 */
async function sendEmail(to: string, subject: string, template: string, data: Record<string, any>): Promise<void> {
    try {
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

        // Render the email template
        const html = await renderEmailTemplate(template, data);

        // Send the email
        await transporter.sendMail({
            from: process.env.EMAIL_FROM || 'noreply@asapa.com.br',
            to,
            subject,
            html,
        });

        console.log(`Email sent to ${to} with template ${template}`);
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error(`Failed to send email: ${error instanceof Error ? error.message : String(error)}`);
    }
}

async function testEmailTemplates() {
    try {
        const testEmail = process.env.TEST_EMAIL || 'test@example.com';

        console.log('Testing contact notification email...');
        await sendEmail(
            testEmail,
            'Formulário de Contato: Teste',
            'contact-notification',
            {
                name: 'João Silva',
                email: 'joao@example.com',
                subject: 'Teste de Template',
                message: 'Esta é uma mensagem de teste para verificar o template de notificação de contato.',
                newsletter: true,
            }
        );

        console.log('Testing newsletter confirmation email...');
        await sendEmail(
            testEmail,
            'Confirmação de Inscrição na Newsletter da ASAPA',
            'newsletter-confirmation',
            {
                name: 'Maria Oliveira',
                email: testEmail,
            }
        );

        console.log('Testing registration notification email...');
        await sendEmail(
            testEmail,
            'Nova Inscrição de Associado: Pedro Santos',
            'registration-notification',
            {
                firstName: 'Pedro',
                lastName: 'Santos',
                email: 'pedro@example.com',
                phone: '(48) 99999-8888',
                experience: 'Surfista há 3 anos, participei de competições locais.',
                terms: true,
            }
        );

        console.log('Testing registration confirmation email...');
        await sendEmail(
            testEmail,
            'Confirmação de Inscrição na ASAPA',
            'registration-confirmation',
            {
                firstName: 'Pedro',
                lastName: 'Santos',
                email: 'pedro@example.com',
                phone: '(48) 99999-8888',
            }
        );

        console.log('Testing contact confirmation email...');
        await sendEmail(
            testEmail,
            'Recebemos sua mensagem - ASAPA',
            'contact-confirmation',
            {
                name: 'Ana Costa',
                email: testEmail,
                subject: 'Informações sobre aulas',
                newsletter: true,
            }
        );

        console.log('All test emails sent successfully!');
    } catch (error) {
        console.error('Error testing email templates:', error);
    }
}

// Run the test if this file is executed directly
if (require.main === module) {
    testEmailTemplates();
}
