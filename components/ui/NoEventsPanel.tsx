import React from 'react';
import {Button} from "@/components/ui/button";

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
        <div className="flex flex-col items-center justify-center p-8 text-center border rounded-lg bg-gray-50">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-400 mb-4"
            >
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                <line x1="16" x2="16" y1="2" y2="6"/>
                <line x1="8" x2="8" y1="2" y2="6"/>
                <line x1="3" x2="21" y1="10" y2="10"/>
            </svg>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-500 mb-4">{description}</p>
            {showButton && type !== 'past' && (
                <Button
                    className={type === 'all' ? "bg-[#1d4ed8] hover:bg-[#1e40af]" : "text-[#1d4ed8] border-[#1d4ed8]"}
                    variant={type === 'all' ? "default" : "outline"}
                >
                    {type === 'all' ? 'Seja o primeiro a criar um evento' : 'Verificar mais tarde'}
                </Button>
            )}
        </div>
    );
}
