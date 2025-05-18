"use client";

import React, {useCallback, useEffect, useRef, useState} from 'react';
import {AnimatePresence, motion, PanInfo} from 'framer-motion';
import {ChevronLeft, ChevronRight} from 'lucide-react';

interface CarouselProps {
    children: React.ReactNode[];
    className?: string;
    showArrows?: boolean;
    showDots?: boolean;
    autoPlay?: boolean;
    interval?: number;
}

export function Carousel({
                             children,
                             className = '',
                             showArrows = true,
                             showDots = true,
                             autoPlay = false,
                             interval = 5000,
                         }: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            x: direction < 0 ? '100%' : '-100%',
            opacity: 0,
        }),
    };

    const handleDragEnd = (
        _: MouseEvent | TouchEvent | PointerEvent,
        info: PanInfo
    ) => {
        if (info.offset.x > 100) {
            handlePrev();
        } else if (info.offset.x < -100) {
            handleNext();
        }
    };

    const handleNext = useCallback(() => {
        setDirection(1);
        setCurrentIndex((prevIndex) =>
            prevIndex === React.Children.count(children) - 1 ? 0 : prevIndex + 1
        );
    }, [children]);

    const handlePrev = useCallback(() => {
        setDirection(-1);
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? React.Children.count(children) - 1 : prevIndex - 1
        );
    }, [children]);

    const goToSlide = (index: number) => {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    };

    useEffect(() => {
        if (autoPlay) {
            timeoutRef.current = setTimeout(() => {
                handleNext();
            }, interval);
        }

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [currentIndex, autoPlay, interval, handleNext]);

    return (
        <div className={`relative overflow-hidden ${className}`}>
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: {type: 'spring', stiffness: 300, damping: 30},
                        opacity: {duration: 0.2},
                    }}
                    drag="x"
                    dragConstraints={{left: 0, right: 0}}
                    dragElastic={0.1}
                    onDragEnd={handleDragEnd}
                    className="w-full h-full"
                >
                    {children[currentIndex]}
                </motion.div>
            </AnimatePresence>

            {showArrows && (
                <>
                    <button
                        onClick={handlePrev}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md z-10"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="h-6 w-6 text-[#1d4ed8]"/>
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md z-10"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="h-6 w-6 text-[#1d4ed8]"/>
                    </button>
                </>
            )}

            {showDots && (
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                    {React.Children.map(children, (_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full ${
                                currentIndex === index ? 'bg-[#1d4ed8]' : 'bg-gray-300'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
