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

            {/* Main Content - Padded top for header (5rem = 80px) */}
            <div className="pt-20 w-full">
                <div className="px-4 md:px-6 py-4 md:py-6 mb-4 md:mb-6 max-w-full">
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-light tracking-wide">
                        Konfigurator
                    </h1>
                    <p className="text-gray-dark text-sm md:text-base font-light mt-2">
                        Stwórz swój wymarzony mebel.
                    </p>
                </div>
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
