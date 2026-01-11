import type { WoodInfo, HandleInfo, IkeaPreset } from '@/lib/types';

// ============================================
// WOOD TYPES & MATERIALS
// ============================================

export const WOODS: WoodInfo[] = [
    {
        id: 'dab_naturalny',
        name: 'Dąb naturalny',
        code: 'DABN',
        color: '#D4A574',
        textureUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=400',
        multiplier: 1.0
    },
    {
        id: 'dab_wedzony',
        name: 'Dąb wędzony',
        code: 'DABW',
        color: '#8B5A2B',
        textureUrl: 'https://images.unsplash.com/photo-1631679706909-1844bbd0d918?auto=format&fit=crop&q=80&w=400',
        multiplier: 1.15
    },
    {
        id: 'jesion_jasny',
        name: 'Jesion jasny (lakier mat)',
        code: 'JESJ',
        color: '#C4B5A0',
        textureUrl: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=400',
        multiplier: 1.1
    },
    {
        id: 'jesion_smolowany',
        name: 'Jesion smołowany',
        code: 'JESS',
        color: '#6B5D52',
        textureUrl: 'https://images.unsplash.com/photo-1616353071855-2c045c4458ae?auto=format&fit=crop&q=80&w=400',
        multiplier: 1.2
    }
];

export const WOOD_MAP = Object.fromEntries(
    WOODS.map(wood => [wood.id, wood])
);

// ============================================
// HANDLES & HARDWARE
// ============================================

export const HANDLES: HandleInfo[] = [
    {
        id: 'none',
        name: 'Bez uchwytów',
        code: 'NONE',
        price: 0
    },
    {
        id: 'cien',
        name: 'Uchwyt Cień',
        code: 'UCHC',
        price: 80,
        imageUrl: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=400'
    },
    {
        id: 'minimalist',
        name: 'Minimalistyczny',
        code: 'UCHM',
        price: 60,
        imageUrl: 'https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?auto=format&fit=crop&q=80&w=400'
    },
    {
        id: 'classic',
        name: 'Klasyczny',
        code: 'UCHK',
        price: 70,
        imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=400'
    },
    {
        id: 'integrated',
        name: 'Zintegrowany',
        code: 'UCHI',
        price: 120,
        imageUrl: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&q=80&w=400'
    }
];

export const HANDLE_MAP = Object.fromEntries(
    HANDLES.map(handle => [handle.id, handle])
);

// ============================================
// IKEA PRESETS
// ============================================

export const IKEA_PRESETS: IkeaPreset[] = [
    { name: 'SEKTION 40x40', width: 400, height: 400 },
    { name: 'SEKTION 40x80', width: 400, height: 800 },
    { name: 'SEKTION 60x40', width: 600, height: 400 },
    { name: 'SEKTION 60x80', width: 600, height: 800 },
    { name: 'SEKTION 60x140', width: 600, height: 1400 },
    { name: 'SEKTION 80x40', width: 800, height: 400 },
    { name: 'SEKTION 80x80', width: 800, height: 800 },
    { name: 'SEKTION 80x140', width: 800, height: 1400 },
];

// ============================================
// PRICING CONSTANTS
// ============================================

export const PRICE_PER_M2 = 1200; // Base price per square meter
export const MIN_ORDER_VALUE = 300; // Minimum order value in PLN

// ============================================
// HELPER FUNCTIONS
// ============================================

export function getWoodByCode(code: string): WoodInfo | undefined {
    return WOODS.find(wood => wood.code === code);
}

export function getHandleByCode(code: string): HandleInfo | undefined {
    return HANDLES.find(handle => handle.code === code);
}
