'use client';

import { ContactShadows, Environment, OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import { useConfiguratorStore } from '@/lib/store/configuratorStore';
import { WOODS } from '@/data/constants';

function PreviewScene() {
    const { selectedWood } = useConfiguratorStore();

    // Get color from constants or default
    const woodInfo = WOODS.find(w => w.id === selectedWood);
    const color = woodInfo ? woodInfo.color : '#e5e5e5';

    return (
        <group>
            {/* Centered Model (Top of geometry at ~1.5, Bottom at -1.5, so centered at 0) */}
            {/* Lifted slightly (0.15) to hover above shadow plane */}
            <mesh castShadow receiveShadow position={[0, 0.15, 0]}>
                <boxGeometry args={[2, 3, 0.08]} /> {/* 40x60cm ratio */}
                <meshStandardMaterial
                    key={selectedWood || 'default'} // Force re-render
                    color={color}
                    roughness={0.7}
                    metalness={0.1}
                    envMapIntensity={0.8}
                />
            </mesh>
            {/* Shadow plane at 0 */}
            <ContactShadows position={[0, -1.4, 0]} opacity={0.4} scale={10} blur={2.5} far={4} color="#000000" />
        </group>
    );
}

export function ThreeDPreview() {
    return (
        <div className="w-full h-full relative bg-[#f5f5f5]">
            <Canvas shadows camera={{ position: [0, 0, 4.8], fov: 45 }}>
                <Suspense fallback={null}>
                    <Environment preset="studio" />
                    <ambientLight intensity={0.6} />
                    <spotLight position={[5, 10, 7]} angle={0.2} penumbra={1} intensity={1.5} castShadow />

                    <PreviewScene />

                    <OrbitControls
                        makeDefault
                        minPolarAngle={Math.PI / 3.5}
                        maxPolarAngle={Math.PI / 1.8} // Prevent going below floor too much
                        enablePan={false}
                        minDistance={3}
                        maxDistance={9}
                    />
                </Suspense>
            </Canvas>

            {/* Loading Overlay */}
            <div className="absolute top-6 left-6 pointer-events-none">
                <span className="text-[10px] uppercase font-bold tracking-widest text-primary-black/50 bg-white/80 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white">
                    Podgląd 3D
                </span>
            </div>
        </div>
    );
}
