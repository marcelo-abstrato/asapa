import nodemailer from 'nodemailer';
import ejs from 'ejs';
import fs from 'fs';
import path from 'path';

// Types
export interface EmailOptions {
    to: string;
    subject: string;
    template: string;
    data: Record<string, any>;
}

// Email configuration
const emailConfig = {
    host: process.env.EMAIL_HOST || 'smtp.example.com',
    port: parseInt(process.env.EMAIL_PORT || '587', 10),
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
        user: process.env.EMAIL_USER || 'user@example.com',
        pass: process.env.EMAIL_PASSWORD || 'password',
    },
    from: process.env.EMAIL_FROM || 'ASAPA <contato@asapa.org.br>',
};

// Create transporter
const transporter = nodemailer.createTransport({
    host: emailConfig.host,
    port: emailConfig.port,
    secure: emailConfig.secure,
    auth: emailConfig.auth,
});

/**
 * Renders an email template with the provided data
 * @param template The name of the template to render (without extension)
 * @param data The data to pass to the template
 * @returns The rendered HTML
 */
export async function renderEmailTemplate(template: string, data: Record<string, any>): Promise<string> {
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
            email: data.to || 'membro@asapa.org.br',
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
 * @param options The email options
 * @returns A promise that resolves when the email is sent
 */
export async function sendEmail(options: EmailOptions): Promise<void> {
    try {
        // Render the email template
        const html = await renderEmailTemplate(options.template, options.data);

        // Send the email
        await transporter.sendMail({
            from: emailConfig.from,
            to: options.to,
            subject: options.subject,
            html,
        });

        console.log(`Email sent to ${options.to} with template ${options.template}`);
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error(`Failed to send email: ${error instanceof Error ? error.message : String(error)}`);
    }
}

/**
 * Sends a welcome email to a new user
 * @param to The recipient's email address
 * @param name The recipient's name
 * @param loginUrl The URL to access the account
 */
export async function sendWelcomeEmail(to: string, name: string, loginUrl: string): Promise<void> {
    await sendEmail({
        to,
        subject: 'Bem-vindo à ASAPA!',
        template: 'welcome',
        data: {
            to,
            name,
            loginUrl,
        },
    });
}

/**
 * Sends an event notification email
 * @param to The recipient's email address
 * @param name The recipient's name
 * @param eventDetails The event details
 */
export async function sendEventNotificationEmail(
    to: string,
    name: string,
    eventDetails: {
        eventName: string;
        eventDate: string;
        eventTime: string;
        eventLocation: string;
        eventDescription?: string;
        eventImageUrl?: string;
        eventUrl: string;
    }
): Promise<void> {
    await sendEmail({
        to,
        subject: `Novo Evento ASAPA: ${eventDetails.eventName}`,
        template: 'event-notification',
        data: {
            to,
            name,
            ...eventDetails,
        },
    });
}

/**
 * Sends a password reset email
 * @param to The recipient's email address
 * @param name The recipient's name
 * @param resetUrl The password reset URL
 */
export async function sendPasswordResetEmail(to: string, name: string, resetUrl: string): Promise<void> {
    await sendEmail({
        to,
        subject: 'Redefinição de Senha ASAPA',
        template: 'password-reset',
        data: {
            to,
            name,
            resetUrl,
        },
    });
}

/**
 * Sends a newsletter subscription confirmation email
 * @param to The recipient's email address
 * @param name The recipient's name
 */
export async function sendNewsletterConfirmationEmail(to: string, name: string = 'Assinante'): Promise<void> {
    await sendEmail({
        to,
        subject: 'Confirmação de Inscrição na Newsletter da ASAPA',
        template: 'newsletter-confirmation',
        data: {
            to,
            name,
        },
    });
}

/**
 * Sends a registration confirmation email to a new member
 * @param to The recipient's email address
 * @param userData The user registration data
 */
export async function sendRegistrationConfirmationEmail(
    to: string,
    userData: {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        experience: string;
    }
): Promise<void> {
    await sendEmail({
        to,
        subject: 'Confirmação de Inscrição na ASAPA',
        template: 'registration-confirmation',
        data: {
            to,
            ...userData,
        },
    });
}

/**
 * Sends a registration notification email to administrators
 * @param to The admin email address
 * @param userData The user registration data
 */
export async function sendRegistrationNotificationEmail(
    to: string,
    userData: {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        experience: string;
        terms: boolean;
    }
): Promise<void> {
    await sendEmail({
        to,
        subject: `Nova Inscrição de Associado: ${userData.firstName} ${userData.lastName}`,
        template: 'registration-notification',
        data: {
            to,
            ...userData,
        },
    });
}

/**
 * Sends a contact form notification email to administrators
 * @param to The admin email address
 * @param contactData The contact form data
 */
export async function sendContactNotificationEmail(
    to: string,
    contactData: {
        name: string;
        email: string;
        subject: string;
        message: string;
        newsletter: boolean;
    }
): Promise<void> {
    await sendEmail({
        to,
        subject: `Formulário de Contato: ${contactData.subject}`,
        template: 'contact-notification',
        data: {
            to,
            ...contactData,
        },
    });
}

/**
 * Sends a contact form confirmation email to the user
 * @param to The recipient's email address
 * @param contactData The contact form data
 */
export async function sendContactConfirmationEmail(
    to: string,
    contactData: {
        name: string;
        subject: string;
        newsletter: boolean;
    }
): Promise<void> {
    await sendEmail({
        to,
        subject: 'Recebemos sua mensagem - ASAPA',
        template: 'contact-confirmation',
        data: {
            to,
            ...contactData,
        },
    });
}

export default {
    sendEmail,
    sendWelcomeEmail,
    sendEventNotificationEmail,
    sendPasswordResetEmail,
    sendNewsletterConfirmationEmail,
    sendRegistrationConfirmationEmail,
    sendRegistrationNotificationEmail,
    sendContactNotificationEmail,
    sendContactConfirmationEmail,
};
