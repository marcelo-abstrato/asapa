"use client";

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {useMediaQuery} from "@/components/hooks"
import {ChevronLeftIcon, ChevronRightIcon, GlobeIcon} from "@/components/icons"
import Image from "next/image"
import {useCallback, useEffect, useRef, useState} from "react"
import {AnimatePresence, motion} from "framer-motion"

// ODS data with numbers, titles, descriptions, and symbolic images
const odsData = [
    {
        number: 3,
        title: "Saúde e Bem-Estar",
        description: "Promovemos a saúde física e mental através da prática do surf, incentivando um estilo de vida ativo e saudável para todas as idades.",
        image: "/imagens/ods/saude.png"
    },
    {
        number: 4,
        title: "Educação de Qualidade",
        description: "Oferecemos programas educacionais sobre o oceano, meio ambiente e esporte, contribuindo para a formação integral de crianças e jovens.",
        image: "/imagens/ods/educacao.png"
    },
    {
        number: 5,
        title: "Igualdade de Gênero",
        description: "Incentivamos a participação igualitária de mulheres no surf, promovendo eventos e iniciativas que valorizam a diversidade de gênero no esporte.",
        image: "/imagens/ods/igualdade.png"
    },
    {
        number: 10,
        title: "Redução das Desigualdades",
        description: "Trabalhamos para tornar o surf acessível a todos, independentemente de condição socioeconômica, através de projetos sociais inclusivos.",
        image: "/imagens/ods/desigualdade.png"
    },
    {
        number: 13,
        title: "Ação Contra a Mudança do Clima",
        description: "Realizamos ações de conscientização sobre mudanças climáticas e seus impactos nos oceanos e zonas costeiras.",
        image: "/imagens/ods/clima.png"
    },
    {
        number: 14,
        title: "Vida na Água",
        description: "Promovemos a conservação dos ecossistemas marinhos através de limpezas de praia, monitoramento da qualidade da água e educação ambiental.",
        image: "/imagens/ods/agua.png"
    }
]

export function ODS() {
    const isMobile = useMediaQuery('(max-width: 768px)');
    const [mounted, setMounted] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    // Get carousel timer from environment variable or use default (5000ms)
    const carouselTimer = process.env.NEXT_PUBLIC_CAROUSEL_TIMER ? parseInt(process.env.NEXT_PUBLIC_CAROUSEL_TIMER) : 5000;
    // Reference to store the interval timer
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    // Handle SSR (server-side rendering)
    useEffect(() => {
        setMounted(true);
    }, []);

    // Debounced page change function
    const debouncedPageChange = useCallback(() => {
        let timer: NodeJS.Timeout;
        return () => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % odsData.length);
            }, 300); // 300ms debounce
        };
    }, []);

    // Auto-advance carousel with debounce when on mobile
    useEffect(() => {
        if (mounted && isMobile) {
            const pageChanger = debouncedPageChange();
            intervalRef.current = setInterval(pageChanger, carouselTimer);
            return () => {
                if (intervalRef.current) {
                    clearInterval(intervalRef.current);
                }
            };
        }
    }, [debouncedPageChange, carouselTimer, mounted, isMobile]);

    // Function to reset the timer
    const resetTimer = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        if (isMobile) {
            const pageChanger = debouncedPageChange();
            intervalRef.current = setInterval(pageChanger, carouselTimer);
        }
    }, [debouncedPageChange, carouselTimer, isMobile]);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + odsData.length) % odsData.length);
        resetTimer();
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % odsData.length);
        resetTimer();
    };

    // Render ODS card (used in both grid and carousel)
    const renderODSCard = (ods: typeof odsData[0]) => (
        <Card key={ods.number} className="border-t-4 border-t-primary overflow-hidden h-full">
            <CardHeader className="relative">
                <div
                    className="absolute top-0 right-0 bg-primary text-primary-foreground text-xl font-bold w-12 h-12 flex items-center justify-center rounded-bl-lg">
                    {ods.number}
                </div>
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-2">
                    <GlobeIcon size={24} className="text-primary" aria-hidden={true}/>
                </div>
                <CardTitle className="text-2xl">{ods.title}</CardTitle>
            </CardHeader>
            <div className="relative w-full h-48 mb-4">
                <Image
                    src={ods.image}
                    alt={`Imagem simbolizando ${ods.title}`}
                    fill
                    className="object-cover"
                />
            </div>
            <CardContent>
                <p className="text-muted-foreground">
                    {ods.description}
                </p>
            </CardContent>
        </Card>
    );

    return (
        <section id="ods" className="w-full py-12 md:py-24 bg-white">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <div className="inline-block rounded-lg bg-blue-50 px-3 py-1 text-sm text-primary font-medium">
                        Compromisso Global
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl flex items-center gap-2">
                        <GlobeIcon size={32} className="text-primary" aria-hidden={true}/>
                        Objetivos de Desenvolvimento Sustentável
                    </h2>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl">
                        Nosso alinhamento com as ODS da ONU para construir um futuro mais sustentável
                    </p>
                </div>

                {mounted && isMobile ? (
                    // Mobile: Carousel view
                    <div className="relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{opacity: 0, x: 20}}
                                animate={{opacity: 1, x: 0}}
                                exit={{opacity: 0, x: -20}}
                                transition={{duration: 0.5}}
                                className="w-full h-[500px] px-4"
                            >
                                {renderODSCard(odsData[currentIndex])}
                            </motion.div>
                        </AnimatePresence>

                        {/* Carousel Controls */}
                        <div className="flex justify-center items-center mt-8 gap-4">
                            <button
                                onClick={handlePrev}
                                className="p-2 rounded-full bg-blue-50 text-primary hover:bg-blue-100 transition-colors"
                                aria-label="Página anterior"
                            >
                                <ChevronLeftIcon size={24} aria-hidden={true}/>
                            </button>

                            <div className="flex gap-2">
                                {odsData.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => {
                                            setCurrentIndex(index);
                                            resetTimer();
                                        }}
                                        className={`w-3 h-3 rounded-full ${
                                            currentIndex === index ? "bg-primary" : "bg-muted"
                                        }`}
                                        aria-label={`Ir para página ${index + 1}`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={handleNext}
                                className="p-2 rounded-full bg-blue-50 text-primary hover:bg-blue-100 transition-colors"
                                aria-label="Próxima página"
                            >
                                <ChevronRightIcon size={24} aria-hidden={true}/>
                            </button>
                        </div>
                    </div>
                ) : (
                    // Desktop: Grid view
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {odsData.map((ods) => renderODSCard(ods))}
                    </div>
                )}
            </div>
        </section>
    );
}
