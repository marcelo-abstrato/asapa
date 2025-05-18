import React from 'react';
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {EventCard} from "@/components/ui/EventCard";
import {NoEventsPanel} from "@/components/ui/NoEventsPanel";

interface EventTabsProps {
    futureEvents: any[];
    pastEvents: any[];
    className?: string;
}

export function EventTabs({futureEvents, pastEvents, className = ""}: EventTabsProps) {
    return (
        <Tabs defaultValue="futuros" className={`w-full max-w-4xl mx-auto ${className}`}>
            <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="futuros">Eventos Futuros</TabsTrigger>
                <TabsTrigger value="passados">Eventos Passados</TabsTrigger>
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
