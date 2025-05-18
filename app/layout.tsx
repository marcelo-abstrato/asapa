import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {TooltipProvider} from "@/components/ui/tooltip";

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
  keywords: ["surf", "associação", "atalaia", "praia do amor", "campeonatos", "eventos", "comunidade"],
  authors: [{name: "ASAPA"}],
  creator: "ASAPA",
  publisher: "ASAPA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "ASAPA - Associação de Surf do Atalaia e Praia do Amor",
    description: "Associação de Surf do Atalaia e Praia do Amor - Promovendo o surf, a preservação ambiental e o desenvolvimento da comunidade local.",
    url: "https://asapa.com.br",
    siteName: "ASAPA",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ASAPA - Associação de Surf do Atalaia e Praia do Amor",
    description: "Associação de Surf do Atalaia e Praia do Amor - Promovendo o surf, a preservação ambiental e o desenvolvimento da comunidade local.",
  },
  robots: {
    index: true,
    follow: true,
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
      <TooltipProvider>
          {children}
      </TooltipProvider>
      </body>
    </html>
  );
}
