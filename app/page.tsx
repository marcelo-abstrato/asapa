import Image from "next/image"
import {DesktopNav, MobileMenu} from "@/components/navigation"
import {navLinks} from "@/mocks/navigation"
import {SpeedInsights} from "@vercel/speed-insights/next"
import {Contato, Footer} from "@/components/sections"

export default function Home() {
  return (
      <div className="flex flex-col min-h-screen">
          <SpeedInsights/>
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
              {/*<Hero/>*/}
              {/*<QuemSomos/>*/}
              {/*<MissaoVisaoValores/>*/}
              {/*<Diretoria/>*/}
              {/*<Eventos/>*/}
              {/*<Associese/>*/}
              {/*<Doacao/>*/}
              {/*<Transparencia/>*/}
              {/*<Noticias/>*/}
              <Contato/>
      </main>
          <Footer/>
    </div>
  )
}
