import Image from "next/image"
import Link from "next/link"
import {Button} from "@/components/ui/button"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {ChevronRight} from "lucide-react"
import {eventosFuturos as mockEventosFuturos, eventosPassados as mockEventosPassados} from "@/mocks/eventos"
import {NoEventsPanel} from "@/components/ui/NoEventsPanel"

// Helper function to format date
function formatDate(startDate: Date, endDate: Date) {
    const startDay = startDate.getDate();
    const endDay = endDate.getDate();
    const startMonth = startDate.toLocaleString('pt-BR', {month: 'long'});
    const endMonth = endDate.toLocaleString('pt-BR', {month: 'long'});
    const startYear = startDate.getFullYear();
    const endYear = endDate.getFullYear();

    if (startYear !== endYear) {
        return `${startDay} de ${startMonth}, ${startYear} - ${endDay} de ${endMonth}, ${endYear}`;
    } else if (startMonth !== endMonth) {
        return `${startDay} de ${startMonth} - ${endDay} de ${endMonth}, ${startYear}`;
    } else if (startDay !== endDay) {
        return `${startDay}-${endDay} de ${startMonth}, ${startYear}`;
    } else {
        return `${startDay} de ${startMonth}, ${startYear}`;
    }
}

// Define the Event interface
interface Event {
    title: string;
    startDate: Date;
    endDate: Date;
    date?: string; // Optional as it's kept for backward compatibility
    location: string;
    description: string;
    image: string;
}

// Helper function to determine if an event is in the future
function isFutureEvent(event: Event) {
    const now = new Date();
    return event.endDate > now;
}

export function Eventos() {
    // Filter and sort events based on dates
    const allEvents = [...mockEventosFuturos, ...mockEventosPassados];
    const eventosFuturos = allEvents.filter(isFutureEvent)
        .sort((a, b) => a.startDate.getTime() - b.startDate.getTime());
    const eventosPassados = allEvents.filter(event => !isFutureEvent(event))
        .sort((a, b) => b.startDate.getTime() - a.startDate.getTime());

    // Get the latest 4 events for the home page
    const latestEvents = [...eventosFuturos, ...eventosPassados].sort((a, b) =>
        b.startDate.getTime() - a.startDate.getTime()
    ).slice(0, 4);

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
                                                    {formatDate(event.startDate, event.endDate)}
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
                                ))
                            ) : (
                                <NoEventsPanel type="future"/>
                            )}
                        </TabsContent>

                        <TabsContent value="passados" className="space-y-6">
                            {eventosPassados.length > 0 ? (
                                eventosPassados.slice(0, 4).map((event, index) => (
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
                                                    {formatDate(event.startDate, event.endDate)}
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
