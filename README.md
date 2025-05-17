This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Project Structure

The project is organized into the following directories:

### `/app`

Contains the Next.js app router pages and layouts.

### `/components`

Contains reusable React components organized by type:

- `/components/navigation`: Navigation components (desktop and mobile)
- `/components/sections`: Page section components
- `/components/ui`: Reusable UI components
- `/components/layout`: Layout components
- `/components/icons`: Icon components

### `/lib`

Contains utility functions and shared code:

- `/lib/helpers`: Helper functions
- `/lib/hooks`: React hooks
- `/lib/prisma.ts`: Prisma client setup with Accelerate extension

### `/prisma`

Contains Prisma ORM files:

- `/prisma/schema.prisma`: Database schema definition

### `/public`

Contains static assets:

- `/public/images`: Image files
- `/public/icons`: Icon files

### `/mocks`

Contains mock data for development.

## Import Conventions

The project uses barrel files (index.ts) to simplify imports:

```javascript
// Import from a barrel file
import {Button, Card} from "@/components/ui";
import {MobileMenu, DesktopNav} from "@/components/navigation";

// Import from a specific file
import {cn} from "@/lib/helpers/css-utils";
```

## Database Setup

This project uses Prisma ORM with PostgreSQL. Follow these steps to set up the database:

1. Make sure you have PostgreSQL installed and running
2. Create a `.env` file in the root directory with your database connection string:

```
DATABASE_URL="postgresql://username:password@localhost:5432/asapa?schema=public"
```

3. Generate the Prisma client:

```bash
npm run prisma:generate
# or
yarn prisma:generate
```

4. If you need to create or update the database schema:

```bash
npx prisma db push
# or
yarn prisma db push
```

5. Seed the database with initial data:

```bash
npm run prisma:seed
# or
yarn prisma:seed
# or
npx prisma db seed
```

## Email Setup

This project uses Nodemailer to send emails from the contact form. Follow these steps to set up the email functionality:

1. Create a `.env.local` file in the root directory with your email configuration:

```
# Email configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM=noreply@asapa.com.br
```

2. Replace the placeholder values with your actual SMTP server details and credentials:
   - `EMAIL_HOST`: Your SMTP server host (e.g., smtp.gmail.com for Gmail)
   - `EMAIL_PORT`: Your SMTP server port (typically 587 for TLS or 465 for SSL)
   - `EMAIL_SECURE`: Set to "true" if using SSL (port 465), "false" for TLS (port 587)
   - `EMAIL_USER`: Your email address
   - `EMAIL_PASS`: Your email password or app password
   - `EMAIL_FROM`: The sender email address shown in sent emails

3. If using Gmail, you'll need to create an App Password:
   - Go to your Google Account > Security > 2-Step Verification
   - At the bottom, select "App passwords"
   - Select "Mail" as the app and "Other" as the device
   - Enter a name (e.g., "ASAPA Website")
   - Click "Generate" and use the generated password as your `EMAIL_PASS`

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
