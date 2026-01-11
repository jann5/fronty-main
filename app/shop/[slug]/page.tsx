'use client';

import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { SHOP_PRODUCTS, WOOD_VARIANTS, ShopProduct, ProductVariant, ShopWoodType } from '@/data/products';
import { notFound, useParams, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { useCartStore } from '@/lib/store/cartStore';

// Helper to find product by slug
const getProductBySlug = (slug: string) => {
    return SHOP_PRODUCTS.find(p => p.slug === slug);
};

export default function ProductPage() {
    const params = useParams();
    const searchParams = useSearchParams();
    const slug = params?.slug as string;
    const collectionParam = searchParams.get('collection');
    const product = getProductBySlug(slug);

    // State
    const [selectedVariantId, setSelectedVariantId] = useState<string | null>(null);

    // Initial variant selection (default to the first one)
    useEffect(() => {
        if (product && product.variants.length > 0) {
            setSelectedVariantId(product.variants[0].id);
        }
    }, [product]);

    // Cart Store
    const addToCart = useCartStore((state) => state.addItem);
    const openCart = useCartStore((state) => state.openCart);

    if (!product) {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>; // Or trigger notFound()
    }

    const activeVariant = product.variants.find((v: ProductVariant) => v.id === selectedVariantId) || product.variants[0];
    const woodInfo = WOOD_VARIANTS[activeVariant.woodType as ShopWoodType];

    const handleAddToCart = () => {
        addToCart({
            sku: `${product.id}-${activeVariant.woodType}`,
            modelId: product.id,
            modelName: product.name,
            woodId: activeVariant.woodType,
            woodName: activeVariant.name,
            handleId: 'none',
            handleName: 'Brak',
            quantity: 1,
            price: activeVariant.price,
            dimensions: { width: 0, height: 0 },
            image: activeVariant.image
        });
        openCart();
    };

    return (
        <div className="min-h-screen bg-primary-white">
            <Header />

            <div className="pt-32 pb-32 container-premium">
                {/* Back Link */}
                <Link
                    href={collectionParam ? `/shop?collection=${collectionParam}` : '/shop'}
                    className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-gray-500 hover:text-black transition-colors mb-12 group"
                >
                    <span className="text-lg group-hover:-translate-x-1 transition-transform">←</span>
                    Wróć do {collectionParam ? `kolekcji ${collectionParam}` : 'sklepu'}
                </Link>

                <div className="grid lg:grid-cols-12 gap-16 items-start">

                    {/* Left: Images */}
                    <div className="lg:col-span-8 space-y-4 sticky top-32">
                        <div className="relative aspect-[4/3] bg-gray-50 rounded-sm overflow-hidden border border-gray-100">
                            <Image
                                src={activeVariant.image}
                                alt={`${product.name} - ${activeVariant.name}`}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        {/* Thumbnails (optional expansion) */}
                        <div className="grid grid-cols-4 gap-4">
                            {product.images.map((img: string, idx: number) => (
                                <div key={idx} className="relative aspect-square bg-gray-50 rounded-sm overflow-hidden opacity-70 hover:opacity-100 cursor-pointer transition-opacity">
                                    <Image src={img} alt="Detail" fill className="object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Details & Config */}
                    <div className="lg:col-span-4 space-y-10">

                        {/* Header */}
                        <div className="border-b border-gray-200 pb-8">
                            <h1 className="text-4xl font-serif text-primary-black mb-2">{product.name}</h1>
                            <div className="flex items-baseline gap-4">
                                <span className="text-2xl font-light">{activeVariant.price} PLN</span>
                                <span className="text-sm text-gray-500 uppercase tracking-wider">{activeVariant.name}</span>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="prose prose-sm text-gray-600 font-light leading-relaxed">
                            <p>{product.description}</p>
                        </div>

                        {/* Wood Selector */}
                        <div className="space-y-4">
                            <label className="text-xs uppercase tracking-[0.2em] text-gray-900 font-semibold block">Wybierz Drewno</label>
                            <div className="flex gap-4">
                                {product.variants.map((variant: ProductVariant) => {
                                    const variantInfo = WOOD_VARIANTS[variant.woodType as ShopWoodType];
                                    const isSelected = selectedVariantId === variant.id;

                                    return (
                                        <button
                                            key={variant.id}
                                            onClick={() => setSelectedVariantId(variant.id)}
                                            className={`group relative w-16 h-16 rounded-full border-2 transition-all duration-300 ${isSelected ? 'border-primary-black scale-110' : 'border-transparent hover:scale-105'}`}
                                            title={variant.name}
                                        >
                                            <div
                                                className="w-full h-full rounded-full overflow-hidden border border-white shadow-sm"
                                                style={{ backgroundColor: variantInfo.color }}
                                            >
                                                {/* Optional: Real texture image if available */}
                                                <Image src={variantInfo.image} alt={variantInfo.name} width={64} height={64} className="w-full h-full object-cover" />
                                            </div>

                                            {/* Tooltip */}
                                            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white px-2 py-1 rounded-sm pointer-events-none">
                                                {variant.name}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Features List */}
                        <div className="py-6 border-y border-gray-100">
                            <ul className="space-y-2">
                                {product.features.map((feature: string, i: number) => (
                                    <li key={i} className="flex items-center text-sm text-gray-600">
                                        <span className="w-1.5 h-1.5 bg-[#C4A484] rounded-full mr-3" />
                                        {feature}
                                    </li>
                                ))}
                                <li className="flex items-center text-sm text-gray-600">
                                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-3" />
                                    Wymiary: {product.dimensions}
                                </li>
                            </ul>
                        </div>

                        {/* Actions */}
                        <div className="space-y-4 pt-4">
                            <Button
                                variant="primary"
                                size="lg"
                                className="w-full h-14 text-base"
                                onClick={handleAddToCart}
                            >
                                DODAJ DO KOSZYKA — {activeVariant.price} PLN
                            </Button>
                            <p className="text-xs text-center text-gray-400">
                                Wysyłka w ciągu 24h. Darmowy zwrot do 30 dni.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
