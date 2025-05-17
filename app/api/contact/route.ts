import {NextResponse} from 'next/server';
import nodemailer from 'nodemailer';

interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
    newsletter: boolean;
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

        const mailOptions = {
            from: process.env.EMAIL_FROM || 'noreply@asapa.com.br',
            to: 'contato@asapa.com.br',
            subject: `Formulário de Contato: ${data.subject}`,
            html: `
        <h1>Nova mensagem de contato</h1>
        <p><strong>Nome:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Assunto:</strong> ${data.subject}</p>
        <p><strong>Mensagem:</strong> ${data.message}</p>
        <p><strong>Inscrição na Newsletter:</strong> ${data.newsletter ? 'Sim' : 'Não'}</p>
      `,
        };

        await transporter.sendMail(mailOptions);

        if (data.newsletter) {
            const newsletterOptions = {
                from: process.env.EMAIL_FROM || 'noreply@asapa.com.br',
                to: data.email,
                subject: 'Confirmação de Inscrição na Newsletter da ASAPA',
                html: `
          <h1>Obrigado por se inscrever na nossa newsletter!</h1>
          <p>Olá ${data.name},</p>
          <p>Agradecemos por se inscrever na newsletter da ASAPA. Você receberá atualizações sobre nossos eventos e atividades.</p>
          <p>Atenciosamente,</p>
          <p>Equipe ASAPA</p>
        `,
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
