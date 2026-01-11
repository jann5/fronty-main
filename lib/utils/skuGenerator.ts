import type { ConfiguratorState, ModelId, WoodType, HandleType } from '@/lib/types';
import { WOOD_MAP, HANDLE_MAP } from '@/data/constants';
import { getModelById } from '@/data/models';

// ============================================
// SKU GENERATOR
// Format: NWRT-{MODEL_CODE}-{WOOD_CODE}-{WIDTH}x{HEIGHT}-{HANDLE_CODE}
// Example: NWRT-WSL-DABW-600x800-UCHC
// ============================================

export function generateSKU(
    model: ModelId | null,
    wood: WoodType | null,
    width: number,
    height: number,
    handle: HandleType | null
): string {
    if (!model || !wood) {
        return '';
    }

    // Get codes
    const productModel = getModelById(model);
    const modelCode = productModel?.code || 'UNK';

    const woodInfo = wood ? WOOD_MAP[wood] : null;
    const woodCode = woodInfo?.code || 'UNK';

    const handleInfo = handle ? HANDLE_MAP[handle] : null;
    const handleCode = handleInfo?.code || 'NONE';

    // Format dimensions (convert to mm if needed, remove decimals)
    const w = Math.round(width);
    const h = Math.round(height);

    return `NWRT-${modelCode}-${woodCode}-${w}x${h}-${handleCode}`;
}

// ============================================
// DYNAMIC DESCRIPTION GENERATOR
// ============================================

export function generateDescription(config: Partial<ConfiguratorState>): string {
    if (!config.selectedModel || !config.selectedWood) {
        return 'Skonfiguruj swój front';
    }

    const model = getModelById(config.selectedModel);
    const wood = config.selectedWood ? WOOD_MAP[config.selectedWood] : null;
    const handle = config.selectedHandle ? HANDLE_MAP[config.selectedHandle] : null;
    const dims = config.dimensions;

    const parts: string[] = [];

    if (model) parts.push(`Front ${model.name}`);
    if (wood) parts.push(wood.name);
    if (dims && dims.width && dims.height) {
        parts.push(`${dims.width}x${dims.height}mm`);
    }
    if (handle && handle.id !== 'none') {
        parts.push(handle.name);
    }

    return parts.join(', ');
}

// ============================================
// VALIDATION
// ============================================

export function validateConfiguration(config: Partial<ConfiguratorState>): {
    valid: boolean;
    errors: string[];
} {
    const errors: string[] = [];

    if (!config.selectedModel) {
        errors.push('Wybierz model frontu');
    }

    if (!config.selectedWood) {
        errors.push('Wybierz rodzaj drewna');
    }

    if (!config.dimensions || !config.dimensions.width || !config.dimensions.height) {
        errors.push('Podaj wymiary frontu');
    } else {
        const { width, height } = config.dimensions;

        // Min/max validation
        if (width < 200 || width > 1200) {
            errors.push('Szerokość musi być między 200mm a 1200mm');
        }
        if (height < 200 || height > 2400) {
            errors.push('Wysokość musi być między 200mm a 2400mm');
        }
    }

    return {
        valid: errors.length === 0,
        errors
    };
}
