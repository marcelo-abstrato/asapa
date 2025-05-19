import {sendWelcomeEmail, sendEventNotificationEmail, sendPasswordResetEmail} from '../lib/services/email-service';

/**
 * This is a test file to demonstrate how to use the email service.
 * To run this test, use the following command:
 *
 * npx ts-node templates/email-test.ts
 *
 * Make sure to set the following environment variables before running:
 * - EMAIL_HOST: SMTP server host
 * - EMAIL_PORT: SMTP server port
 * - EMAIL_SECURE: Whether to use TLS (true/false)
 * - EMAIL_USER: SMTP server username
 * - EMAIL_PASSWORD: SMTP server password
 * - EMAIL_FROM: Sender email address
 * - TEST_EMAIL: Recipient email address for testing
 */

async function testEmails() {
    try {
        const testEmail = process.env.TEST_EMAIL || 'test@example.com';
        const testName = 'Usuário Teste';

        console.log('Sending welcome email...');
        await sendWelcomeEmail(
            testEmail,
            testName,
            'https://asapa.org.br/login'
        );
        console.log('Welcome email sent successfully!');

        console.log('Sending event notification email...');
        await sendEventNotificationEmail(
            testEmail,
            testName,
            {
                eventName: 'Campeonato de Surf ASAPA 2023',
                eventDate: '15 de Dezembro de 2023',
                eventTime: '08:00 - 17:00',
                eventLocation: 'Praia das Areias do Campeche, Florianópolis',
                eventDescription: 'Venha participar do nosso campeonato anual de surf com categorias para todas as idades!',
                eventImageUrl: 'https://asapa.org.br/imagens/eventos/campeonato-2023.jpg',
                eventUrl: 'https://asapa.org.br/eventos/campeonato-2023'
            }
        );
        console.log('Event notification email sent successfully!');

        console.log('Sending password reset email...');
        await sendPasswordResetEmail(
            testEmail,
            testName,
            'https://asapa.org.br/reset-password?token=abc123'
        );
        console.log('Password reset email sent successfully!');

        console.log('All test emails sent successfully!');
    } catch (error) {
        console.error('Error sending test emails:', error);
    }
}

// Run the test if this file is executed directly
if (require.main === module) {
    testEmails();
}
