'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useConfiguratorStore } from '@/lib/store/configuratorStore';
import { client } from '@/lib/sanity/client';
import { galleryImagesQuery } from '@/lib/sanity/queries';
import { urlFor } from '@/lib/sanity/image';
import { GalleryImage } from '@/lib/types';
import { Loader } from '@/components/ui/Loader';

// Fallback images (generic placeholders or reusing model images)
const FALLBACK_IMAGES: GalleryImage[] = [
    { _id: 'f1', imageUrl: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800', title: 'Realizacja Kuchnia Dębowa' },
    { _id: 'f2', imageUrl: 'https://images.unsplash.com/photo-1622372738977-1453a3eb1808?auto=format&fit=crop&q=80&w=800', title: 'Szafa Bieszczady' },
    { _id: 'f3', imageUrl: 'https://images.unsplash.com/photo-1549488344-c3059f414d72?auto=format&fit=crop&q=80&w=800', title: 'Detale Tatry' },
    { _id: 'f4', imageUrl: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&q=80&w=800', title: 'Uchwyt Karpaty' },
];

export function DynamicGallery() {
    const { selectedModel, selectedWood } = useConfiguratorStore();
    const [images, setImages] = useState<GalleryImage[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [useFallback, setUseFallback] = useState(false);

    useEffect(() => {
        let isMounted = true;

        async function fetchImages() {
            setIsLoading(true);
            try {
                // Try fetching from Sanity
                const data = await client.fetch(galleryImagesQuery, {
                    model: selectedModel,
                    wood: selectedWood
                });

                if (isMounted) {
                    if (data && data.length > 0) {
                        setImages(data);
                        setUseFallback(false);
                    } else {
                        // Empty result -> Fallback
                        console.log('Sanity: No images found, using fallback.');
                        setUseFallback(true);
                    }
                }
            } catch (error) {
                console.warn('Sanity fetch failed (likely no config), using fallback.', error);
                if (isMounted) setUseFallback(true);
            } finally {
                if (isMounted) setIsLoading(false);
            }
        }

        fetchImages();

        return () => { isMounted = false; };
    }, [selectedModel, selectedWood]);

    const displayImages = useFallback ? FALLBACK_IMAGES : images;

    return (
        <div className="p-6 h-full flex flex-col bg-white border-l border-gray-100">
            <div className="mb-6 flex items-center justify-between">
                <h2 className="text-sm font-medium uppercase tracking-widest text-primary-black">
                    Inspiracje {selectedModel && `— ${selectedModel}`}
                </h2>
                {isLoading && <div className="scale-50"><Loader /></div>}
            </div>

            <div className="flex-1 overflow-y-auto pr-2 -mr-2 scrollbar-thin">
                <div className="grid grid-cols-1 gap-6">
                    {displayImages.map((img) => (
                        <div
                            key={img._id}
                            className="relative w-full aspect-[4/5] bg-gray-50 overflow-hidden group rounded-sm"
                        >
                            <Image
                                src={img.imageUrl} // If from sanity, this might need urlFor(img.imageUrl) if it's a raw source object, but query returns url
                                alt={img.title || 'Realizacja'}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 25vw"
                            />

                            {/* Overlay Info */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-end p-4">
                                <span className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                    {img.title}
                                </span>
                            </div>
                        </div>
                    ))}

                    {!isLoading && displayImages.length === 0 && (
                        <div className="p-8 text-center text-gray-dark text-sm">
                            Brak realizacji dla wybranych parametrów.
                        </div>
                    )}
                </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100">
                <p className="text-[10px] text-gray-dark text-center uppercase tracking-wider">
                    Galeria aktualizowana na bieżąco
                </p>
            </div>
        </div>
    );
}
