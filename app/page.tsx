import Image from "next/image"
import MobileMenu from "./mobile-menu"
import DesktopNav from "./desktop-nav"
import {navLinks} from "@/mocks/navigation"
import {Hero} from "@/components/sections/Hero"
import {QuemSomos} from "@/components/sections/QuemSomos"
import {MissaoVisaoValores} from "@/components/sections/MissaoVisaoValores"
import {Diretoria} from "@/components/sections/Diretoria"
import {Eventos} from "@/components/sections/Eventos"
import {Associese} from "@/components/sections/Associese"
import {Doacao} from "@/components/sections/Doacao"
import {Transparencia} from "@/components/sections/Transparencia"
import {Noticias} from "@/components/sections/Noticias"
import {Contato} from "@/components/sections/Contato"
import {Footer} from "@/components/sections/Footer"

export default function Home() {
  return (
      <div className="flex flex-col min-h-screen">
          <header
              className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-16 items-center justify-between">
                  <div className="flex items-center gap-2 font-bold text-xl text-[#1d4ed8]">
                      <Image src="/images/logo-asapa.png" alt="ASAPA Logo" width={40} height={40}
                             className="rounded-full"/>
                  </div>
                  <DesktopNav links={navLinks}/>
                  <MobileMenu links={navLinks}/>
              </div>
          </header>
          <main className="flex-1">
              <Hero/>
              <QuemSomos/>
              <MissaoVisaoValores/>
              <Diretoria/>
              <Eventos/>
              <Associese/>
              <Doacao/>
              <Transparencia/>
              <Noticias/>
              <Contato/>
      </main>
          <Footer/>
    </div>
  )
}
