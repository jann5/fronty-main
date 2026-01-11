import { Suspense } from 'react';
import { ConfiguratorLayout } from '@/components/configurator/ConfiguratorLayout';
import { ConfigurationPanel } from '@/components/configurator/ConfigurationPanel';
import { ImagePreview } from '@/components/configurator/ImagePreview';
import { DynamicGallery } from '@/components/configurator/DynamicGallery';
import { ConfiguratorInitializer } from '@/components/configurator/ConfiguratorInitializer';
import { Header } from '@/components/Header';

export default function ConfiguratorPage() {
    return (
        <>
            <Suspense fallback={null}>
                <ConfiguratorInitializer />
            </Suspense>

            <div className="fixed top-0 left-0 w-full z-50">
                <Header />
            </div>

            {/* Main Content - Padded top for header (20 = 5rem = 80px) on ALL screens */}
            <div className="pt-20 max-lg:min-h-screen">
                <h1 className="text-4xl md:text-5xl font-light mb-6 tracking-wide">
                    Konfigurator
                </h1>
                <p className="text-gray-dark max-w-xl mx-auto text-lg font-light">
                    Stwórz swój wymarzony mebel. Wybierz model, materiał i dodatki.
                </p>
                <ConfiguratorLayout
                    configPanel={<ConfigurationPanel />}
                    galleryPanel={<DynamicGallery />}
                >
                    <ImagePreview />
                </ConfiguratorLayout>
            </div>
        </>
    );
}
