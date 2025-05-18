import React from 'react';
import Image from "next/image";
import {Button} from "@/components/ui/button";

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

export interface EventCardProps {
    event: {
        title: string;
        startDate: Date;
        endDate: Date;
        location: string;
        description: string;
        image: string;
    };
    showResults?: boolean;
    isPastEvent?: boolean;
}

export function EventCard({
                              event,
                              showResults = false,
                              isPastEvent = false
                          }: EventCardProps) {
    // Image container with fixed aspect ratio and black background
    const imageContainerClasses = "md:w-1/3 h-48 md:h-auto relative aspect-[16/9] bg-black";

    // Container layout
    const containerClasses = "flex flex-col md:flex-row gap-6 border rounded-lg overflow-hidden bg-white shadow-sm";

    return (
        <div className={containerClasses}>
            <div className={imageContainerClasses}>
                <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    fill
                    className="object-contain"
                />
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
                    {isPastEvent ? (
                        <>
                            <Button
                                variant="outline"
                                className="text-[#1d4ed8] border-[#1d4ed8]"
                                title="Em breve teremos a galeria de fotos disponível!"
                            >
                                Ver Galeria de Fotos
                            </Button>

                            {showResults && (
                                <Button variant="ghost" className="text-[#1d4ed8]">
                                    Resultados
                                </Button>
                            )}
                        </>
                    ) : (
                        <>
                            <Button className="bg-[#1d4ed8] hover:bg-[#1e40af]">
                                Inscrever-se
                            </Button>
                            <Button variant="outline" className="text-[#1d4ed8] border-[#1d4ed8]">
                                Mais Informações
                            </Button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
