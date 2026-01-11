// ============================================
// TYPE DEFINITIONS - NAWROT STUDIO
// ============================================

// Product Models
export type ModelId = 'wisla' | 'bieszczady' | 'tatry' | 'karpaty' | 'sudety';

export type WoodType =
    | 'dab_naturalny'   // Dąb naturalny (olej)
    | 'dab_wedzony'     // Dąb wędzony (olej)
    | 'jesion_jasny'    // Jesion jasny (lakier mat)
    | 'jesion_smolowany'; // Jesion smołowany

export type HandleType =
    | 'cien'        // Uchwyt Cień
    | 'minimalist'  // Minimalistyczny
    | 'classic'     // Klasyczny
    | 'integrated'  // Zintegrowany
    | 'none';       // Bez uchwytu

export interface ProductModel {
    id: ModelId;
    name: string;
    description: string;
    features: string[];
    image: string;
    images?: string[]; // Multiple images for gallery
    basePrice: number;
    code: string; // For SKU generation: WSL, BIE, etc.
}

// Configurator State
export interface Dimensions {
    width: number;  // in mm
    height: number; // in mm
}

export interface ConfiguratorState {
    // Selections
    selectedModel: ModelId | null;
    selectedWood: WoodType | null;
    dimensions: Dimensions;
    selectedHandle: HandleType | null;
    edgeColor: string | null;

    // UI State
    currentStep: number;
    previewMode: '3d' | 'context';

    // Computed
    price: number;
    sku: string;

    // Actions
    setModel: (model: ModelId) => void;
    setWood: (wood: WoodType) => void;
    setDimensions: (width: number, height: number) => void;
    setHandle: (handle: HandleType) => void;
    setEdgeColor: (color: string) => void;
    nextStep: () => void;
    prevStep: () => void;
    setPreviewMode: (mode: '3d' | 'context') => void;
    reset: () => void;
    updateComputed: () => void;
}

// Price Breakdown
export interface PriceBreakdown {
    basePrice: number;
    materialCost: number;
    sizeCost: number;
    handlesCost: number;
    total: number;
}

// IKEA Presets
export interface IkeaPreset {
    name: string;
    width: number;
    height: number;
}

// Gallery & Realizations
export interface GalleryImage {
    _id: string;
    title: string;
    imageUrl: string;
    imageLqip?: string; // Low-quality placeholder
    description?: string;
    model?: string;
    wood?: string;
    alt?: string;
}

export interface Realization {
    id: number;
    image: string;
    title: string;
    model: ModelId;
    material: WoodType;
    dimensions: Dimensions;
}

// Cart
export interface CartItem {
    id: string;
    sku: string;
    model: ModelId;
    wood: WoodType;
    dimensions: Dimensions;
    handle: HandleType | null;
    price: number;
    quantity: number;
    thumbnail?: string;
    description: string;
}

export interface CartState {
    items: CartItem[];
    addItem: (item: Omit<CartItem, 'id' | 'quantity'>) => void;
    removeItem: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    clearCart: () => void;
    getTotalPrice: () => number;
    getTotalItems: () => number;
}

// Wood & Material Constants
export interface WoodInfo {
    id: WoodType;
    name: string;
    code: string; // For SKU: DABN, DABW, JESJ, JESS
    color: string; // Hex color for swatch
    textureUrl: string; // Path to texture image
    multiplier: number; // Price multiplier
}

// Handle Constants
export interface HandleInfo {
    id: HandleType;
    name: string;
    code: string; // For SKU
    price: number;
    imageUrl?: string;
}
