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
                            Fundada em 6 de novembro de 2011, a ASAPA nasceu do espírito de união entre surfistas locais
                            e entusiastas do mar da Praia das Areias. Nosso objetivo sempre foi promover o surf como
                            esporte,
                            estilo de vida e ferramenta de transformação social.
                        </p>
                        <p className="text-gray-600">
                            Desde nossa fundação, organizamos campeonatos, treinamentos, encontros e ações comunitárias,
                            tornando-nos referência no incentivo ao surf amador e profissional na região. Realizamos
                            assembleias e reuniões regulares para prestação de contas e planejamento de ações,
                            mantendo uma gestão transparente e participativa.
                        </p>
                        <p className="text-gray-600">
                            Ao longo dos anos, a ASAPA já passou por três gestões distintas, sempre com líderes
                            comprometidos com a causa do surf e com o bem-estar da comunidade. Com eventos tradicionais
                            como o Areeiros Classic e os treinos de surf, nos consolidamos como pilar na formação
                            de novos talentos e na valorização do esporte na cidade.
                        </p>
                        <div className="pt-2">
                            <Button className="bg-[#1d4ed8] hover:bg-[#1e40af] text-white" asChild>
                                <a href="/historia">Conheça Nossa História Completa</a>
                            </Button>
                        </div>
                    </div>
                    <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                        <Image
                            src="/images/diretoria.jpeg?height=400&width=600&text=Fundadores+da+ASAPA"
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
