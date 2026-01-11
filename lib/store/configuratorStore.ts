'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { ConfiguratorState, ModelId, WoodType, HandleType } from '@/lib/types';
import { calculateTotalPrice } from '@/lib/utils/priceCalculator';
import { generateSKU } from '@/lib/utils/skuGenerator';

// ============================================
// CONFIGURATOR ZUSTAND STORE
// ============================================

export const useConfiguratorStore = create<ConfiguratorState>()(
    persist(
        (set, get) => ({
            // Initial State
            selectedModel: null,
            selectedWood: null,
            dimensions: { width: 600, height: 800 }, // Default IKEA size
            selectedHandle: null,
            edgeColor: null,
            currentStep: 1,
            previewMode: '3d',
            price: 0,
            sku: '',

            // Actions
            setModel: (model: ModelId) => {
                set({ selectedModel: model });
                get().updateComputed();
            },

            setWood: (wood: WoodType) => {
                set({ selectedWood: wood });
                get().updateComputed();
            },

            setDimensions: (width: number, height: number) => {
                set({ dimensions: { width, height } });
                get().updateComputed();
            },

            setHandle: (handle: HandleType) => {
                set({ selectedHandle: handle });
                get().updateComputed();
            },

            setEdgeColor: (color: string) => {
                set({ edgeColor: color });
            },

            nextStep: () => {
                const current = get().currentStep;
                if (current < 5) {
                    set({ currentStep: current + 1 });
                }
            },

            prevStep: () => {
                const current = get().currentStep;
                if (current > 1) {
                    set({ currentStep: current - 1 });
                }
            },

            setPreviewMode: (mode: '3d' | 'context') => {
                set({ previewMode: mode });
            },

            reset: () => {
                set({
                    selectedModel: null,
                    selectedWood: null,
                    dimensions: { width: 600, height: 800 },
                    selectedHandle: null,
                    edgeColor: null,
                    currentStep: 1,
                    previewMode: '3d',
                    price: 0,
                    sku: ''
                });
            },

            // Internal: Update computed values
            updateComputed: () => {
                const state = get();
                const priceBreakdown = calculateTotalPrice(state);
                const sku = generateSKU(
                    state.selectedModel,
                    state.selectedWood,
                    state.dimensions.width,
                    state.dimensions.height,
                    state.selectedHandle
                );

                set({
                    price: priceBreakdown.total,
                    sku
                });
            }
        }),
        {
            name: 'nawrot-configurator',
            partialize: (state) => ({
                selectedModel: state.selectedModel,
                selectedWood: state.selectedWood,
                dimensions: state.dimensions,
                selectedHandle: state.selectedHandle,
                edgeColor: state.edgeColor
            })
        }
    )
);
