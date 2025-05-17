"use client";

import Image from "next/image"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {ChevronDown, ChevronLeft, ChevronRight, ChevronUp, Users} from "lucide-react"
import {diretoriaMembers} from "@/mocks/diretoria"
import {useEffect, useState} from "react"
import {AnimatePresence, motion} from "framer-motion"

interface DiretoriaMember {
    name: string;
    role: string;
    bio: string;
    imageUrl: string;
}

export function Diretoria() {
    const [currentPage, setCurrentPage] = useState(0);
    const [expandedBios, setExpandedBios] = useState<Record<number, boolean>>({});
    const itemsPerPage = 6;
    const totalPages = Math.ceil(diretoriaMembers.length / itemsPerPage);

    // Auto-advance carousel every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
        }, 5000);

        return () => clearInterval(interval);
    }, [totalPages]);

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
    };

    const toggleBio = (index: number) => {
        setExpandedBios(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    // Get current page items
    const currentItems = diretoriaMembers.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    );

    return (
        <section id="diretoria" className="w-full py-12 md:py-24 bg-white">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-[#1d4ed8]">Nossa
                        Equipe
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl flex items-center gap-2">
                        <Users className="h-8 w-8 text-[#1d4ed8]"/>
                        Diretoria
                    </h2>
                    <p className="max-w-[700px] text-gray-500 md:text-xl">
                        Conheça os membros da diretoria que trabalham para promover e desenvolver o surf em nossa
                        comunidade.
                    </p>
                </div>

                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentPage}
                            initial={{opacity: 0, x: 20}}
                            animate={{opacity: 1, x: 0}}
                            exit={{opacity: 0, x: -20}}
                            transition={{duration: 0.5}}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {currentItems.map((member, index) => {
                                const globalIndex = currentPage * itemsPerPage + index;
                                const isExpanded = expandedBios[globalIndex] || false;

                                return (
                                    <Card key={index} className="overflow-hidden flex flex-col h-[450px]">
                                        <div className="h-48 bg-gray-200 relative">
                                            <Image
                                                src={member.imageUrl}
                                                alt={member.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <CardHeader className="flex-shrink-0">
                                            <CardTitle>{member.name}</CardTitle>
                                            <CardDescription
                                                className="text-[#1d4ed8] font-medium">{member.role}</CardDescription>
                                        </CardHeader>
                                        <CardContent className="flex-grow overflow-hidden relative">
                                            <div
                                                className={`${isExpanded ? 'h-auto' : 'h-[80px] overflow-hidden'} transition-all duration-300`}>
                                                <p>{member.bio}</p>
                                            </div>
                                            <button
                                                onClick={() => toggleBio(globalIndex)}
                                                className="mt-2 flex items-center text-[#1d4ed8] hover:text-blue-700 transition-colors"
                                            >
                                                {isExpanded ? (
                                                    <>
                                                        <span className="mr-1">Mostrar menos</span>
                                                        <ChevronUp size={16}/>
                                                    </>
                                                ) : (
                                                    <>
                                                        <span className="mr-1">Mostrar mais</span>
                                                        <ChevronDown size={16}/>
                                                    </>
                                                )}
                                            </button>
                                        </CardContent>
                                    </Card>
                                );
                            })}
                        </motion.div>
                    </AnimatePresence>

                    {/* Carousel Controls */}
                    <div className="flex justify-center items-center mt-8 gap-4">
                        <button
                            onClick={handlePrevPage}
                            className="p-2 rounded-full bg-blue-100 text-[#1d4ed8] hover:bg-blue-200 transition-colors"
                            aria-label="Página anterior"
                        >
                            <ChevronLeft className="h-6 w-6"/>
                        </button>

                        <div className="flex gap-2">
                            {Array.from({length: totalPages}).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentPage(index)}
                                    className={`w-3 h-3 rounded-full ${
                                        currentPage === index ? "bg-[#1d4ed8]" : "bg-gray-300"
                                    }`}
                                    aria-label={`Ir para página ${index + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={handleNextPage}
                            className="p-2 rounded-full bg-blue-100 text-[#1d4ed8] hover:bg-blue-200 transition-colors"
                            aria-label="Próxima página"
                        >
                            <ChevronRight className="h-6 w-6"/>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
