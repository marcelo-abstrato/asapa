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
                            Fundada em 2005 por um grupo de surfistas apaixonados, a ASAPA nasceu da necessidade
                            de organizar e
                            fortalecer a comunidade do surf na Praia das Areias. O que começou como um pequeno
                            grupo de amigos
                            transformou-se em uma associação reconhecida nacionalmente.
                        </p>
                        <p className="text-gray-600">
                            Ao longo dos anos, expandimos nossa atuação para além do esporte, abraçando causas
                            ambientais, sociais
                            e educacionais. Hoje, somos uma referência no desenvolvimento do surf e na preservação
                            do ecossistema
                            costeiro.
                        </p>
                        <p className="text-gray-600">
                            Nossa associação reúne surfistas de todas as idades e níveis, desde iniciantes até
                            profissionais,
                            unidos pelo amor ao mar e pelo compromisso com a sustentabilidade e o desenvolvimento
                            da comunidade
                            local.
                        </p>
                        <div className="pt-2">
                            <Button className="bg-[#1d4ed8] hover:bg-[#1e40af] text-white">
                                Conheça Nossa História Completa
                            </Button>
                        </div>
                    </div>
                    <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                        <Image
                            src="/placeholder.svg?height=400&width=600&text=Fundadores+da+ASAPA"
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
