import React from 'react';
import { Header } from '@/components/Header';

export default function RealizacjePage() {
    return (
        <div className="min-h-screen bg-primary-white">
            <Header />
            <div className="pt-12 pb-32 container-premium">
                <div className="relative mb-20 text-center">
                    <span className="text-sm tracking-[0.2em] text-[#C4A484] uppercase mb-4 block">Portfolio</span>
                    <h1 className="text-5xl font-light mb-8 font-serif leading-tight">Tworzymy Przestrzeń <br />z Charakterem</h1>
                    <p className="text-gray-dark text-lg max-w-2xl mx-auto font-light">
                        Zobacz, jak nasze fronty odmieniają wnętrza. Od minimalistycznych kuchni po eleganckie garderoby.
                        Każdy projekt to inna historia o drewnie.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                    {[
                        { src: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=1200", title: "Jesion Bielony", desc: "Detale frezowania" },
                        { src: "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?auto=format&fit=crop&q=80&w=1200", title: "Dąb Rustykalny", desc: "Głęboka struktura sęków" },
                        { src: "https://images.unsplash.com/photo-1620608520261-0738bd8337cb?auto=format&fit=crop&q=80&w=1200", title: "Orzech Amerykański", desc: "Precyzja słoja" },
                        { src: "https://images.unsplash.com/photo-1631679706909-1844bbd0d918?auto=format&fit=crop&q=80&w=1200", title: "Dąb Wędzony", desc: "Surowa elegancja" }
                    ].map((item, i) => (
                        <div key={i} className="group cursor-pointer">
                            <div className="relative overflow-hidden aspect-[16/10] mb-6 rounded-sm shadow-sm">
                                <img src={item.src} alt="Realizacja" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-primary-black/10 group-hover:bg-primary-black/20 transition-colors duration-500" />
                            </div>
                            <div className="flex justify-between items-end border-b border-gray-200 pb-4">
                                <div>
                                    <h3 className="text-2xl font-serif text-primary-black group-hover:opacity-70 transition-opacity">{item.title}</h3>
                                    <p className="text-[#C4A484] text-sm mt-1 uppercase tracking-wider">{item.desc}</p>
                                </div>
                                <span className="text-2xl font-light text-gray-300 group-hover:translate-x-2 transition-transform duration-300">→</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
