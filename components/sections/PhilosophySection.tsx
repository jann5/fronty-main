'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export function PhilosophySection() {
    return (
        <section className="py-16 md:py-24 lg:py-32 bg-primary-white px-4 md:px-0">
            <div className="container-premium">
                <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
                    {/* Text Block */}
                    <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
                        <motion.span
                            className="text-subtitle tracking-widest text-gray-dark text-xs md:text-sm"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            DESIGN INSPIRES
                        </motion.span>
                        <motion.h2
                            className="text-2xl md:text-4xl lg:text-5xl font-light leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Stwórz swoją wymarzoną przestrzeń, aby pracować najlepiej jak potrafisz.
                        </motion.h2>
                        <motion.p
                            className="text-sm md:text-lg text-gray-dark leading-relaxed font-light"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            Wierzymy, że otoczenie ma znaczenie.
                            Nasze fronty to inżynieria drewna. Korzystamy z zaawansowanych
                            frezarek CNC, które działają jak drukarki 3D, rzeźbiąc w materiale z niewyobrażalną precyzją.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <Link href="/about">
                                <Button variant="secondary" size="md">O NASZEJ PRACOWNI</Button>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Image Grid */}
                    <motion.div
                        className="w-full lg:w-1/2 grid grid-cols-2 gap-3 md:gap-4"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="space-y-3 md:space-y-4 mt-4 md:mt-8">
                            <div className="relative aspect-[3/4] w-full bg-gray-100 rounded-sm overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1572048572872-2394404859b6?auto=format&fit=crop&q=80&w=600"
                                    alt="Workshop detail"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="relative aspect-square w-full bg-gray-100 rounded-sm overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1582239634898-e7631160a4f5?auto=format&fit=crop&q=80&w=600"
                                    alt="Wood texture"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                        <div className="space-y-3 md:space-y-4">
                            <div className="relative aspect-square w-full bg-gray-100 rounded-sm overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1549488344-c3059f414d72?auto=format&fit=crop&q=80&w=600"
                                    alt="Craftsman hands"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="relative aspect-[3/4] w-full bg-gray-100 rounded-sm overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1620608520261-0738bd8337cb?auto=format&fit=crop&q=80&w=600"
                                    alt="Finished front"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
