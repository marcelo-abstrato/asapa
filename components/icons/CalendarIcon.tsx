import React from 'react';

interface CalendarIconProps {
    className?: string;
    size?: number;
    'aria-hidden'?: boolean;
}

export function CalendarIcon({
                                 className = "",
                                 size = 24,
                                 'aria-hidden': ariaHidden = true
                             }: CalendarIconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            aria-hidden={ariaHidden}
        >
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
            <line x1="16" x2="16" y1="2" y2="6"/>
            <line x1="8" x2="8" y1="2" y2="6"/>
            <line x1="3" x2="21" y1="10" y2="10"/>
        </svg>
    );
}
