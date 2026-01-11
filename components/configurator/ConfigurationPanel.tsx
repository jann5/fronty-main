'use client';

import React from 'react';
import { useConfiguratorStore } from '@/lib/store/configuratorStore';
import { useCartStore } from '@/lib/store/cartStore';
import { MODELS } from '@/data/models';
import { WOODS, HANDLES, IKEA_PRESETS } from '@/data/constants';
import { Button } from '@/components/ui/Button';

export function ConfigurationPanel() {
    const {
        currentStep,
        selectedModel, setModel,
        selectedWood, setWood,
        dimensions, setDimensions,
        selectedHandle, setHandle,
        nextStep, prevStep,
        price, sku
    } = useConfiguratorStore();

    const { addItem, openCart } = useCartStore();

    const handleModelSelect = (id: string) => {
        // @ts-ignore
        setModel(id);
    };

    const handleWoodSelect = (id: string) => {
        // @ts-ignore
        setWood(id);
    };

    const handleAddToCart = () => {
        if (!selectedModel || !selectedWood || !selectedHandle) return;

        const model = MODELS.find(m => m.id === selectedModel);
        const wood = WOODS.find(w => w.id === selectedWood);
        const handle = HANDLES.find(h => h.id === selectedHandle);

        if (model && wood && handle) {
            addItem({
                sku: sku || 'CUSTOM-SKU',
                modelId: model.id,
                modelName: model.name,
                woodId: wood.id,
                woodName: wood.name,
                dimensions: dimensions,
                handleId: handle.id,
                handleName: handle.name,
                price: price,
                quantity: 1,
                image: model.image
            });
            openCart();
        }
    };

    const currentModel = MODELS.find(m => m.id === selectedModel);
    const currentBasePrice = currentModel?.basePrice || 0;

    const getPriceDiff = (candidatePrice: number) => {
        if (!selectedModel) return `+ ${candidatePrice} PLN`; // Initial state
        const diff = candidatePrice - currentBasePrice;
        if (diff === 0) return 'W cenie';
        return diff > 0 ? `+ ${diff} PLN` : `- ${Math.abs(diff)} PLN`;
    };

    return (
        <>
        <div className="p-4 md:p-6 lg:p-10 space-y-4 md:space-y-6 pb-32 md:pb-12">
            {/* Header */}
            <div className="space-y-1 md:space-y-2">
                <h2 className="text-lg md:text-xl font-light tracking-wide">Konfigurator</h2>
                <p className="text-xs text-gray-dark uppercase tracking-widest font-medium">
                    Krok {currentStep} / 5
                </p>
            </div>

            {/* Step 1: Model Selection */}
            <div className={currentStep === 1 ? 'block' : 'hidden'}>
                <h3 className="text-base md:text-lg font-medium mb-3 md:mb-4">Wybierz Model</h3>
                <div className="space-y-3 md:space-y-4">
                    {MODELS.map((model) => (
                        <div
                            key={model.id}
                            onClick={() => handleModelSelect(model.id)}
                            className={`p-3 md:p-4 border cursor-pointer transition-all duration-200 ${selectedModel === model.id
                                ? 'border-primary-black bg-gray-light'
                                : 'border-gray-medium hover:border-gray-dark'
                                }`}
                        >
                            <div className="flex justify-between items-start gap-2">
                                <span className="font-medium text-sm md:text-base">{model.name}</span>
                                <span className={`text-xs md:text-sm whitespace-nowrap ${selectedModel === model.id ? 'font-medium' : 'text-gray-dark'}`}>
                                    {getPriceDiff(model.basePrice)}
                                </span>
                            </div>
                            <p className="text-xs md:text-sm text-gray-dark mt-2">{model.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Step 2: Wood Selection */}
            <div className={currentStep === 2 ? 'block' : 'hidden'}>
                <h3 className="text-base md:text-lg font-medium mb-3 md:mb-4">Wybierz Materiał</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
                    {WOODS.map((wood) => (
                        <div
                            key={wood.id}
                            onClick={() => handleWoodSelect(wood.id)}
                            className={`p-2 md:p-4 border cursor-pointer transition-all text-center ${selectedWood === wood.id
                                ? 'border-primary-black ring-1 ring-primary-black'
                                : 'border-gray-medium hover:border-gray-dark'
                                }`}
                        >
                            <div
                                className="w-full h-16 md:h-24 mb-2 md:mb-3 bg-cover bg-center rounded-sm"
                                style={{ backgroundColor: wood.color }}
                            />
                            <span className="text-xs md:text-sm font-medium block">{wood.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Step 3: Dimensions */}
            <div className={currentStep === 3 ? 'block' : 'hidden'}>
                <h3 className="text-base md:text-lg font-medium mb-3 md:mb-4">Wymiary (mm)</h3>

                {/* IKEA Presets */}
                <div className="mb-6">
                    <p className="text-xs text-gray-dark mb-3 uppercase tracking-wide font-medium">Standardy IKEA</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {IKEA_PRESETS.map((preset) => (
                            <button
                                key={preset.name}
                                onClick={() => setDimensions(preset.width, preset.height)}
                                className={`py-2 px-2 md:px-3 text-xs md:text-sm border rounded-sm transition-all ${dimensions.width === preset.width && dimensions.height === preset.height
                                    ? 'border-primary-black bg-primary-black text-white'
                                    : 'border-gray-medium hover:border-gray-dark text-gray-dark'
                                    }`}
                            >
                                {preset.width} x {preset.height}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Custom Input */}
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                    <div>
                        <label className="text-xs text-gray-dark block mb-1 font-medium">Szerokość</label>
                        <input
                            type="number"
                            value={dimensions.width}
                            onChange={(e) => setDimensions(Number(e.target.value), dimensions.height)}
                            className="w-full border border-gray-medium p-2 md:p-3 rounded-sm focus:border-primary-black outline-none font-mono text-sm"
                        />
                    </div>
                    <div>
                        <label className="text-xs text-gray-dark block mb-1 font-medium">Wysokość</label>
                        <input
                            type="number"
                            value={dimensions.height}
                            onChange={(e) => setDimensions(dimensions.width, Number(e.target.value))}
                            className="w-full border border-gray-medium p-2 md:p-3 rounded-sm focus:border-primary-black outline-none font-mono text-sm"
                        />
                    </div>
                </div>
            </div>

            {/* Step 4: Handles */}
            <div className={currentStep === 4 ? 'block' : 'hidden'}>
                <h3 className="text-base md:text-lg font-medium mb-3 md:mb-4">Wybierz Uchwyty</h3>
                <div className="space-y-2 md:space-y-3">
                    {HANDLES.map((handle) => (
                        <div
                            key={handle.id}
                            onClick={() => setHandle(handle.id)}
                            className={`p-3 md:p-4 border cursor-pointer transition-all flex items-center justify-between ${selectedHandle === handle.id
                                ? 'border-primary-black bg-gray-light'
                                : 'border-gray-medium hover:border-gray-dark'
                                }`}
                        >
                            <span className="font-medium text-sm md:text-base">{handle.name}</span>
                            <span className="text-xs md:text-sm text-gray-dark whitespace-nowrap">
                                {handle.price > 0 ? `+ ${handle.price} PLN` : 'W cenie'}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Step 5: Summary */}
            <div className={currentStep === 5 ? 'block' : 'hidden'}>
                <h3 className="text-base md:text-lg font-medium mb-4 md:mb-6">Podsumowanie</h3>

                <div className="space-y-4 md:space-y-6 border-t border-gray-medium pt-4 md:pt-6">
                    <div className="flex justify-between text-sm md:text-base">
                        <span className="text-gray-dark">Model</span>
                        <span className="font-medium">{currentModel?.name || '-'}</span>
                    </div>
                    <div className="flex justify-between text-sm md:text-base">
                        <span className="text-gray-dark">Materiał</span>
                        <span className="font-medium">{WOODS.find(w => w.id === selectedWood)?.name || '-'}</span>
                    </div>
                    <div className="flex justify-between text-sm md:text-base">
                        <span className="text-gray-dark">Wymiary</span>
                        <span className="font-medium font-mono">{dimensions.width} x {dimensions.height} mm</span>
                    </div>
                    <div className="flex justify-between text-sm md:text-base">
                        <span className="text-gray-dark">Uchwyt</span>
                        <span className="font-medium">{HANDLES.find(h => h.id === selectedHandle)?.name || 'Brak'}</span>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t border-gray-medium mt-4">
                        <span className="text-gray-dark uppercase tracking-widest text-xs md:text-sm font-medium">Cena Netto</span>
                        <span className="text-lg md:text-xl font-light">{Math.round(price / 1.23)} PLN</span>
                    </div>
                    <div className="bg-gray-light p-3 md:p-4 rounded-sm text-xs text-gray-dark leading-relaxed">
                        Czas realizacji: 6-8 tygodni. <br />
                        Dostawa kurierem ubezpieczonym.
                    </div>
                </div>
            </div>

            {/* Spacer for bottom bar */}
            <div className="h-40 md:h-0" aria-hidden="true" />
        </div>

        {/* Bottom Bar (Sticky on Mobile, Hidden on Desktop) */}
        <div className="fixed bottom-0 left-0 w-full md:hidden bg-white border-t border-gray-medium p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] z-30">
            <div className="flex justify-between items-end mb-3">
                <div>
                    <span className="text-xs text-gray-dark block mb-1 font-medium">CENA CAŁKOWITA</span>
                    <span className="text-xl md:text-2xl font-light">{price} PLN</span>
                </div>
                <div className="text-right">
                    <span className="text-xs text-gray-dark font-mono block">{sku || '---'}</span>
                </div>
            </div>

            <div className="flex gap-2">
                {currentStep > 1 && (
                    <Button variant="secondary" onClick={prevStep} fullWidth size="sm">
                        Wstecz
                    </Button>
                )}
                <Button
                    variant="primary"
                    onClick={currentStep < 5 ? nextStep : handleAddToCart}
                    fullWidth
                    size="sm"
                    disabled={!selectedModel && currentStep === 1}
                >
                    {currentStep < 5 ? 'Dalej' : 'Do Koszyka'}
                </Button>
            </div>
        </div>

        {/* Bottom Bar (Desktop) */}
        <div className="hidden md:flex fixed bottom-0 left-0 md:w-[35%] bg-white border-t border-gray-medium p-6 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] z-30 flex-col gap-4">
            <div className="flex justify-between items-end">
                <div>
                    <span className="text-xs text-gray-dark block mb-1 font-medium">CENA CAŁKOWITA</span>
                    <span className="text-2xl font-light">{price} PLN</span>
                </div>
                <div className="text-right">
                    <span className="text-xs text-gray-dark font-mono block mb-1">{sku || '---'}</span>
                </div>
            </div>

            <div className="flex gap-4">
                {currentStep > 1 && (
                    <Button variant="secondary" onClick={prevStep} fullWidth>
                        Wstecz
                    </Button>
                )}
                <Button
                    variant="primary"
                    onClick={currentStep < 5 ? nextStep : handleAddToCart}
                    fullWidth
                    disabled={!selectedModel && currentStep === 1}
                >
                    {currentStep < 5 ? 'Dalej' : 'Do Koszyka'}
                </Button>
            </div>
        </div>
        </>
    );
}
