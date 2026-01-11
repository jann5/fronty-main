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
        // Height calculation: 100vh - 80px (header height 5rem)
        <div className="flex flex-col lg:flex-row h-[calc(100vh-5rem)] w-full overflow-hidden bg-primary-white">
            {/* LEFT COLUMN: Configuration Panel (35%) */}
            <motion.aside
                className="w-full lg:w-[35%] h-[40vh] lg:h-full overflow-y-auto border-r border-gray-medium bg-white z-20 shadow-xl lg:shadow-none"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {configPanel}
            </motion.aside>

            {/* CENTER COLUMN: Image Preview (65%) */}
            <main className="w-full lg:w-[65%] h-[60vh] lg:h-full relative bg-gray-light">
                {children}
            </main>

            {/* Gallery Removed per user request */}
            {/* Mobile Gallery Toggle/Drawer would go here */}

            {/* Mobile Gallery Toggle/Drawer would go here */}
        </div>
    );
}
