import React from 'react';
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {CalendarIcon, LocationIcon} from "@/components/icons";
import {formatDateRange, formatISODate} from "@/lib/helpers";
import {EventImageFallback} from "@/components/ui/EventImageFallback";

export interface EventCardProps {
    event: {
        title: string;
        startDate: Date;
        endDate: Date;
        location: string;
        description: string;
        image: string;
    };
    showSubscribe?: boolean;
    isPastEvent?: boolean;
    showResults?: boolean;
}

export function EventCard({
                              event,
                              showSubscribe = false,
                              isPastEvent = false,
                          }: EventCardProps) {
    // Image container with fixed aspect ratio and blue background
    const imageContainerClasses = "md:w-1/3 h-48 md:h-auto relative aspect-[16/9] bg-blue-100";

    // Container layout
    const containerClasses = "flex flex-col md:flex-row gap-6 border rounded-lg overflow-hidden bg-white shadow-sm";

    return (
        <div className={containerClasses}>
            <div className={imageContainerClasses}>
                {event.image ? (
                    <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-contain"
                    />
                ) : (
                    <EventImageFallback/>
                )}
            </div>
            <div className="flex-1 p-4 sm:p-6 flex flex-col">
                <h3 className="text-xl font-bold">{event.title}</h3>
                <div className="flex flex-wrap gap-4 my-2">
                    <time
                        dateTime={`${formatISODate(event.startDate)}/${formatISODate(event.endDate)}`}
                        className="flex items-center text-gray-500"
                    >
                        <CalendarIcon size={16} className="mr-2"/>
                        {formatDateRange(event.startDate, event.endDate)}
                    </time>
                    <div className="flex items-center text-gray-500">
                        <LocationIcon size={16} className="mr-2"/>
                        {event.location}
                    </div>
                </div>
                <p className="text-gray-600 flex-grow">{event.description}</p>
                <div className="flex flex-col sm:flex-row gap-3 mt-4">
                    {isPastEvent ? (
                        <>
                            <Button
                                variant="outline"
                                className="text-[#1d4ed8] border-[#1d4ed8]"
                                disabled={true}
                                disabledTooltip="Em breve teremos a galeria de fotos disponível!"
                                aria-label={`Ver galeria de fotos do evento ${event.title}`}
                            >
                                Ver Galeria de Fotos
                            </Button>
                        </>
                    ) : (
                        <>
                            {showSubscribe && (
                                <Button
                                    className="bg-[#1d4ed8] hover:bg-[#1e40af]"
                                    disabled={event.title.includes("Esgotado")}
                                    disabledTooltip="Inscrições esgotadas para este evento"
                                    aria-label={`Inscrever-se no evento ${event.title}`}
                                >
                                    Inscrever-se
                                </Button>
                            )}
                            <Button
                                variant="outline"
                                className="text-[#1d4ed8] border-[#1d4ed8]"
                                disabled={true}
                                disabledTooltip="Em breve"
                                aria-label={`Mais informações sobre o evento ${event.title}`}
                            >
                                Mais Informações
                            </Button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
