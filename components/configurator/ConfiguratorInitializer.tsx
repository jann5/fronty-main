'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useConfiguratorStore } from '@/lib/store/configuratorStore';
import { MODELS } from '@/data/models';
import { WOODS } from '@/data/constants';

export function ConfiguratorInitializer() {
    const searchParams = useSearchParams();
    const setModel = useConfiguratorStore((state) => state.setModel);
    const setWood = useConfiguratorStore((state) => state.setWood);
    const reset = useConfiguratorStore((state) => state.reset);

    useEffect(() => {
        // Only run if we have params, otherwise we might be resuming session
        // For now, let's reset if params are present to ensure fresh start from link
        const modelParam = searchParams.get('model');

        if (modelParam) {
            // Find model
            const model = MODELS.find(m => m.id === modelParam);
            if (model) {
                // @ts-ignore
                setModel(model.id);

                // Auto-select first wood (Oak Natural) if none selected
                // @ts-ignore
                setWood(WOODS[0].id);
            }
        }
    }, [searchParams, setModel, setWood]);

    return null; // This component renders nothing
}
