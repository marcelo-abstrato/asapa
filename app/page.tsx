import Image from "next/image"
import Link from "next/link"
import type {Metadata} from "next"
import {DesktopNav, MobileMenu} from "@/components/navigation"
import {navLinks} from "@/mocks/navigation"
import {SpeedInsights} from "@vercel/speed-insights/next"
import {
    Associese,
    Contato,
    Diretoria,
    Doacao,
    Eventos,
    Footer,
    Hero,
    MissaoVisaoValores,
    ODS,
    QuemSomos,
    Transparencia
} from "@/components/sections"

export const metadata: Metadata = {
    title: "ASAPA - Associação de Surf do Atalaia e Praia do Amor | Página Inicial",
    description: "Conheça a ASAPA, uma associação dedicada ao surf, preservação ambiental e desenvolvimento comunitário nas praias do Atalaia e do Amor.",
    alternates: {
        canonical: "/"
    }
}

export default async function Home() {
  return (
      <div className="flex flex-col min-h-screen">
          <SpeedInsights/>
          <header
              className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-20 md:h-16 items-center justify-between">
                  <div className="flex items-center gap-2 font-bold text-xl text-[#1d4ed8] ml-[5px]">
                      <Link href="/">
                          <Image src="/imagens/logo-asapa.png" alt="ASAPA Logo" width={40} height={40}
                                 className="rounded-full"/>
                      </Link>
                  </div>
                  <DesktopNav links={navLinks}/>
                  <MobileMenu links={navLinks}/>
              </div>
          </header>
          <main className="flex-1">
              <Hero/>
              <QuemSomos/>
              <MissaoVisaoValores/>
              <ODS/>
              <Diretoria/>
              <Eventos/>
              <Associese/>
              <Doacao/>
              <Transparencia/>
              <Contato/>
      </main>
          <Footer/>
    </div>
  )
}
