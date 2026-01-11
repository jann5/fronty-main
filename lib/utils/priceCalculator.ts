import type { ConfiguratorState, PriceBreakdown } from '@/lib/types';
import { MODELS } from '@/data/models';
import { WOOD_MAP, HANDLE_MAP, PRICE_PER_M2 } from '@/data/constants';

// ============================================
// PRICE CALCULATION ENGINE
// ============================================

export function calculateTotalPrice(config: Partial<ConfiguratorState>): PriceBreakdown {
    // Base price from model
    const model = config.selectedModel
        ? MODELS.find(m => m.id === config.selectedModel)
        : null;
    const basePrice = model?.basePrice || 0;

    // Material multiplier
    const wood = config.selectedWood ? WOOD_MAP[config.selectedWood] : null;
    const materialMultiplier = wood?.multiplier || 1.0;
    const materialCost = basePrice * (materialMultiplier - 1);

    // Size-based cost (price per m²)
    const width = config.dimensions?.width || 0;
    const height = config.dimensions?.height || 0;
    const areaM2 = (width * height) / 1_000_000; // Convert mm² to m²
    const sizeCost = areaM2 * PRICE_PER_M2;

    // Handles cost
    const handle = config.selectedHandle ? HANDLE_MAP[config.selectedHandle] : null;
    const handlesCost = handle?.price || 0;

    // Total
    const total = Math.round(basePrice * materialMultiplier + sizeCost + handlesCost);

    return {
        basePrice,
        materialCost: Math.round(materialCost),
        sizeCost: Math.round(sizeCost),
        handlesCost,
        total
    };
}

// ============================================
// HELPERS
// ============================================

export function formatPrice(price: number): string {
    return new Intl.NumberFormat('pl-PL', {
        style: 'currency',
        currency: 'PLN',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(price);
}

export function calculateSquareMeters(width: number, height: number): number {
    return (width * height) / 1_000_000;
}
