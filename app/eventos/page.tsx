import Link from "next/link"
import Image from "next/image"
import {Button} from "@/components/ui/button"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {DesktopNav, MobileMenu} from "@/components/navigation"
import {navLinks} from "@/mocks/navigation"
import {Footer} from "@/components/sections"
import {EventCard} from "@/components/ui/EventCard"
import prisma from "@/lib/prisma"

export const metadata = {
    title: "Eventos | ASAPA",
    description: "Confira todos os eventos da Associação de Surf",
}


export default async function EventosPage() {
  const now = new Date();

  // Get all events
  const allEvents = await prisma.event.findMany({
    orderBy: {
        startDate: 'desc'
        }
  });

  // Filter events based on current date
  const eventosFuturos = allEvents.filter(event => new Date(event.endDate) > now);
  const eventosPassados = allEvents.filter(event => new Date(event.endDate) <= now);

    // Sort events - maintaining the database sort order (desc)
    // Future events should be in ascending order for chronological display
  eventosFuturos.sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
    // Past events are already in descending order from the database

    // Combine all events for the "Todos" tab - future events first, then past events
    const todosEventos = [...eventosFuturos, ...eventosPassados];


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
                                <TabsTrigger value="todos">
                                    <span className="hidden md:inline">Todos os Eventos</span>
                                    <span className="md:hidden">Todos</span>
                                </TabsTrigger>
                                <TabsTrigger value="futuros">
                                    <span className="hidden md:inline">Proximos Eventos</span>
                                    <span className="md:hidden">Proximos</span>
                                </TabsTrigger>
                                <TabsTrigger value="passados">
                                    <span className="hidden md:inline">Eventos Anteriores</span>
                                    <span className="md:hidden">Anteriores</span>
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="todos" className="space-y-6">
                                {todosEventos.map((event, index) => {
                                    const isPastEvent = !eventosFuturos.some(e => e.id === event.id);
                                    return (
                                        <EventCard
                                            key={index}
                                            event={event}
                                            isPastEvent={isPastEvent}
                                            showSubscribe={false}
                                        />
                                    );
                                })}
                            </TabsContent>

                            <TabsContent value="futuros" className="space-y-6">
                                {eventosFuturos.map((event, index) => (
                                    <EventCard
                                        key={index}
                                        event={event}
                                        isPastEvent={false}
                                        showSubscribe={false}
                                    />
                                ))}
                            </TabsContent>

                            <TabsContent value="passados" className="space-y-6">
                                {eventosPassados.map((event, index) => (
                                    <EventCard
                                        key={index}
                                        event={event}
                                        isPastEvent={true}
                                        showSubscribe={false}
                                    />
                                ))}
                            </TabsContent>
                        </Tabs>

                        <div className="flex justify-center mt-10">
                            <Link href="/#eventos">
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
