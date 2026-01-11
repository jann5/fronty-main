'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function IntroSection() {
    return (
        <section className="py-24 md:py-32 bg-primary-white">
            <div className="container-premium">
                <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">

                    {/* Left: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8 order-2 md:order-1"
                    >
                        <span className="text-subtitle block">FILOZOFIA MARKI</span>

                        <h2 className="text-3xl md:text-5xl font-serif text-primary-black leading-tight">
                            Design inspirowany<br />
                            <span className="italic text-gray-dark">naturą materiału.</span>
                        </h2>

                        <div className="space-y-6 text-body-elegant text-gray-dark">
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

                        <div className="pt-4">
                            <span className="inline-block border-b border-primary-black pb-1 text-sm tracking-widest uppercase cursor-pointer hover:opacity-60 transition-opacity">
                                Poznaj naszą historię
                            </span>
                        </div>
                    </motion.div>

                    {/* Right: Image Composition */}
                    <motion.div
                        className="relative order-1 md:order-2 h-[500px] w-full"
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
