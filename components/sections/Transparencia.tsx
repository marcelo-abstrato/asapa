import {Button} from "@/components/ui/button"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {FileText} from "lucide-react"
import {atasReunioes, projetos, relatoriosFinanceiros} from "@/mocks/transparencia"

export function Transparencia() {
    return (
        <section id="transparencia" className="w-full py-12 md:py-24">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-[#1d4ed8]">
                        Prestação de Contas
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl flex items-center gap-2">
                        <FileText className="h-8 w-8 text-[#1d4ed8]"/>
                        Transparência
                    </h2>
                    <p className="max-w-[700px] text-gray-500 md:text-xl">
                        Acesso a todos os relatórios financeiros, atas de reuniões e decisões da diretoria.
                    </p>
                </div>

                <Tabs defaultValue="financeiro" className="w-full max-w-4xl mx-auto">
                    <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="financeiro">Relatórios Financeiros</TabsTrigger>
                        <TabsTrigger value="atas">Atas de Reuniões</TabsTrigger>
                        <TabsTrigger value="projetos">Projetos</TabsTrigger>
                    </TabsList>
                    <TabsContent value="financeiro" className="p-4 border rounded-lg mt-4">
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold">Relatórios Financeiros</h3>
                            <div className="space-y-2">
                                {relatoriosFinanceiros.map((report, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 border rounded hover:bg-gray-50 gap-2"
                                    >
                                        <div>
                                            <h4 className="font-medium">{report.title}</h4>
                                            <p className="text-sm text-gray-500">Publicado em: {report.date}</p>
                                        </div>
                                        <Button variant="ghost" size="sm" className="text-[#1d4ed8]">
                                            <FileText className="h-4 w-4 mr-2"/>
                                            Visualizar
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="atas" className="p-4 border rounded-lg mt-4">
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold">Atas de Reuniões</h3>
                            <div className="space-y-2">
                                {atasReunioes.map((meeting, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 border rounded hover:bg-gray-50 gap-2"
                                    >
                                        <div>
                                            <h4 className="font-medium">{meeting.title}</h4>
                                            <p className="text-sm text-gray-500">Realizada em: {meeting.date}</p>
                                        </div>
                                        <Button variant="ghost" size="sm" className="text-[#1d4ed8]">
                                            <FileText className="h-4 w-4 mr-2"/>
                                            Visualizar
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="projetos" className="p-4 border rounded-lg mt-4">
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold">Projetos em Andamento</h3>
                            <div className="space-y-2">
                                {projetos.map((project, index) => (
                                    <div key={index} className="p-3 border rounded hover:bg-gray-50">
                                        <div className="flex justify-between items-center mb-2">
                                            <h4 className="font-medium">{project.title}</h4>
                                            <span className="text-sm font-medium">{project.progress}%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                                            <div
                                                className="bg-[#1d4ed8] h-2.5 rounded-full"
                                                style={{width: `${project.progress}%`}}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    )
}
