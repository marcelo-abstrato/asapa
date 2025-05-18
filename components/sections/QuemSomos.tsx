import Image from "next/image"
import {Button} from "@/components/ui/button"
import {Info} from "lucide-react"

export function QuemSomos() {
    return (
        <section id="quem-somos" className="w-full py-12 md:py-24 bg-white">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-[#1d4ed8]">Nossa
                        História
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl flex items-center gap-2">
                        <Info className="h-8 w-8 text-[#1d4ed8]"/>
                        Quem Somos
                    </h2>
                    <p className="max-w-[700px] text-gray-500 md:text-xl">
                        Conheça a história da Associação dos Surfistas e Amigos da Praia das Areias
                    </p>
                </div>

                <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
                    <div className="space-y-5">
                        <h3 className="text-2xl font-bold text-[#1d4ed8]">Nossa Jornada</h3>
                        <p className="text-gray-600">
                            Nossa história começou nas ondas da Praia das Areias em 2007, quando realizamos o primeiro
                            Areias Classic
                            sob a liderança visionária de Marcelo Manoel Barbosa. Embora o nome ASAPA já ecoasse na
                            areia e no mar,
                            foi em 6 de novembro de 2011 que oficialmente nos estabelecemos como uma associação, nascida
                            da paixão
                            compartilhada pelo surf e pelo potencial transformador que este esporte carrega.
                        </p>
                        <p className="text-gray-600">
                            Ao longo desta jornada, construímos um legado de eventos memoráveis, como o tradicional
                            Areias Classic
                            e suas variações Jamaica, implementamos surfs treinos que revelaram talentos locais, e
                            desenvolvemos
                            ações comunitárias que fortaleceram os laços entre surfistas, moradores e amantes da praia.
                            Mesmo durante nosso período de pausa (2019-2023), o espírito da ASAPA permaneceu vivo nas
                            águas das Areias.
                        </p>
                        <p className="text-gray-600">
                            Cada capítulo de nossa história foi escrito por líderes apaixonados e membros dedicados,
                            que compartilham a visão de um surf inclusivo, sustentável e transformador. Hoje, em nossa
                            terceira gestão (2023-2027), renovamos nosso compromisso com a comunidade através de
                            projetos
                            inovadores, ações socioambientais e iniciativas que fortalecem a cultura do surf,
                            consolidando
                            a ASAPA como um pilar fundamental no desenvolvimento esportivo e social de nossa região.
                        </p>
                        <div className="pt-2">
                            <Button className="bg-[#1d4ed8] hover:bg-[#1e40af] text-white" asChild>
                                <a href="/historia">Conheça Nossa História Completa</a>
                            </Button>
                        </div>
                    </div>
                    <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                        <Image
                            src="/imagens/diretoria.jpeg?height=400&width=600&text=Fundadores+da+ASAPA"
                            alt="Fundadores da ASAPA"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
