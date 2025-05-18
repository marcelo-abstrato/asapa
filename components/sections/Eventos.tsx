import Link from "next/link"
import {Button} from "@/components/ui/button"
import {ChevronRight} from "lucide-react"
import {NoEventsPanel} from "@/components/ui/NoEventsPanel"
import {SectionHeader} from "@/components/ui/SectionHeader"
import {EventTabs} from "@/components/ui/EventTabs"
import {CalendarIcon} from "@/components/icons"
import {getEvents} from "@/lib/services"

export async function Eventos() {
    // Fetch and process events using the service function
    const {futureEvents, pastEvents, hasEvents} = await getEvents();

    return (
        <section id="eventos" className="w-full py-12 md:py-24">
            <div className="container px-4 md:px-6">
                <SectionHeader
                    badge="Calendário"
                    title="Eventos"
                    description="Confira nossa agenda de campeonatos, workshops e encontros da comunidade do surf."
                    icon={<CalendarIcon size={32} className="text-[#1d4ed8]"/>}
                />

                {hasEvents ? (
                    <EventTabs
                        futureEvents={futureEvents}
                        pastEvents={pastEvents}
                    />
                ) : (
                    <div className="max-w-4xl mx-auto">
                        <NoEventsPanel type="all"/>
                    </div>
                )}

                <div className="flex justify-center mt-10">
                    <Link href="/eventos" aria-label="Ver página com todos os eventos">
                        <Button
                            variant="outline"
                            className="text-[#1d4ed8] border-[#1d4ed8]"
                            aria-label="Ver todos os eventos"
                        >
                            Ver Todos os Eventos
                            <ChevronRight className="ml-2 h-4 w-4" aria-hidden="true"/>
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
