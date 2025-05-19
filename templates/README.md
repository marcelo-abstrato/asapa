# ASAPA Email Templates

Este diretório contém os templates de email utilizados pela ASAPA para comunicação com os membros.

## Estrutura de Diretórios

```
templates/
├── emails/                          # Templates específicos de email
│   ├── welcome.ejs                  # Email de boas-vindas
│   ├── event-notification.ejs       # Notificação de eventos
│   ├── password-reset.ejs           # Redefinição de senha
│   ├── newsletter-confirmation.ejs  # Confirmação de inscrição na newsletter
│   ├── registration-confirmation.ejs # Confirmação de inscrição como associado
│   ├── registration-notification.ejs # Notificação de nova inscrição para administradores
│   ├── contact-notification.ejs     # Notificação de contato para administradores
│   └── contact-confirmation.ejs     # Confirmação de recebimento de mensagem de contato
├── layouts/                         # Layouts base para os emails
│   └── base.ejs                     # Layout base com cabeçalho e rodapé
├── email-test.ts                    # Script para testar o envio de emails originais
└── email-test-new.ts                # Script para testar o envio dos novos templates
```

## Tecnologias Utilizadas

- **EJS**: Sistema de templates para gerar HTML dinâmico
- **Nodemailer**: Biblioteca para envio de emails
- **TypeScript**: Linguagem de programação tipada

## Como Usar

### Configuração

Para utilizar o sistema de emails, configure as seguintes variáveis de ambiente:

```
EMAIL_HOST=smtp.example.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=user@example.com
EMAIL_PASSWORD=password
EMAIL_FROM=ASAPA <contato@asapa.org.br>
```

### Envio de Emails

O serviço de email está disponível em `lib/services/email-service.ts` e oferece as seguintes funções:

#### Enviar Email de Boas-vindas

```typescript
import { sendWelcomeEmail } from '../lib/services/email-service';

await sendWelcomeEmail(
  'usuario@exemplo.com',  // Email do destinatário
  'Nome do Usuário',      // Nome do destinatário
  'https://asapa.org.br/login'  // URL para login
);
```

#### Enviar Notificação de Evento

```typescript
import { sendEventNotificationEmail } from '../lib/services/email-service';

await sendEventNotificationEmail(
  'usuario@exemplo.com',  // Email do destinatário
  'Nome do Usuário',      // Nome do destinatário
  {
    eventName: 'Nome do Evento',
    eventDate: '01 de Janeiro de 2023',
    eventTime: '10:00 - 18:00',
    eventLocation: 'Local do Evento',
    eventDescription: 'Descrição do evento...',  // Opcional
    eventImageUrl: 'https://asapa.org.br/imagem.jpg',  // Opcional
    eventUrl: 'https://asapa.org.br/eventos/evento'
  }
);
```

#### Enviar Email de Redefinição de Senha

```typescript
import { sendPasswordResetEmail } from '../lib/services/email-service';

await sendPasswordResetEmail(
  'usuario@exemplo.com',  // Email do destinatário
  'Nome do Usuário',      // Nome do destinatário
  'https://asapa.org.br/reset-password?token=abc123'  // URL para redefinição
);
```

#### Enviar Confirmação de Inscrição na Newsletter

```typescript
import { sendNewsletterConfirmationEmail } from '../lib/services/email-service';

await sendNewsletterConfirmationEmail(
  'usuario@exemplo.com',  // Email do destinatário
  'Nome do Usuário'       // Nome do destinatário (opcional, padrão: 'Assinante')
);
```

#### Enviar Confirmação de Inscrição como Associado

```typescript
import { sendRegistrationConfirmationEmail } from '../lib/services/email-service';

await sendRegistrationConfirmationEmail(
  'usuario@exemplo.com',  // Email do destinatário
  {
    firstName: 'Nome',
    lastName: 'Sobrenome',
    email: 'usuario@exemplo.com',
    phone: '(48) 99999-9999',
    experience: 'Experiência com surf'
  }
);
```

#### Enviar Notificação de Nova Inscrição para Administradores

```typescript
import { sendRegistrationNotificationEmail } from '../lib/services/email-service';

await sendRegistrationNotificationEmail(
  'admin@asapa.org.br',  // Email do administrador
  {
    firstName: 'Nome',
    lastName: 'Sobrenome',
    email: 'usuario@exemplo.com',
    phone: '(48) 99999-9999',
    experience: 'Experiência com surf',
    terms: true  // Aceitou os termos
  }
);
```

#### Enviar Notificação de Contato para Administradores

```typescript
import { sendContactNotificationEmail } from '../lib/services/email-service';

await sendContactNotificationEmail(
  'contato@asapa.org.br',  // Email do administrador
  {
    name: 'Nome do Usuário',
    email: 'usuario@exemplo.com',
    subject: 'Assunto da mensagem',
    message: 'Conteúdo da mensagem...',
    newsletter: true  // Inscreveu-se na newsletter
  }
);
```

#### Enviar Confirmação de Recebimento de Mensagem de Contato

```typescript
import { sendContactConfirmationEmail } from '../lib/services/email-service';

await sendContactConfirmationEmail(
  'usuario@exemplo.com',  // Email do destinatário
  {
    name: 'Nome do Usuário',
    subject: 'Assunto da mensagem',
    newsletter: true  // Inscreveu-se na newsletter
  }
);
```

### Função Genérica para Envio de Emails

Se precisar enviar um email usando um template personalizado:

```typescript
import { sendEmail } from '../lib/services/email-service';

await sendEmail({
  to: 'usuario@exemplo.com',
  subject: 'Assunto do Email',
  template: 'nome-do-template',  // Nome do arquivo EJS sem extensão
  data: {
    // Dados a serem passados para o template
    name: 'Nome do Usuário',
    // Outros dados...
  }
});
```

## Criando Novos Templates

Para criar um novo template de email:

1. Crie um arquivo `.ejs` na pasta `templates/emails/`
2. Use HTML e sintaxe EJS para criar o conteúdo do email
3. O template será renderizado dentro do layout base (`templates/layouts/base.ejs`)
4. Adicione uma função auxiliar no serviço de email para facilitar o uso

### Exemplo de Template EJS

```html
<h1>Título do Email</h1>

<p>Olá <%= name %>,</p>

<p>Conteúdo do email...</p>

<div style="text-align: center;">
    <a href="<%= actionUrl %>" class="button">Botão de Ação</a>
</div>

<p>Atenciosamente,<br>
Equipe ASAPA</p>
```

## Testando os Emails

### Testando Templates Originais

Para testar o envio dos templates originais (boas-vindas, notificação de eventos e redefinição de senha), use o script
`email-test.ts`:

```bash
# Configure as variáveis de ambiente necessárias
export EMAIL_HOST=smtp.example.com
export EMAIL_PORT=587
export EMAIL_SECURE=false
export EMAIL_USER=user@example.com
export EMAIL_PASSWORD=password
export EMAIL_FROM="ASAPA <contato@asapa.org.br>"
export TEST_EMAIL=destinatario@exemplo.com

# Execute o script de teste
npx ts-node templates/email-test.ts
```

### Testando Novos Templates

Para testar o envio dos novos templates (newsletter, registro, contato), use o script `email-test-new.ts`:

```bash
# Configure as variáveis de ambiente necessárias
export EMAIL_HOST=smtp.example.com
export EMAIL_PORT=587
export EMAIL_SECURE=false
export EMAIL_USER=user@example.com
export EMAIL_PASSWORD=password
export EMAIL_FROM="ASAPA <contato@asapa.org.br>"
export TEST_EMAIL=destinatario@exemplo.com
export ADMIN_EMAIL=admin@asapa.org.br

# Execute o script de teste
npx ts-node templates/email-test-new.ts
```

## Identidade Visual

Os templates seguem a identidade visual da ASAPA, utilizando:

- **Cores**: Azul principal (#1d4ed8), Azul escuro (#1e40af), Azul claro (#dbeafe)
- **Tipografia**: Geist Sans como fonte principal
- **Componentes**: Botões, cabeçalhos e rodapés padronizados
