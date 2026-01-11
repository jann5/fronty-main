'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ConfiguratorLayoutProps {
    children: React.ReactNode;
    configPanel: React.ReactNode;
    galleryPanel: React.ReactNode;
}

export function ConfiguratorLayout({
    children,
    configPanel,
    galleryPanel
}: ConfiguratorLayoutProps) {
    return (
        // Height calculation: mobile stack vertically, desktop side-by-side
        <div className="flex flex-col lg:flex-row h-auto lg:h-[calc(100vh-10rem)] w-full overflow-hidden bg-primary-white">
            {/* LEFT COLUMN: Configuration Panel */}
            <motion.aside
                className="w-full lg:w-[35%] h-auto lg:h-full overflow-y-auto border-b lg:border-b-0 lg:border-r border-gray-medium bg-white z-20 shadow-sm lg:shadow-none"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {configPanel}
            </motion.aside>

            {/* CENTER COLUMN: Image Preview */}
            <main className="w-full lg:w-[65%] h-[60vh] lg:h-full relative bg-gray-light">
                {children}
            </main>

            {/* Gallery Removed per user request */}
        </div>
    );
}
