'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function IntroSection() {
    return (
        <section className="py-16 md:py-24 lg:py-32 bg-primary-white">
            <div className="container-premium px-4 md:px-0">
                <div className="grid md:grid-cols-2 gap-8 md:gap-16 lg:gap-24 items-center">

                    {/* Left: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6 md:space-y-8 order-2 md:order-1"
                    >
                        <span className="text-subtitle block text-xs md:text-sm">FILOZOFIA MARKI</span>

                        <h2 className="text-2xl md:text-3xl lg:text-5xl font-serif text-primary-black leading-tight">
                            Design inspirowany<br />
                            <span className="italic text-gray-dark">naturą materiału.</span>
                        </h2>

                        <div className="space-y-4 md:space-y-6 text-body-elegant text-gray-dark text-sm md:text-base">
                            <p>
                                W Nawrot Studio wierzymy, że każdy kawałek drewna opowiada własną historię.
                                Naszym zadaniem nie jest narzucanie formy, lecz jej wydobywanie.
                            </p>
                            <p>
                                Stosujemy tradycyjne techniki stolarskie w połączeniu z nowoczesnym projektowaniem,
                                aby tworzyć fronty, które są nie tylko elementem mebla, ale sercem domowej przestrzeni.
                                Każdy sęk, każdy słój jest dla nas inspiracją, a nie wadą.
                            </p>
                        </div>

                        <div className="pt-2 md:pt-4">
                            <span className="inline-block border-b border-primary-black pb-1 text-xs tracking-widest uppercase cursor-pointer hover:opacity-60 transition-opacity">
                                Poznaj naszą historię
                            </span>
                        </div>
                    </motion.div>

                    {/* Right: Image Composition */}
                    <motion.div
                        className="relative order-1 md:order-2 h-[300px] md:h-[400px] lg:h-[500px] w-full"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {/* Main Image */}
                        <div className="absolute inset-0 md:inset-x-8 md:inset-y-0 bg-gray-100 overflow-hidden">
                            {/* Placeholder for Workshop Image */}
                            <Image
                                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" // Cinematic workshop (CNC precision)
                                alt="Precyzyjna praca CNC w warsztacie"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-1000"
                            />
                        </div>

                        {/* Decorative Element */}
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gray-light -z-10 hidden md:block" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
