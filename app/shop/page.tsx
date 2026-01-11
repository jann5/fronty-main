'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import Link from 'next/link';
import Image from 'next/image';
import { COLLECTIONS, SHOP_PRODUCTS } from '@/data/products';
import { Button } from '@/components/ui/Button';

export default function ShopPage() {
    const [activeCollection, setActiveCollection] = useState<string | null>(null);

    return (
        <div className="min-h-screen bg-primary-white">
            <Header />
            <div className="pt-32 pb-32 container-premium">
                {/* Header (Dynamic) */}
                <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
                    <span className="text-sm tracking-[0.2em] text-[#C4A484] uppercase mb-4 block">Nawrot Studio // Sklep</span>
                    <h1 className="text-5xl font-light mb-6 font-serif text-primary-black">
                        {activeCollection ? COLLECTIONS.find(c => c.id === activeCollection)?.title : 'Wybierz Kolekcję'}
                    </h1>
                    <p className="text-lg text-gray-dark font-light max-w-2xl mx-auto">
                        {activeCollection
                            ? COLLECTIONS.find(c => c.id === activeCollection)?.description
                            : 'Przedmioty niemożliwe do wykonania tradycyjnymi metodami. Precyzja CNC, wykończenie ręką mistrza.'}
                    </p>
                </div>

                {/* Collection Chooser (Initial State) */}
                {!activeCollection && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[60vh] mb-20 animate-fade-in">
                        {COLLECTIONS.map((c) => (
                            <div
                                key={c.id}
                                onClick={() => setActiveCollection(c.id)}
                                className="group relative h-full w-full cursor-pointer overflow-hidden bg-black rounded-sm collection-card"
                            >
                                <Image
                                    src={c.coverImage}
                                    alt={c.title}
                                    fill
                                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />

                                <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 p-8 text-center">
                                    <h2 className="text-4xl font-serif mb-4 tracking-wider">{c.title}</h2>
                                    <span className="border border-white/50 px-6 py-2 text-xs uppercase tracking-[0.2em] backdrop-blur-sm group-hover:bg-white group-hover:text-black transition-all">
                                        Eksploruj
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Active Collection View (Selected State) */}
                {activeCollection && (
                    <div className="animate-slide-up space-y-12">
                        <div className="flex justify-end mb-8">
                            <button
                                onClick={() => setActiveCollection(null)}
                                className="flex items-center gap-2 text-sm uppercase tracking-wider text-gray-500 hover:text-black transition-colors"
                            >
                                <span className="text-lg">←</span> Wróć do wyboru
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                            {SHOP_PRODUCTS.filter(p => p.collection === activeCollection).map((product) => (
                                <Link href={`/shop/${product.slug}`} key={product.id} className="group block">
                                    <div className="relative aspect-[4/3] bg-gray-50 overflow-hidden rounded-sm mb-6">
                                        <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur px-3 py-1 text-[10px] tracking-widest uppercase rounded-sm">
                                            CNC Milled
                                        </div>
                                        <Image
                                            src={product.images[0]}
                                            alt={product.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-serif text-primary-black group-hover:text-gray-600 transition-colors">
                                            {product.name}
                                        </h3>
                                        <p className="text-xs text-gray-400 uppercase tracking-wider">{product.collection}</p>
                                        <p className="text-base font-medium">{product.basePrice} PLN</p>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {SHOP_PRODUCTS.filter(p => p.collection === activeCollection).length === 0 && (
                            <div className="text-center py-20 text-gray-400">
                                <p>Produkty z tej kolekcji pojawią się wkrótce.</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
