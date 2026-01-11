import React from 'react';
import { motion } from 'framer-motion';

export function Loader() {
    return (
        <div className="flex items-center justify-center">
            <motion.div
                className="w-12 h-12 border-2 border-gray-medium border-t-primary-black rounded-full"
                animate={{ rotate: 360 }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: 'linear'
                }}
            />
        </div>
    );
}

export function PageLoader() {
    return (
        <div className="fixed inset-0 bg-primary-white flex items-center justify-center z-50">
            <div className="text-center">
                <Loader />
                <p className="mt-4 text-sm text-gray-dark uppercase tracking-wider">Ładowanie...</p>
            </div>
        </div>
    );
}
