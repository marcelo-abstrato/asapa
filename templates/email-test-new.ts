import {
    sendNewsletterConfirmationEmail,
    sendRegistrationConfirmationEmail,
    sendRegistrationNotificationEmail,
    sendContactNotificationEmail,
    sendContactConfirmationEmail
} from '../lib/services/email-service';

/**
 * This is a test file to demonstrate how to use the new email templates.
 * To run this test, use the following command:
 *
 * npx ts-node templates/email-test-new.ts
 *
 * Make sure to set the following environment variables before running:
 * - EMAIL_HOST: SMTP server host
 * - EMAIL_PORT: SMTP server port
 * - EMAIL_SECURE: Whether to use TLS (true/false)
 * - EMAIL_USER: SMTP server username
 * - EMAIL_PASSWORD: SMTP server password
 * - EMAIL_FROM: Sender email address
 * - TEST_EMAIL: Recipient email address for testing
 * - ADMIN_EMAIL: Admin email address for testing admin notifications
 */

async function testNewEmailTemplates() {
    try {
        const testEmail = process.env.TEST_EMAIL || 'test@example.com';
        const adminEmail = process.env.ADMIN_EMAIL || 'admin@asapa.org.br';
        const testName = 'Usuário Teste';

        console.log('Sending newsletter confirmation email...');
        await sendNewsletterConfirmationEmail(
            testEmail,
            testName
        );
        console.log('Newsletter confirmation email sent successfully!');

        console.log('Sending registration confirmation email...');
        await sendRegistrationConfirmationEmail(
            testEmail,
            {
                firstName: 'João',
                lastName: 'Silva',
                email: testEmail,
                phone: '(48) 99999-9999',
                experience: 'Surfista há 5 anos'
            }
        );
        console.log('Registration confirmation email sent successfully!');

        console.log('Sending registration notification email to admin...');
        await sendRegistrationNotificationEmail(
            adminEmail,
            {
                firstName: 'João',
                lastName: 'Silva',
                email: testEmail,
                phone: '(48) 99999-9999',
                experience: 'Surfista há 5 anos',
                terms: true
            }
        );
        console.log('Registration notification email sent successfully!');

        console.log('Sending contact notification email to admin...');
        await sendContactNotificationEmail(
            adminEmail,
            {
                name: 'Maria Oliveira',
                email: testEmail,
                subject: 'Dúvida sobre eventos',
                message: 'Olá, gostaria de saber mais informações sobre os próximos eventos da ASAPA.\n\nObrigado,\nMaria',
                newsletter: true
            }
        );
        console.log('Contact notification email sent successfully!');

        console.log('Sending contact confirmation email...');
        await sendContactConfirmationEmail(
            testEmail,
            {
                name: 'Maria Oliveira',
                subject: 'Dúvida sobre eventos',
                newsletter: true
            }
        );
        console.log('Contact confirmation email sent successfully!');

        console.log('All test emails sent successfully!');
    } catch (error) {
        console.error('Error sending test emails:', error);
    }
}

// Run the test if this file is executed directly
if (require.main === module) {
    testNewEmailTemplates();
}
