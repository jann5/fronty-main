import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
    id: string; // Unique ID for cart entry (e.g. timestamp)
    sku: string;
    modelId: string;
    modelName: string;
    woodId: string;
    woodName: string;
    dimensions: { width: number; height: number };
    handleId: string;
    handleName: string;
    price: number;
    quantity: number;
    image: string;
}

interface CartState {
    items: CartItem[];
    isOpen: boolean;
    addItem: (item: Omit<CartItem, 'id'>) => void;
    removeItem: (id: string) => void;
    updateQuantity: (id: string, delta: number) => void;
    openCart: () => void;
    closeCart: () => void;
    clearCart: () => void;
    total: number;
    _hasHydrated: boolean;
    setHasHydrated: (state: boolean) => void;
}

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            items: [],
            isOpen: false,
            total: 0,
            _hasHydrated: false,
            setHasHydrated: (state) => set({ _hasHydrated: state }),

            addItem: (newItem) => {
                const id = Date.now().toString();
                set((state) => {
                    const items = [...state.items, { ...newItem, id }];
                    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
                    return { items, total, isOpen: true }; // Auto-open cart on add
                });
            },

            removeItem: (id) => {
                set((state) => {
                    const items = state.items.filter((i) => i.id !== id);
                    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
                    return { items, total };
                });
            },

            updateQuantity: (id, delta) => {
                set((state) => {
                    const items = state.items.map((item) => {
                        if (item.id === id) {
                            const newQuantity = Math.max(1, item.quantity + delta);
                            return { ...item, quantity: newQuantity };
                        }
                        return item;
                    });
                    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
                    return { items, total };
                });
            },

            openCart: () => set({ isOpen: true }),
            closeCart: () => set({ isOpen: false }),
            clearCart: () => set({ items: [], total: 0 }),
        }),
        {
            name: 'nawrot-cart-storage',
            onRehydrateStorage: (state) => {
                return () => {
                    state?.setHasHydrated(true);
                };
            },
        }
    )
);
