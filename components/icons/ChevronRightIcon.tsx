import React from 'react';

interface ChevronRightIconProps {
    className?: string;
    size?: number;
    'aria-hidden'?: boolean;
}

export function ChevronRightIcon({
                                     className = "",
                                     size = 24,
                                     'aria-hidden': ariaHidden = true
                                 }: ChevronRightIconProps) {
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
            <path d="m9 18 6-6-6-6"/>
        </svg>
    );
}
