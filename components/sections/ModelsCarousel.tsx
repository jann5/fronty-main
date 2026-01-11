'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MODELS } from '@/data/models';
import { Button } from '@/components/ui/Button';
import { ProductModel } from '@/lib/types';

function ModelCard({ model, index }: { model: ProductModel; index: number }) {
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true
    });

    return (
        <motion.div
            ref={ref}
            className="snap-center shrink-0 w-[85vw] md:w-[60vw] lg:w-[40vw] px-4 md:px-8 select-none" // Adjusted width for better flow
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            onDragStart={(e) => e.preventDefault()} // Prevent image dragging
        >
            <div className="flex flex-col gap-6 cursor-grab active:cursor-grabbing group">
                {/* Image */}
                <motion.div
                    className="relative aspect-[4/3] overflow-hidden bg-gray-light rounded-sm"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.4 }}
                >
                    <Image
                        src={model.image}
                        alt={model.name}
                        fill
                        className="object-cover pointer-events-none" // Disable native drag
                        draggable={false}
                        sizes="(max-width: 768px) 85vw, 40vw"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                </motion.div>

                {/* Info */}
                <div className="space-y-4 text-center">
                    <h3 className="text-3xl font-serif text-primary-black group-hover:text-gray-600 transition-colors">
                        {model.name}
                    </h3>
                    <div className="h-px w-12 bg-gray-medium mx-auto" />
                    <p className="text-gray-dark text-sm max-w-sm mx-auto line-clamp-2">
                        {model.description}
                    </p>
                    <div className="pt-2">
                        <Link href={`/konfigurator?model=${model.id}`} className="inline-block" draggable={false}>
                            <Button variant="underline" className="pointer-events-auto"> {/* Button needs robust clicks */}
                                Konfiguruj {model.name}
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export function ModelsCarousel() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setStartX(e.pageX - (scrollContainerRef.current?.offsetLeft || 0));
        setScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - (scrollContainerRef.current?.offsetLeft || 0);
        const walk = (x - startX) * 2; // Scroll-fast multiplier
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft = scrollLeft - walk;
        }
    };

    return (
        <section className="py-32 w-full overflow-hidden bg-white" id="shop">
            <div className="container-premium mb-20 text-center">
                <span className="text-subtitle block mb-4">KOLEKCJA 2026</span>
                <h2 className="text-display-md font-serif text-primary-black">Pięć esencji formy.</h2>
            </div>

            {/* Draggable Carousel Container */}
            <div
                ref={scrollContainerRef}
                className="relative w-full pl-4 md:pl-[max(2rem,calc((100vw-1400px)/2))] overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
                <div className="flex gap-4 md:gap-8 min-w-max pb-12 pr-12">
                    {MODELS.map((model, index) => (
                        <ModelCard key={model.id} model={model} index={index} />
                    ))}
                    {/* End Spacer */}
                    <div className="w-[10vw]" />
                </div>
            </div>

            {/* Scroll Hint */}
            <div className="text-center mt-4 text-xs text-gray-dark uppercase tracking-widest opacity-60">
                <span className="hidden md:inline">Przeciągnij, aby odkryć</span>
                <span className="md:hidden">Przesuń palcem</span>
            </div>

            <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </section>
    );
}
