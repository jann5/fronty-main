'use client';

import React from 'react';
import { useCartStore } from '@/lib/store/cartStore';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Header } from '@/components/Header';
import Image from 'next/image';

export default function CheckoutPage() {
    const { items, total, clearCart, _hasHydrated } = useCartStore();
    const router = useRouter();
    const [isProcessing, setIsProcessing] = React.useState(false);

    const handlePayment = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsProcessing(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        clearCart();
        router.push('/checkout/success');
    };

    // Initial hydration check - ensures we don't flash "Empty Cart" message
    if (!_hasHydrated) {
        return (
            <div className="min-h-screen bg-primary-white">
                <Header />
                <div className="pt-32 container-premium text-center">
                    <div className="animate-pulse space-y-4 max-w-md mx-auto">
                        <div className="h-8 bg-gray-100 rounded w-1/2 mx-auto"></div>
                        <div className="h-4 bg-gray-100 rounded w-3/4 mx-auto"></div>
                    </div>
                </div>
            </div>
        );
    }

    if (items.length === 0) {
        return (
            <div className="min-h-screen bg-primary-white">
                <Header />
                <div className="pt-32 container-premium text-center">
                    <h1 className="text-3xl font-light mb-4">Twój koszyk jest pusty</h1>
                    <Button variant="primary" onClick={() => router.push('/')}>
                        Wróć do sklepu
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            <div className="pt-32 pb-20 container-premium">
                <h1 className="text-3xl font-light mb-12 tracking-wide">Finalizacja Zamówienia</h1>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left Column: Form */}
                    <div className="bg-white p-8 rounded-sm shadow-sm h-fit">
                        <h2 className="text-xl font-medium mb-6">Dane Dostawy</h2>
                        <form onSubmit={handlePayment} className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm text-gray-dark mb-1">Imię</label>
                                    <input required type="text" className="w-full border border-gray-medium p-3 rounded-sm focus:border-primary-black outline-none" />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-dark mb-1">Nazwisko</label>
                                    <input required type="text" className="w-full border border-gray-medium p-3 rounded-sm focus:border-primary-black outline-none" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm text-gray-dark mb-1">Email</label>
                                <input required type="email" className="w-full border border-gray-medium p-3 rounded-sm focus:border-primary-black outline-none" />
                            </div>

                            <div>
                                <label className="block text-sm text-gray-dark mb-1">Adres</label>
                                <input required type="text" className="w-full border border-gray-medium p-3 rounded-sm focus:border-primary-black outline-none" />
                            </div>

                            <div className="grid grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-sm text-gray-dark mb-1">Kod pocztowy</label>
                                    <input required type="text" className="w-full border border-gray-medium p-3 rounded-sm focus:border-primary-black outline-none" />
                                </div>
                                <div className="col-span-2">
                                    <label className="block text-sm text-gray-dark mb-1">Miasto</label>
                                    <input required type="text" className="w-full border border-gray-medium p-3 rounded-sm focus:border-primary-black outline-none" />
                                </div>
                            </div>

                            <div className="pt-6 border-t border-gray-medium">
                                <h2 className="text-xl font-medium mb-6">Płatność (Symulacja)</h2>
                                <div className="space-y-3">
                                    <label className="flex items-center gap-3 p-4 border rounded-sm cursor-pointer hover:border-gray-dark">
                                        <input type="radio" name="payment" defaultChecked className="accent-primary-black" />
                                        <span>Karta płatnicza (Mock)</span>
                                    </label>
                                    <label className="flex items-center gap-3 p-4 border rounded-sm cursor-pointer hover:border-gray-dark">
                                        <input type="radio" name="payment" className="accent-primary-black" />
                                        <span>BLIK (Mock)</span>
                                    </label>
                                </div>
                            </div>

                            <Button
                                variant="primary"
                                fullWidth
                                type="submit"
                                disabled={isProcessing}
                            >
                                {isProcessing ? 'Przetwarzanie...' : `Zamawiam i płacę ${total} PLN`}
                            </Button>
                        </form>
                    </div>

                    {/* Right Column: Order Summary */}
                    <div className="bg-white p-8 rounded-sm shadow-sm h-fit lg:sticky lg:top-32">
                        <h2 className="text-xl font-medium mb-6">Podsumowanie</h2>
                        <ul className="space-y-6 mb-8">
                            {items.map((item) => (
                                <li key={item.id} className="flex gap-4">
                                    <div className="relative w-20 h-20 bg-gray-100 rounded-sm overflow-hidden flex-shrink-0">
                                        <Image src={item.image} alt={item.modelName} fill className="object-cover" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between font-medium">
                                            <h3>{item.modelName}</h3>
                                            <span>{item.price * item.quantity} PLN</span>
                                        </div>
                                        <p className="text-sm text-gray-500">{item.woodName}</p>
                                        <p className="text-xs text-gray-400 mt-1">Ilość: {item.quantity}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="border-t border-gray-medium pt-6 space-y-2 text-sm">
                            <div className="flex justify-between text-gray-dark">
                                <span>Wartość koszyka</span>
                                <span>{total} PLN</span>
                            </div>
                            <div className="flex justify-between text-gray-dark">
                                <span>Dostawa</span>
                                <span>0 PLN (Promocja)</span>
                            </div>
                            <div className="flex justify-between font-medium text-lg pt-4 border-t border-gray-medium mt-4">
                                <span>Do zapłaty</span>
                                <span>{total} PLN</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
