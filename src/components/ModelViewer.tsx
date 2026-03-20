"use client";

import React from 'react';

/**
 * Placeholder component for GLB 3D Model Integration.
 * Once the GLB file is provided, we can use @google/model-viewer or react-three-fiber.
 */
export const ModelViewer = () => {
    return (
        <div className="w-full h-[300px] md:h-[400px] flex flex-col items-center justify-center bg-brand-pastel-green/10 rounded-[40px] border-2 border-brand-pastel-green-dark border-dashed transition-all hover:bg-brand-pastel-green/20 group cursor-help">
            <div className="relative">
                {/* Visual placeholder for a 3D object */}
                <div className="w-24 h-24 md:w-32 md:h-32 bg-brand-pastel-green-dark rounded-full animate-pulse opacity-50 blur-xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 md:w-16 md:h-16 border-2 border-brand-charcoal opacity-20 rounded-lg rotate-45 group-hover:rotate-90 transition-transform duration-700"></div>
                </div>
            </div>
            
            <div className="mt-6 text-center">
                <h4 className="text-xl font-serif text-brand-green font-bold uppercase tracking-widest">3D Experience Pending</h4>
                <p className="text-sm text-brand-charcoal opacity-40 mt-2 max-w-xs px-4">
                    This area is reserved for the premium GLB barber shop model.
                </p>
            </div>
        </div>
    );
};
