import Link from "next/link"
import {Button} from "@/components/ui/button"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {ChevronRight} from "lucide-react"
import {NoEventsPanel} from "@/components/ui/NoEventsPanel"
import {EventCard} from "@/components/ui/EventCard"
import prisma from "@/lib/prisma"

export async function Eventos() {
    const now = new Date();

    // Fetch all events from the database
    const allEvents = await prisma.event.findMany({
        orderBy: {
            startDate: 'asc'
        }
    });

    // Filter events based on current date
    const eventosFuturos = allEvents
        .filter(event => new Date(event.endDate) > now)
        .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());

    const eventosPassados = allEvents
        .filter(event => new Date(event.endDate) <= now)
        .sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());

    // Get the latest 4 events for the home page
    const latestEvents = [...eventosFuturos, ...eventosPassados]
        .sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime())
        .slice(0, 4);

    // Check if there are any events
    const hasEvents = latestEvents.length > 0;

    return (
        <section id="eventos" className="w-full py-12 md:py-24">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <div
                        className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-[#1d4ed8]">Calendário
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl flex items-center gap-2">
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
                        Eventos
                    </h2>
                    <p className="max-w-[700px] text-gray-500 md:text-xl">
                        Confira nossa agenda de campeonatos, workshops e encontros da comunidade do surf.
                    </p>
                </div>

                {hasEvents ? (
                    <Tabs defaultValue="futuros" className="w-full max-w-4xl mx-auto">
                        <TabsList className="grid w-full grid-cols-2 mb-8">
                            <TabsTrigger value="futuros">Eventos Futuros</TabsTrigger>
                            <TabsTrigger value="passados">Eventos Passados</TabsTrigger>
                        </TabsList>

                        <TabsContent value="futuros" className="space-y-6">
                            {eventosFuturos.length > 0 ? (
                                eventosFuturos.slice(0, 4).map((event, index) => (
                                    <EventCard
                                        key={index}
                                        event={event}
                                        isPastEvent={false}
                                    />
                                ))
                            ) : (
                                <NoEventsPanel type="future"/>
                            )}
                        </TabsContent>

                        <TabsContent value="passados" className="space-y-6">
                            {eventosPassados.length > 0 ? (
                                eventosPassados.slice(0, 4).map((event, index) => (
                                    <EventCard
                                        key={index}
                                        event={event}
                                        isPastEvent={true}
                                        showResults={true}
                                    />
                                ))
                            ) : (
                                <NoEventsPanel type="past" showButton={false}/>
                            )}
                        </TabsContent>
                    </Tabs>
                ) : (
                    <div className="max-w-4xl mx-auto">
                        <NoEventsPanel type="all"/>
                    </div>
                )}

                <div className="flex justify-center mt-10">
                    <Link href="/eventos">
                        <Button variant="outline" className="text-[#1d4ed8] border-[#1d4ed8]">
                            Ver Todos os Eventos
                            <ChevronRight className="ml-2 h-4 w-4"/>
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
