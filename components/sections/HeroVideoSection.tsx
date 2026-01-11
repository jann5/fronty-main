'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export function HeroVideoSection() {
    return (
        <section className="relative w-full h-[70vh] md:h-[90vh] flex items-center justify-center overflow-hidden bg-primary-black text-primary-white">
            {/* Video Background with stronger overlay for elegance */}
            <div className="absolute inset-0 w-full h-full">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                >
                    <source src="/videos/hero-craft.mp4" type="video/mp4" />
                </video>
                {/* Fallback Image - Carpenter/Woodwork */}
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center opacity-60"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=2000')" }}
                />
                {/* Gradient Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
            </div>

            {/* Editorial Content Layout */}
            <div className="relative z-10 container-premium flex flex-col items-center text-center space-y-6 md:space-y-8 px-4 md:mt-20">

                {/* Subtitle / Eyebrow */}
                <motion.span
                    className="text-subtitle tracking-[0.3em] text-white/80"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    NAWROT STUDIO
                </motion.span>

                {/* Main Title - Serif & Elegant */}
                <motion.h1
                    className="text-2xl md:text-display-lg font-serif italic md:not-italic leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Naturalne drewno.<br />
                    <span className="not-italic font-light">Rzemieślnicza precyzja.</span>
                </motion.h1>

                {/* Description */}
                <motion.p
                    className="text-sm md:text-lg lg:text-xl font-light text-white/90 leading-relaxed px-2"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    Fronty kuchenne i meblowe tworzone ręcznie z selekcjonowanego dębu i jesionu.
                    Nadajemy Twoim wnętrzom unikalny charakter.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    className="flex flex-col md:flex-row gap-4 md:gap-6 mt-6 md:mt-8 w-full md:w-auto px-2 md:px-0"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <Link href="/konfigurator" className="w-full md:w-auto">
                        <Button variant="white" size="lg" className="w-full md:w-auto md:min-w-[200px]">
                            Konfigurator
                        </Button>
                    </Link>
                    <Link href="/shop" className="w-full md:w-auto">
                        <Button
                            variant="ghost"
                            size="lg"
                            className="border border-white text-white hover:bg-white hover:text-black w-full md:w-auto md:min-w-[200px] transition-colors duration-300"
                        >
                            Zobacz Modele
                        </Button>
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Indicator Removed per user feedback */}
        </section>
    );
}
