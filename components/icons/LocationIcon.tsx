import React from 'react';

interface LocationIconProps {
    className?: string;
    size?: number;
    'aria-hidden'?: boolean;
}

export function LocationIcon({
                                 className = "",
                                 size = 24,
                                 'aria-hidden': ariaHidden = true
                             }: LocationIconProps) {
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
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
            <circle cx="12" cy="10" r="3"/>
        </svg>
    );
}
