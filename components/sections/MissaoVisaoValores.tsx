import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {Heart, Target} from "lucide-react"

export function MissaoVisaoValores() {
    return (
        <section id="missao-visao-valores" className="w-full py-12 md:py-24 bg-gray-50">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-[#1d4ed8]">
                        Nossos Princípios
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl flex items-center gap-2">
                        <Target className="h-8 w-8 text-[#1d4ed8]"/>
                        Missão, Visão e Valores
                    </h2>
                    <p className="max-w-[700px] text-gray-500 md:text-xl">
                        Os princípios que norteiam nossas ações e definem quem somos
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card className="border-t-4 border-t-[#1d4ed8]">
                        <CardHeader>
                            <div
                                className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                                <Target className="h-6 w-6 text-[#1d4ed8]"/>
                            </div>
                            <CardTitle className="text-2xl">Missão</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600">
                                Promover o surf como esporte, estilo de vida e ferramenta de transformação social,
                                fomentando a
                                prática responsável, a preservação ambiental e o desenvolvimento da comunidade
                                local.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-t-4 border-t-[#1d4ed8]">
                        <CardHeader>
                            <div
                                className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-6 w-6 text-[#1d4ed8]"
                                >
                                    <circle cx="12" cy="12" r="10"/>
                                    <line x1="12" y1="8" x2="12" y2="12"/>
                                    <line x1="12" y1="16" x2="12.01" y2="16"/>
                                </svg>
                            </div>
                            <CardTitle className="text-2xl">Visão</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600">
                                Ser reconhecida como a principal referência em desenvolvimento sustentável do surf
                                no Brasil,
                                inspirando outras comunidades a adotarem práticas que equilibrem esporte, meio
                                ambiente e bem-estar
                                social.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-t-4 border-t-[#1d4ed8]">
                        <CardHeader>
                            <div
                                className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                                <Heart className="h-6 w-6 text-[#1d4ed8]"/>
                            </div>
                            <CardTitle className="text-2xl">Valores</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-gray-600">
                                <li className="flex items-start gap-2">
                                    <span className="text-[#1d4ed8] font-bold">•</span>
                                    <span>Respeito ao meio ambiente e às pessoas</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#1d4ed8] font-bold">•</span>
                                    <span>Ética e transparência em todas as ações</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#1d4ed8] font-bold">•</span>
                                    <span>Inclusão e diversidade no esporte</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#1d4ed8] font-bold">•</span>
                                    <span>Compromisso com a comunidade local</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#1d4ed8] font-bold">•</span>
                                    <span>Excelência e inovação constante</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
