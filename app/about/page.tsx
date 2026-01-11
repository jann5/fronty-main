import React from 'react';
import { Header } from '@/components/Header';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-primary-white">
            <Header />
            <div className="pt-12 pb-32 container-premium">
                <div className="grid md:grid-cols-12 gap-12 lg:gap-24">
                    {/* Left Column - Text */}
                    <div className="md:col-span-7 space-y-10">
                        <div>
                            <span className="text-sm tracking-[0.2em] text-[#C4A484] uppercase mb-4 block">Dziedzictwo</span>
                            <h1 className="text-5xl font-light mb-8 font-serif leading-tight">O Pracowni <br />Nawrot</h1>
                            <div className="w-16 h-[2px] bg-primary-black mb-8"></div>
                        </div>

                        <div className="prose prose-lg text-gray-dark font-light leading-relaxed">
                            <p>
                                <strong className="font-serif text-primary-black text-xl">Nawrot Studio</strong> to miejsce, gdzie tradycyjne rzemiosło spotyka się z nowoczesnym designem.
                                Wierzymy, że meble to nie tylko przedmioty – to tło dla Twojego życia, które powinno dojrzewać razem z Tobą.
                            </p>
                            <p>
                                Nasza historia zaczęła się od miłości do drewna i naturalnych materiałów.
                                Każdy front, który opuszcza naszą pracownię, jest ręcznie dopieszczany przez
                                mistrzów stolarstwa, łącząc precyzję technologii CNC z duszą rękodzieła.
                                Nie uznajemy kompromisów w kwestii jakości.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-8 border-t border-gray-200 pt-8 mt-8">
                            <div>
                                <span className="block text-4xl font-serif mb-1">10+</span>
                                <span className="text-xs text-gray-500 uppercase tracking-widest">Lat Doświadczenia</span>
                            </div>
                            <div>
                                <span className="block text-4xl font-serif mb-1">500+</span>
                                <span className="text-xs text-gray-500 uppercase tracking-widest">Zrealizowanych Projektów</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Images */}
                    <div className="md:col-span-5 relative">
                        <div className="sticky top-32 space-y-8">
                            <div className="aspect-[4/5] bg-[#F5F5F0] relative overflow-hidden rounded-sm shadow-xl">
                                <img
                                    src="https://images.unsplash.com/photo-1601058268499-e52642d15d3d?auto=format&fit=crop&q=80&w=1000"
                                    alt="Pracownia stolarska"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#C4A484]/10 -z-10 rounded-full blur-2xl"></div>
                            </div>
                            <div className="bg-[#FAF9F6] p-8 border-l-2 border-[#C4A484]">
                                <p className="italic text-gray-600 font-serif">
                                    "Drewno ma pamięć. My tylko pomagamy mu opowiedzieć jego historię na nowo, w Twoim domu."
                                </p>
                                <p className="text-sm font-bold mt-4 text-[#C4A484] uppercase tracking-widest">— Jan Nawrot, Założyciel</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
