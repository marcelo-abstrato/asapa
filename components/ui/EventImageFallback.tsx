import React from 'react';
import Image from "next/image";
import WaveDivider from "@/components/wave-divider";

export function EventImageFallback() {
    return (
        <div className="relative w-full h-full bg-[#1d4ed8] flex items-center justify-center overflow-hidden">
            {/* Wave divider in the middle */}
            <WaveDivider className="absolute w-full text-white/20 top-1/2 -translate-y-1/2"/>

            {/* ASAPA logo in the center */}
            <div className="relative z-10 w-24 h-24">
                <Image
                    src="/imagens/logo-asapa.png"
                    alt="ASAPA Logo"
                    fill
                    className="object-contain"
                />
            </div>
        </div>
    );
}
