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
