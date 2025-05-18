import React from 'react';
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {EventCard} from "@/components/ui/EventCard";
import {NoEventsPanel} from "@/components/ui/NoEventsPanel";

interface Event {
    id: string;
    title: string;
    startDate: Date;
    endDate: Date;
    location: string;
    description: string;
    image: string;
    createdAt?: Date;
    updatedAt?: Date;
}

interface EventTabsProps {
    futureEvents: Event[];
    pastEvents: Event[];
    className?: string;
}

export function EventTabs({futureEvents, pastEvents, className = ""}: EventTabsProps) {
    return (
        <Tabs defaultValue="futuros" className={`w-full max-w-4xl mx-auto ${className}`}>
            <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="futuros">
                    Eventos Futuros
                    {futureEvents.length > 0 && (
                        <span
                            className="ml-2 inline-flex items-center justify-center rounded-full bg-[#dbeafe] px-2 py-0.5 text-xs font-medium text-[#1d4ed8]">
                            {futureEvents.length}
                        </span>
                    )}
                </TabsTrigger>
                <TabsTrigger value="passados">
                    Eventos Passados
                    {pastEvents.length > 0 && (
                        <span
                            className="ml-2 inline-flex items-center justify-center rounded-full bg-[#dbeafe] px-2 py-0.5 text-xs font-medium text-[#1d4ed8]">
                            {pastEvents.length}
                        </span>
                    )}
                </TabsTrigger>
            </TabsList>

            <TabsContent value="futuros" className="space-y-6">
                {futureEvents.length > 0 ? (
                    futureEvents.slice(0, 4).map((event, index) => (
                        <EventCard
                            key={event.id || index}
                            event={event}
                            isPastEvent={false}
                        />
                    ))
                ) : (
                    <NoEventsPanel type="future"/>
                )}
            </TabsContent>

            <TabsContent value="passados" className="space-y-6">
                {pastEvents.length > 0 ? (
                    pastEvents.slice(0, 4).map((event, index) => (
                        <EventCard
                            key={event.id || index}
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
    );
}
