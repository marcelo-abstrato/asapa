This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Project Structure

The project is organized into the following directories:

### `/app`

Contains the Next.js app router pages and layouts.

### `/components`

Contains reusable React components organized by type:

- `/components/navigation`: Navigation components (desktop and mobile)
- `/components/sections`: Page section components
- `/components/ui`: Reusable UI components (buttons, cards, tabs, etc.)
- `/components/layout`: Layout components
- `/components/icons`: SVG icon components with accessibility attributes

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

## Style Guide

### Colors

#### Primary Colors

- **Blue Primary**: `#1d4ed8` - Used for primary elements, buttons, links, and highlights
- **Blue Dark**: `#1e40af` - Used for hover states on primary buttons
- **Blue Light**: `#dbeafe` - Used for badge backgrounds and secondary elements

#### Neutral Colors

- **Black**: `#000000` - Used for main text
- **Dark Gray**: `#4b5563` - Used for secondary text
- **Medium Gray**: `#9ca3af` - Used for borders and disabled elements
- **Light Gray**: `#f3f4f6` - Used for section backgrounds
- **White**: `#ffffff` - Used for backgrounds and text on dark backgrounds

### Typography

#### Fonts

- **Primary**: Geist Sans - Used for all text content
- **Mono**: Geist Mono - Used for code and technical data

#### Font Sizes

- **Main Title**: 3rem (48px) / 3.75rem (60px) on larger screens
- **Secondary Title**: 2.25rem (36px) / 3rem (48px) on larger screens
- **Tertiary Title**: 1.5rem (24px) / 1.875rem (30px) on larger screens
- **Regular Text**: 1rem (16px) / 1.25rem (20px) on larger screens
- **Small Text**: 0.875rem (14px)

### Components

#### Buttons

##### Primary Button

```jsx
<Button className="bg-blue-700 hover:bg-blue-800">
   Button Text
</Button>
```

##### Secondary Button

```jsx
<Button variant="outline" className="text-blue-700 border-blue-700">
   Button Text
</Button>
```

##### Ghost Button

```jsx
<Button variant="ghost" className="text-blue-700">
   Button Text
</Button>
```

#### Section Headers

```jsx
<SectionHeader
        badge="Badge Text"
        title="Section Title"
        description="Section description explaining the purpose or content."
        icon={<IconComponent size={32} className="text-blue-700"/>}
/>
```

#### Cards

```jsx
<div className="flex flex-col md:flex-row gap-6 border rounded-lg overflow-hidden bg-white shadow-sm">
   {/* Card content */}
</div>
```

### Icons

All icons should be imported from the `components/icons` directory and should include the following attributes for
accessibility:

```jsx
<IconComponent
        size={24} // Default size, adjust as needed
        className="text-current" // Inherits color from parent text
        aria-hidden={true} // For decorative icons
/>
```

### Accessibility

#### Contrast

- Maintain a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text
- Use the [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) to verify

#### ARIA Attributes

- Use `aria-label` on buttons without descriptive text
- Use `aria-hidden="true"` on decorative icons
- Use `role="alert"` and `aria-live="polite"` on notification messages

#### Keyboard Navigation

- Ensure all interactive elements are accessible via keyboard
- Maintain a logical tab order

### Code Conventions

#### Naming

- **Components**: PascalCase (e.g., `EventCard`)
- **Functions**: camelCase (e.g., `formatDateRange`)
- **Variables**: camelCase (e.g., `hasEvents`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `MAX_EVENTS`)

#### File Structure

- **Components**: Organized by type in `/components`
- **Utilities**: Organized in `/lib/helpers`
- **Services**: Organized in `/lib/services`
- **Hooks**: Organized in `/lib/hooks`

#### Imports

- Use named imports when possible
- Group imports by source (React, Next.js, internal components, etc.)
- Use barrel files (index.ts) to simplify imports

### SEO

#### Metadata

- Always include relevant title, description, and keywords
- Use OpenGraph and Twitter Cards for social media sharing
- Include structured metadata (Schema.org) when applicable

#### HTML Semantics

- Use appropriate semantic tags (section, article, nav, etc.)
- Structure content with hierarchical headings (h1, h2, h3, etc.)
- Use time elements with datetime attributes for dates

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

> **Note:** The development server uses the standard Next.js development server. Turbopack was removed due to
> compatibility issues with Next.js 15.2.4 that caused build manifest errors.
>
> If you encounter any build errors, you can clean the build artifacts by running:
>
> ```bash
> npm run clean
> # or
> yarn clean
> ```

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
