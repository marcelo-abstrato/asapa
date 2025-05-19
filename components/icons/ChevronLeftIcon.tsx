import React from 'react';

interface ChevronLeftIconProps {
    className?: string;
    size?: number;
    'aria-hidden'?: boolean;
}

export function ChevronLeftIcon({
                                    className = "",
                                    size = 24,
                                    'aria-hidden': ariaHidden = true
                                }: ChevronLeftIconProps) {
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
            <path d="m15 18-6-6 6-6"/>
        </svg>
    );
}
