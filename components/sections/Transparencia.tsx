import {Button, PDFViewer, Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui"
import {FileText} from "lucide-react"
import {atasReunioes, relatoriosFinanceiros} from "@/mocks/transparencia"
import Link from "next/link"

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
                        <TabsTrigger value="financeiro">
                            <span className="hidden md:inline">Relatórios Financeiros</span>
                            <span className="md:hidden">Financeiro</span>
                            {relatoriosFinanceiros.length > 0 && (
                                <span
                                    className="ml-2 inline-flex items-center justify-center rounded-full bg-[#dbeafe] px-2 py-0.5 text-xs font-medium text-[#1d4ed8]">
                                    {relatoriosFinanceiros.length}
                                </span>
                            )}
                        </TabsTrigger>
                        <TabsTrigger value="atas">
                            <span className="hidden md:inline">Atas de Reuniões</span>
                            <span className="md:hidden">Reunioes</span>
                            {atasReunioes.length > 0 && (
                                <span
                                    className="ml-2 inline-flex items-center justify-center rounded-full bg-[#dbeafe] px-2 py-0.5 text-xs font-medium text-[#1d4ed8]">
                                    {atasReunioes.length}
                                </span>
                            )}
                        </TabsTrigger>
                        <TabsTrigger value="doacoes" disabled>
                            <span className="hidden md:inline">Doações</span>
                            <span className="md:hidden">Doacao</span>
                        </TabsTrigger>
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
                                        <PDFViewer filePath={report.file}/>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-center mt-4">
                                <Link href="/transparencia">
                                    <Button variant="outline" className="text-[#1d4ed8]">
                                        Ver todos
                                    </Button>
                                </Link>
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
                                        <PDFViewer filePath={meeting.file}/>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-center mt-4">
                                <Link href="/transparencia">
                                    <Button variant="outline" className="text-[#1d4ed8]">
                                        Ver todos
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="doacoes" className="p-4 border rounded-lg mt-4">
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold">Doações</h3>
                            <div className="flex flex-col items-center justify-center p-8 text-center">
                                <div
                                    className="inline-block rounded-lg bg-yellow-100 px-3 py-1 text-sm text-yellow-800 mb-4">
                                    Em breve
                                </div>
                                <p className="text-gray-500 mb-4">
                                    Estamos trabalhando para disponibilizar informações sobre doações em breve.
                                </p>
                                <div className="w-full max-w-md bg-gray-200 rounded-full h-2.5 mb-4">
                                    <div
                                        className="bg-yellow-400 h-2.5 rounded-full"
                                        style={{width: '50%'}}
                                    ></div>
                                </div>
                                <p className="text-sm text-gray-400">
                                    Desenvolvimento em andamento
                                </p>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    )
}
