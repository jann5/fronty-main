'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

const COLLECTIONS = [
    {
        title: 'Fronty Wisła',
        description: 'Dąb Naturalny. Czysta forma.',
        image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800', // Clean Oak
        link: '/konfigurator?model=wisla',
        price: 'od 450 PLN'
    },
    {
        title: 'Fronty Karpaty',
        description: 'Zintegrowany uchwyt. Minimalizm.',
        image: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&q=80&w=800', // Detail/Handle vibe
        link: '/konfigurator?model=karpaty',
        price: 'od 510 PLN'
    },
    {
        title: 'Fronty Sudety',
        description: 'Głębokie frezowanie. Charakter.',
        image: 'https://images.unsplash.com/photo-1513264669-8fd9c2184d08?auto=format&fit=crop&q=80&w=800', // Deep texture/Waves
        link: '/konfigurator?model=sudety',
        price: 'od 620 PLN'
    }
];

export function TrustedCollection() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container-premium">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <span className="text-subtitle tracking-widest text-gray-dark block mb-2">FEATURED PRODUCTS</span>
                        <h2 className="text-3xl font-light">Bestsellery Nawrot Studio</h2>
                    </div>
                    <Link href="/konfigurator" className="hidden md:block">
                        <Button variant="secondary" size="sm">ZOBACZ WSZYSTKIE</Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {COLLECTIONS.map((item, idx) => (
                        <motion.div
                            key={item.title}
                            className="group cursor-pointer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <Link href={item.link} className="block">
                                <div className="relative aspect-[4/3] overflow-hidden bg-white mb-6 rounded-sm shadow-sm group-hover:shadow-md transition-shadow duration-300">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    {/* Quick Add Overlay */}
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="bg-white text-black px-6 py-3 text-xs tracking-widest uppercase font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            Konfiguruj
                                        </span>
                                    </div>
                                </div>
                                <h3 className="text-lg font-medium mb-1 group-hover:text-gray-600 transition-colors">{item.title}</h3>
                                <p className="text-sm text-gray-dark mb-2">{item.description}</p>
                                <span className="text-sm font-semibold">{item.price}</span>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link href="/konfigurator">
                        <Button variant="secondary" fullWidth>ZOBACZ WSZYSTKIE</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
