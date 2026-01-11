'use client';

import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useCartStore } from '@/lib/store/cartStore';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

export function SlideOverCart() {
    // Specific selectors to avoid re-render loops and ensure latest state
    const isOpen = useCartStore(state => state.isOpen);
    const closeCart = useCartStore(state => state.closeCart);
    const items = useCartStore(state => state.items);
    const removeItem = useCartStore(state => state.removeItem);
    const total = useCartStore(state => state.total);
    const updateQuantity = useCartStore(state => state.updateQuantity);
    const hasHydrated = useCartStore(state => state._hasHydrated);

    // If not hydrated yet, don't show the "empty" message to avoid flash
    const showEmptyState = hasHydrated && items.length === 0;
    const showItems = hasHydrated && items.length > 0;

    return (
        <Transition.Root show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-[9999]" onClose={closeCart}>
                {/* Backdrop */}
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                            <div className="flex items-start justify-between">
                                                <Dialog.Title className="text-lg font-medium text-gray-900">
                                                    Twój Koszyk
                                                </Dialog.Title>
                                                <div className="ml-3 flex h-7 items-center">
                                                    <button
                                                        type="button"
                                                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                                                        onClick={closeCart}
                                                    >
                                                        <span className="sr-only">Zamknij panel</span>
                                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="mt-8">
                                                <div className="flow-root">
                                                    {!hasHydrated ? (
                                                        <div className="flex justify-center py-10">
                                                            <div className="animate-pulse flex space-x-4">
                                                                <div className="flex-1 space-y-4 py-1">
                                                                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                                                                    <div className="space-y-2">
                                                                        <div className="h-4 bg-gray-200 rounded"></div>
                                                                        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ) : items.length === 0 ? (
                                                        <p className="text-center text-gray-500 py-10">Twój koszyk jest pusty.</p>
                                                    ) : (
                                                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                            {items.map((item) => (
                                                                <li key={item.id} className="flex py-6">
                                                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 bg-gray-50 relative">
                                                                        <Image
                                                                            src={item.image || '/images/hero-fallback.jpg'} // Fallback
                                                                            alt={item.modelName}
                                                                            fill
                                                                            className="object-cover object-center"
                                                                        />
                                                                    </div>

                                                                    <div className="ml-4 flex flex-1 flex-col">
                                                                        <div>
                                                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                                                <h3>{item.modelName}</h3>
                                                                                <p className="ml-4">{item.price * item.quantity} PLN</p>
                                                                            </div>
                                                                            <p className="mt-1 text-sm text-gray-500">{item.woodName}</p>
                                                                            <p className="text-xs text-gray-400 mt-0.5 font-mono">{item.dimensions.width}x{item.dimensions.height}mm</p>
                                                                        </div>
                                                                        <div className="flex flex-1 items-end justify-between text-sm">
                                                                            <div className="flex items-center gap-2">
                                                                                <button onClick={() => updateQuantity(item.id, -1)} className="px-2 border border-gray-300 rounded hover:bg-gray-50 text-gray-600">-</button>
                                                                                <p className="text-gray-500 font-medium">Ilość {item.quantity}</p>
                                                                                <button onClick={() => updateQuantity(item.id, 1)} className="px-2 border border-gray-300 rounded hover:bg-gray-50 text-gray-600">+</button>
                                                                            </div>

                                                                            <button
                                                                                type="button"
                                                                                onClick={() => removeItem(item.id)}
                                                                                className="font-medium text-red-600 hover:text-red-500"
                                                                                style={{ textDecoration: 'underline', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em' }}
                                                                            >
                                                                                Usuń
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                <p>Suma</p>
                                                <p>{total} PLN</p>
                                            </div>
                                            <p className="mt-0.5 text-sm text-gray-500">
                                                Podatki i koszty dostawy obliczane przy finalizacji.
                                            </p>
                                            <div className="mt-6">
                                                <Button
                                                    fullWidth
                                                    variant="primary"
                                                    disabled={items.length === 0}
                                                    onClick={() => {
                                                        closeCart();
                                                        window.location.href = '/checkout'; // Force nav to be sure, or use router
                                                    }}
                                                >
                                                    Przejdź do płatności
                                                </Button>
                                            </div>
                                            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                                <p>
                                                    lub{' '}
                                                    <button
                                                        type="button"
                                                        className="font-medium text-black hover:text-gray-800"
                                                        onClick={closeCart}
                                                    >
                                                        Kontynuuj zakupy
                                                        <span aria-hidden="true"> &rarr;</span>
                                                    </button>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}
