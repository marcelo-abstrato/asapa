import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import Script from "next/script";
import "./globals.css";
import {TooltipProvider} from "@/components/ui/tooltip";
import {CookieConsent} from "@/components/ui/cookie-consent";
// Import polyfill for Promise.withResolvers
import "@/lib/polyfills";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ASAPA - Associação de Surf do Atalaia e Praia do Amor",
  description: "Associação de Surf do Atalaia e Praia do Amor - Promovendo o surf, a preservação ambiental e o desenvolvimento da comunidade local.",
    keywords: ["surf", "associação", "atalaia", "praia do amor", "campeonatos", "eventos", "comunidade", "esporte", "meio ambiente", "ação social"],
  authors: [{name: "ASAPA"}],
  creator: "ASAPA",
  publisher: "ASAPA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
    metadataBase: new URL("https://asapa.com.br"),
    alternates: {
        canonical: "/",
    },
  openGraph: {
    title: "ASAPA - Associação de Surf do Atalaia e Praia do Amor",
    description: "Associação de Surf do Atalaia e Praia do Amor - Promovendo o surf, a preservação ambiental e o desenvolvimento da comunidade local.",
    url: "https://asapa.com.br",
    siteName: "ASAPA",
    locale: "pt_BR",
    type: "website",
      images: [
          {
              url: "/imagens/foto-capa.jpeg",
              width: 1200,
              height: 630,
              alt: "ASAPA - Associação de Surf do Atalaia e Praia do Amor",
          },
      ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ASAPA - Associação de Surf do Atalaia e Praia do Amor",
    description: "Associação de Surf do Atalaia e Praia do Amor - Promovendo o surf, a preservação ambiental e o desenvolvimento da comunidade local.",
      images: ["/imagens/foto-capa.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
      googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
      },
  },
    verification: {
        google: "google-site-verification-code", // Replace with actual verification code when available
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Script
          id="schema-org-script"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "SportsOrganization",
                  "name": "ASAPA - Associação de Surf do Atalaia e Praia do Amor",
                  "url": "https://asapa.com.br",
                  "logo": "https://asapa.com.br/imagens/logo-asapa.png",
                  "sameAs": [
                      "https://www.instagram.com/asapa.oficial/",
                      "https://www.facebook.com/asapa.oficial/"
                  ],
                  "description": "Associação de Surf do Atalaia e Praia do Amor - Promovendo o surf, a preservação ambiental e o desenvolvimento da comunidade local.",
                  "address": {
                      "@type": "PostalAddress",
                      "addressLocality": "Itajaí",
                      "addressRegion": "SC",
                      "addressCountry": "BR"
                  },
                  "sport": "Surf"
              })
          }}
      />
      <TooltipProvider>
          {children}
          <CookieConsent/>
      </TooltipProvider>
      </body>
    </html>
  );
}
