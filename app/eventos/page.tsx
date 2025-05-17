import Image from "next/image"
import Link from "next/link"
import {Button} from "@/components/ui/button"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {DesktopNav, MobileMenu} from "@/components/navigation"
import {navLinks} from "@/mocks/navigation"
import {Footer} from "@/components/sections"
import prisma from "@/lib/prisma"

export const metadata = {
    title: "Eventos | ASAPA",
    description: "Confira todos os eventos da Associação de Surf",
}

export default async function EventosPage() {
    const eventosFuturos = await prisma.event.findMany({
        where: {
            isFuture: true
        }
    })

    const eventosPassados = await prisma.event.findMany({
        where: {
            isFuture: false
        }
    })

    const todosEventos = [...eventosFuturos, ...eventosPassados].sort((a, b) => {
        return a.date.localeCompare(b.date)
    })

    return (
        <div className="flex flex-col min-h-screen">
            <header
                className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-16 items-center justify-between">
                    <div className="flex items-center gap-2 font-bold text-xl text-[#1d4ed8]">
                        <Link href="/">
                            <Image src="/images/logo-asapa.png" alt="ASAPA Logo" width={40} height={40}
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
                                Calendário Completo
                            </div>
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-[#1d4ed8]"
                                >
                                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                                    <line x1="16" x2="16" y1="2" y2="6"/>
                                    <line x1="8" x2="8" y1="2" y2="6"/>
                                    <line x1="3" x2="21" y1="10" y2="10"/>
                                </svg>
                                Todos os Eventos
                            </h1>
                            <p className="max-w-[700px] text-gray-500 md:text-xl">
                                Confira nossa agenda completa de campeonatos, workshops e encontros da comunidade do
                                surf.
                            </p>
                        </div>

                        <Tabs defaultValue="todos" className="w-full max-w-6xl mx-auto">
                            <TabsList className="grid w-full grid-cols-3 mb-8">
                                <TabsTrigger value="todos">Todos os Eventos</TabsTrigger>
                                <TabsTrigger value="futuros">Eventos Futuros</TabsTrigger>
                                <TabsTrigger value="passados">Eventos Passados</TabsTrigger>
                            </TabsList>

                            <TabsContent value="todos" className="space-y-6">
                                {todosEventos.map((event, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col md:flex-row gap-6 border rounded-lg overflow-hidden bg-white shadow-sm"
                                    >
                                        <div className="md:w-1/3 h-48 md:h-auto relative">
                                            <Image src={event.image || "/placeholder.svg"} alt={event.title} fill
                                                   className="object-cover"/>
                                        </div>
                                        <div className="flex-1 p-4 sm:p-6 flex flex-col">
                                            <h3 className="text-xl font-bold">{event.title}</h3>
                                            <div className="flex flex-wrap gap-4 my-2">
                                                <div className="flex items-center text-gray-500">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="mr-2"
                                                    >
                                                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                                                        <line x1="16" x2="16" y1="2" y2="6"/>
                                                        <line x1="8" x2="8" y1="2" y2="6"/>
                                                        <line x1="3" x2="21" y1="10" y2="10"/>
                                                    </svg>
                                                    {event.date}
                                                </div>
                                                <div className="flex items-center text-gray-500">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="mr-2"
                                                    >
                                                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                                                        <circle cx="12" cy="10" r="3"/>
                                                    </svg>
                                                    {event.location}
                                                </div>
                                            </div>
                                            <p className="text-gray-600 flex-grow">{event.description}</p>
                                            <div className="flex flex-col sm:flex-row gap-3 mt-4">
                                                {eventosFuturos.some(e => e.id === event.id) ? (
                                                    <>
                                                        <Button
                                                            className="bg-[#1d4ed8] hover:bg-[#1e40af]">Inscrever-se</Button>
                                                        <Button variant="outline"
                                                                className="text-[#1d4ed8] border-[#1d4ed8]">
                                                            Mais Informações
                                                        </Button>
                                                    </>
                                                ) : (
                                                    <>
                                                        <Button variant="outline"
                                                                className="text-[#1d4ed8] border-[#1d4ed8]">
                                                            Ver Galeria de Fotos
                                                        </Button>
                                                        <Button variant="ghost" className="text-[#1d4ed8]">
                                                            Resultados
                                                        </Button>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </TabsContent>

                            <TabsContent value="futuros" className="space-y-6">
                                {eventosFuturos.map((event, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col md:flex-row gap-6 border rounded-lg overflow-hidden bg-white shadow-sm"
                                    >
                                        <div className="md:w-1/3 h-48 md:h-auto relative">
                                            <Image src={event.image || "/placeholder.svg"} alt={event.title} fill
                                                   className="object-cover"/>
                                        </div>
                                        <div className="flex-1 p-4 sm:p-6 flex flex-col">
                                            <h3 className="text-xl font-bold">{event.title}</h3>
                                            <div className="flex flex-wrap gap-4 my-2">
                                                <div className="flex items-center text-gray-500">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="mr-2"
                                                    >
                                                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                                                        <line x1="16" x2="16" y1="2" y2="6"/>
                                                        <line x1="8" x2="8" y1="2" y2="6"/>
                                                        <line x1="3" x2="21" y1="10" y2="10"/>
                                                    </svg>
                                                    {event.date}
                                                </div>
                                                <div className="flex items-center text-gray-500">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="mr-2"
                                                    >
                                                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                                                        <circle cx="12" cy="10" r="3"/>
                                                    </svg>
                                                    {event.location}
                                                </div>
                                            </div>
                                            <p className="text-gray-600 flex-grow">{event.description}</p>
                                            <div className="flex flex-col sm:flex-row gap-3 mt-4">
                                                <Button
                                                    className="bg-[#1d4ed8] hover:bg-[#1e40af]">Inscrever-se</Button>
                                                <Button variant="outline" className="text-[#1d4ed8] border-[#1d4ed8]">
                                                    Mais Informações
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </TabsContent>

                            <TabsContent value="passados" className="space-y-6">
                                {eventosPassados.map((event, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col md:flex-row gap-6 border rounded-lg overflow-hidden bg-white shadow-sm"
                                    >
                                        <div className="md:w-1/3 h-48 md:h-auto relative">
                                            <Image src={event.image || "/placeholder.svg"} alt={event.title} fill
                                                   className="object-cover"/>
                                        </div>
                                        <div className="flex-1 p-4 sm:p-6 flex flex-col">
                                            <h3 className="text-xl font-bold">{event.title}</h3>
                                            <div className="flex flex-wrap gap-4 my-2">
                                                <div className="flex items-center text-gray-500">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="mr-2"
                                                    >
                                                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                                                        <line x1="16" x2="16" y1="2" y2="6"/>
                                                        <line x1="8" x2="8" y1="2" y2="6"/>
                                                        <line x1="3" x2="21" y1="10" y2="10"/>
                                                    </svg>
                                                    {event.date}
                                                </div>
                                                <div className="flex items-center text-gray-500">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="mr-2"
                                                    >
                                                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                                                        <circle cx="12" cy="10" r="3"/>
                                                    </svg>
                                                    {event.location}
                                                </div>
                                            </div>
                                            <p className="text-gray-600 flex-grow">{event.description}</p>
                                            <div className="flex flex-col sm:flex-row gap-3 mt-4">
                                                <Button variant="outline" className="text-[#1d4ed8] border-[#1d4ed8]">
                                                    Ver Galeria de Fotos
                                                </Button>
                                                <Button variant="ghost" className="text-[#1d4ed8]">
                                                    Resultados
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </TabsContent>
                        </Tabs>

                        <div className="flex justify-center mt-10">
                            <Link href="/">
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
