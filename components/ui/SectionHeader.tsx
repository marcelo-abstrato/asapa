import React, {ReactNode} from 'react';

interface SectionHeaderProps {
    badge?: string;
    title: string;
    description?: string;
    icon?: ReactNode;
    className?: string;
}

export function SectionHeader({
                                  badge,
                                  title,
                                  description,
                                  icon,
                                  className = "",
                              }: SectionHeaderProps) {
    return (
        <div className={`flex flex-col items-center justify-center space-y-4 text-center mb-12 ${className}`}>
            {badge && (
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-[#1d4ed8]">
                    {badge}
                </div>
            )}
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl flex items-center gap-2">
                {icon}
                {title}
            </h2>
            {description && (
                <p className="max-w-[700px] text-gray-500 md:text-xl">
                    {description}
                </p>
            )}
        </div>
    );
}
