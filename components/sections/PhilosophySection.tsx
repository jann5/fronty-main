'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export function PhilosophySection() {
    return (
        <section className="py-24 bg-primary-white">
            <div className="container-premium">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Text Block */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        <motion.span
                            className="text-subtitle tracking-widest text-gray-dark"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            DESIGN INSPIRES
                        </motion.span>
                        <motion.h2
                            className="text-4xl md:text-5xl font-light leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Stwórz swoją wymarzoną przestrzeń, aby pracować najlepiej jak potrafisz.
                        </motion.h2>
                        <motion.p
                            className="text-lg text-gray-dark leading-relaxed font-light"
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
                                <Button variant="secondary">O NASZEJ PRACOWNI</Button>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Image Grid */}
                    <motion.div
                        className="w-full lg:w-1/2 grid grid-cols-2 gap-4"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="space-y-4 mt-8">
                            <div className="relative aspect-[3/4] w-full bg-gray-100 rounded-sm overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1572048572872-2394404859b6?auto=format&fit=crop&q=80&w=600" // Workshop tools/CNC
                                    alt="Workshop detail"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="relative aspect-square w-full bg-gray-100 rounded-sm overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1582239634898-e7631160a4f5?auto=format&fit=crop&q=80&w=600" // Wood texture macro
                                    alt="Wood texture"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="relative aspect-square w-full bg-gray-100 rounded-sm overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1549488344-c3059f414d72?auto=format&fit=crop&q=80&w=600" // Craftsman hands / Shaping
                                    alt="Craftsman hands"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="relative aspect-[3/4] w-full bg-gray-100 rounded-sm overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1620608520261-0738bd8337cb?auto=format&fit=crop&q=80&w=600" // Finished minimalist front
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
