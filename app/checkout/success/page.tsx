'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Header } from '@/components/Header';

export default function CheckoutSuccessPage() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-primary-white">
            <Header />

            <div className="pt-40 container-premium flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-8 text-green-600">
                    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>

                <h1 className="text-4xl font-light mb-6">Dziękujemy za zamówienie!</h1>
                <p className="text-gray-dark max-w-lg mb-12 leding-relaxed">
                    Twoje zamówienie zostało przyjęte do realizacji. Na podany adres email wysłaliśmy potwierdzenie wraz ze szczegółami.
                </p>

                <div className="flex gap-4">
                    <Button variant="secondary" onClick={() => router.push('/')}>
                        Wróć na stronę główną
                    </Button>
                    <Button variant="primary" onClick={() => router.push('/konfigurator')}>
                        Skonfiguruj kolejny produkt
                    </Button>
                </div>
            </div>
        </div>
    );
}
