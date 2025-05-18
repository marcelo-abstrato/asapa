import React from 'react';
import {Button} from "@/components/ui/button";
import {CalendarIcon} from "@/components/icons";

interface NoEventsPanelProps {
    type?: 'all' | 'future' | 'past';
    showButton?: boolean;
}

export function NoEventsPanel({type = 'all', showButton = true}: NoEventsPanelProps) {
    let title = 'Nenhum evento encontrado';
    let description = 'Parece que ainda não temos eventos cadastrados. Fique de olho, em breve teremos novidades para você!';

    if (type === 'future') {
        title = 'Nenhum evento próximo';
        description = 'No momento não temos eventos agendados, mas estamos trabalhando para trazer experiências incríveis para nossa comunidade em breve. Volte logo para conferir as novidades!';
    } else if (type === 'past') {
        title = 'Nenhum evento passado';
        description = 'Ainda não temos registros de eventos anteriores. Nossa história está apenas começando e você faz parte dela!';
    }

    return (
        <div className="flex flex-col items-center justify-center p-8 text-center border rounded-lg bg-gray-50"
             role="alert" aria-live="polite">
            <CalendarIcon size={48} className="text-gray-400 mb-4"/>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-500 mb-4">{description}</p>
            {showButton && type !== 'past' && (
                <Button
                    className="bg-[#1d4ed8] hover:bg-[#1e40af]"
                    variant="default"
                    aria-label="Fique atento para novos eventos"
                >
                    Fique atento para novos eventos
                </Button>
            )}
        </div>
    );
}
