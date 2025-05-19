import Link from "next/link"
import Image from "next/image"
import type {Metadata} from "next"
import {Button} from "@/components/ui/button"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {DesktopNav, MobileMenu} from "@/components/navigation"
import {navLinks} from "@/mocks/navigation"
import {Footer} from "@/components/sections"
import {ArrowLeft, BarChart, FileText, Users} from "lucide-react"
import {atasReunioes, doacao, relatoriosFinanceiros} from "@/mocks/transparencia"
import {PDFViewer} from "@/components/ui/PDFViewer"

export const metadata: Metadata = {
    title: "Transparência e Prestação de Contas | ASAPA - Associação de Surf do Atalaia e Praia do Amor",
    description: "Acesso a todos os relatórios financeiros, atas de reuniões e informações sobre doações da ASAPA. Conheça nossa gestão transparente e responsável.",
    alternates: {
        canonical: "/transparencia"
    },
    openGraph: {
        title: "Transparência e Prestação de Contas | ASAPA",
        description: "Acesso a todos os relatórios financeiros, atas de reuniões e informações sobre doações da ASAPA. Conheça nossa gestão transparente e responsável.",
        url: "https://asapa.com.br/transparencia",
        type: "website",
    }
}

export default function TransparenciaPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <header
                className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-20 md:h-16 items-center justify-between">
                    <div className="flex items-center gap-2 font-bold text-xl text-[#1d4ed8]">
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
                <section className="w-full py-12 md:py-24">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-[#1d4ed8]">
                                Prestação de Contas
                            </div>
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl flex items-center gap-2">
                                <FileText className="h-8 w-8 text-[#1d4ed8]"/>
                                Transparência
                            </h1>
                            <p className="max-w-[700px] text-gray-500 md:text-xl">
                                Acesso a todos os relatórios financeiros, atas de reuniões e informações sobre doações
                                da ASAPA.
                            </p>

                            <div className="mt-6">
                                <Link href="/#transparencia">
                                    <Button variant="outline" className="text-[#1d4ed8] border-[#1d4ed8]">
                                        <ArrowLeft className="h-4 w-4 mr-2"/>
                                        Voltar para a Página Inicial
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        <Tabs defaultValue="financeiro" className="w-full max-w-4xl mx-auto mt-8">
                            <TabsList className="grid w-full grid-cols-3">
                                <TabsTrigger value="financeiro">
                                    <span className="hidden md:inline">Relatórios</span>
                                    <span className="md:hidden">Relatorios</span>
                                    {relatoriosFinanceiros.length > 0 && (
                                        <span
                                            className="ml-2 inline-flex items-center justify-center rounded-full bg-[#dbeafe] px-2 py-0.5 text-xs font-medium text-[#1d4ed8]">
                      {relatoriosFinanceiros.length}
                    </span>
                                    )}
                                </TabsTrigger>
                                <TabsTrigger value="atas">
                                    <span className="hidden md:inline">Reunião</span>
                                    <span className="md:hidden">Reuniao</span>
                                    {atasReunioes.length > 0 && (
                                        <span
                                            className="ml-2 inline-flex items-center justify-center rounded-full bg-[#dbeafe] px-2 py-0.5 text-xs font-medium text-[#1d4ed8]">
                      {atasReunioes.length}
                    </span>
                                    )}
                                </TabsTrigger>
                                <TabsTrigger value="doacao" disabled>
                                    <span className="hidden md:inline">Doação</span>
                                    <span className="md:hidden">Doacao</span>
                                    {doacao.length > 0 && (
                                        <span
                                            className="ml-2 inline-flex items-center justify-center rounded-full bg-[#dbeafe] px-2 py-0.5 text-xs font-medium text-[#1d4ed8]">
                      {doacao.length}
                    </span>
                                    )}
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="financeiro" className="p-4 border rounded-lg mt-4">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2">
                                        <BarChart className="h-5 w-5 text-[#1d4ed8]"/>
                                        <h3 className="text-xl font-bold">Relatórios Financeiros</h3>
                                    </div>
                                    <p className="text-gray-500">
                                        Acesso a todos os relatórios financeiros da ASAPA, incluindo balanços anuais,
                                        relatórios trimestrais e prestações de contas de eventos.
                                    </p>
                                    <div className="space-y-2 mt-6">
                                        {relatoriosFinanceiros.map((report, index) => (
                                            <div
                                                key={index}
                                                className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 border rounded hover:bg-gray-50 gap-2"
                                            >
                                                <div>
                                                    <h4 className="font-medium">{report.title}</h4>
                                                    <p className="text-sm text-gray-500">Publicado em: {report.date}</p>
                                                </div>
                                                <PDFViewer
                                                    filePath={report.file}
                                                    buttonVariant="ghost"
                                                    buttonSize="sm"
                                                    buttonClassName="text-[#1d4ed8]"
                                                    buttonText="Visualizar"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="atas" className="p-4 border rounded-lg mt-4">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2">
                                        <Users className="h-5 w-5 text-[#1d4ed8]"/>
                                        <h3 className="text-xl font-bold">Atas de Reuniões</h3>
                                    </div>
                                    <p className="text-gray-500">
                                        Acesso a todas as atas de reuniões da diretoria, assembleias gerais e encontros
                                        com parceiros.
                                    </p>
                                    <div className="space-y-2 mt-6">
                                        {atasReunioes.map((meeting, index) => (
                                            <div
                                                key={index}
                                                className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 border rounded hover:bg-gray-50 gap-2"
                                            >
                                                <div>
                                                    <h4 className="font-medium">{meeting.title}</h4>
                                                    <p className="text-sm text-gray-500">Realizada
                                                        em: {meeting.date}</p>
                                                </div>
                                                <PDFViewer
                                                    filePath={meeting.file}
                                                    buttonVariant="ghost"
                                                    buttonSize="sm"
                                                    buttonClassName="text-[#1d4ed8]"
                                                    buttonText="Visualizar"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="doacao" className="p-4 border rounded-lg mt-4">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2">
                                        <BarChart className="h-5 w-5 text-[#1d4ed8]"/>
                                        <h3 className="text-xl font-bold">Doação</h3>
                                    </div>
                                    <p className="text-gray-500">
                                        Acompanhe as doações recebidas pela ASAPA.
                                    </p>
                                    <div className="space-y-4 mt-6">
                                        {doacao.map((item, index) => (
                                            <div
                                                key={index}
                                                className="p-4 border rounded hover:bg-gray-50"
                                            >
                                                <div className="flex justify-between items-center mb-2">
                                                    <h4 className="font-medium">{item.title}</h4>
                                                    <span
                                                        className="inline-flex items-center justify-center rounded-full bg-[#dbeafe] px-2 py-0.5 text-xs font-medium text-[#1d4ed8]">
                            {item.progress}%
                          </span>
                                                </div>
                                                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                                                    <div
                                                        className="bg-[#1d4ed8] h-2.5 rounded-full"
                                                        style={{width: `${item.progress}%`}}
                                                    ></div>
                                                </div>
                                                <div className="flex justify-between text-xs text-gray-500">
                                                    <span>Iniciado</span>
                                                    <span>Em andamento</span>
                                                    <span>Concluído</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </TabsContent>
                        </Tabs>

                        <div className="flex justify-center mt-10">
                            <Link href="/#transparencia">
                                <Button variant="outline" className="text-[#1d4ed8] border-[#1d4ed8]">
                                    Voltar para a Página Inicial
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    )
}
