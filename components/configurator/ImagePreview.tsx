'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useConfiguratorStore } from '@/lib/store/configuratorStore';
import { MODELS } from '@/data/models';
import Image from 'next/image';

export function ImagePreview() {
    const { selectedModel, selectedWood } = useConfiguratorStore();
    const modelData = MODELS.find(m => m.id === selectedModel);

    // Determines the image to show. 
    // Ideally, we would have specific images for Model + Wood combinations.
    // For MVP, we use the model's main image.
    // In a real app, you'd map (modelId, woodId) -> specific image path.
    // Use images array if available, otherwise just main image
    const images = modelData?.images || (modelData?.image ? [modelData.image] : ['/images/placeholder.jpg']);
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const activeImage = images[currentIndex];

    // Reset index when model changes
    React.useEffect(() => {
        setCurrentIndex(0);
    }, [selectedModel]);

    return (
        <div className="w-full h-full bg-gray-50 flex flex-col items-center justify-center p-8 lg:p-12 relative overflow-hidden">

            {/* Main Image with AnimatePresence */}
            <div className="relative w-full flex-grow max-w-5xl h-[65vh] shadow-2xl rounded-sm overflow-hidden bg-white mb-6">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`${selectedModel}-${selectedWood}-${currentIndex}`}
                        className="absolute inset-0 w-full h-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <Image
                            src={activeImage}
                            alt={`${modelData?.name} - view ${currentIndex + 1}`}
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Overlay Text (Optional, purely aesthetic) */}
                        <div className="absolute bottom-6 left-6 z-10 pointer-events-none">
                            <h3 className="text-white text-lg font-light tracking-widest uppercase drop-shadow-md">
                                {modelData?.name}
                            </h3>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Thumbnail Navigation */}
            {images.length > 1 && (
                <div className="h-20 flex gap-4 overflow-x-auto pb-2 px-4 snap-x">
                    {images.map((img, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`relative h-full aspect-square flex-shrink-0 rounded-sm overflow-hidden border-2 transition-all ${currentIndex === idx ? 'border-primary-black scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                                }`}
                        >
                            <Image
                                src={img}
                                alt={`Thumbnail ${idx}`}
                                fill
                                className="object-cover"
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
