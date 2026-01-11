import React from 'react';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-primary-white">
            <Header />
            <div className="relative pt-12 pb-32">
                <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
                    <Image
                        src="https://images.unsplash.com/photo-1572911466041-38971f4961f6?auto=format&fit=crop&q=80&w=2000"
                        alt="Background"
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="container-premium grid md:grid-cols-2 gap-16 lg:gap-24 items-start relative z-10">
                    <div className="space-y-10">
                        <div>
                            <span className="text-sm tracking-[0.2em] text-[#C4A484] uppercase mb-4 block">Porozmawiajmy</span>
                            <h1 className="text-5xl font-light mb-8 font-serif">Kontakt</h1>
                            <p className="text-gray-dark text-lg leading-relaxed">
                                Jesteśmy tu, aby pomóc Ci zrealizować Twój projekt.
                                Napisz do nas, zadzwoń lub odwiedź naszą pracownię.
                            </p>
                        </div>

                        <div className="space-y-8 py-8 border-t border-gray-100">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#FAF9F6] flex items-center justify-center text-[#C4A484]">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </div>
                                <div>
                                    <h3 className="uppercase tracking-wider text-xs font-bold mb-1">Email</h3>
                                    <p className="text-xl font-serif">kontakt@nawrot-studio.com</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#FAF9F6] flex items-center justify-center text-[#C4A484]">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                </div>
                                <div>
                                    <h3 className="uppercase tracking-wider text-xs font-bold mb-1">Telefon</h3>
                                    <p className="text-xl font-serif">+48 123 456 789</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#FAF9F6] flex items-center justify-center text-[#C4A484]">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </div>
                                <div>
                                    <h3 className="uppercase tracking-wider text-xs font-bold mb-1">Pracownia</h3>
                                    <p className="text-lg">ul. Rzemieślnicza 1, Warszawa</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#FAF9F6] p-10 rounded-sm shadow-sm md:sticky md:top-32">
                        <form className="space-y-6">
                            <h3 className="text-2xl font-serif mb-6">Formularz Kontaktowy</h3>
                            <div>
                                <label className="block text-xs uppercase tracking-wider mb-2 text-gray-500">Imię i Nazwisko</label>
                                <input type="text" className="w-full bg-white border border-gray-200 p-4 focus:ring-1 focus:ring-[#C4A484] focus:border-[#C4A484] outline-none transition-all" placeholder="Jan Kowalski" />
                            </div>
                            <div>
                                <label className="block text-xs uppercase tracking-wider mb-2 text-gray-500">Email</label>
                                <input type="email" className="w-full bg-white border border-gray-200 p-4 focus:ring-1 focus:ring-[#C4A484] focus:border-[#C4A484] outline-none transition-all" placeholder="jan@example.com" />
                            </div>
                            <div>
                                <label className="block text-xs uppercase tracking-wider mb-2 text-gray-500">Wiadomość</label>
                                <textarea rows={5} className="w-full bg-white border border-gray-200 p-4 focus:ring-1 focus:ring-[#C4A484] focus:border-[#C4A484] outline-none transition-all" placeholder="Opisz swój projekt..." />
                            </div>
                            <Button variant="primary" fullWidth className="bg-[#2A2A2A] hover:bg-[#C4A484] transition-colors duration-500">Wyślij Wiadomość</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
