"use client";

import React from 'react';
import { motion } from 'framer-motion';

export const BarberPole = ({ className }: { className?: string }) => {
    return (
        <div className={`relative w-12 h-48 overflow-hidden rounded-full border-4 border-brand-charcoal shadow-lg bg-white ${className}`}>
            {/* Glossy Overlay */}
            <div className="absolute inset-0 z-20 bg-gradient-to-r from-white/30 via-transparent to-black/10 pointer-events-none"></div>

            {/* Rotating Stripes */}
            <div
                className="absolute inset-0 z-10 flex flex-col animate-[barberScroll_3s_linear_infinite]"
            >
                {[...Array(12)].map((_, i) => (
                    <React.Fragment key={i}>
                        <div className="h-8 w-full bg-red-600 skew-y-12"></div>
                        <div className="h-8 w-full bg-white skew-y-12"></div>
                        <div className="h-8 w-full bg-blue-700 skew-y-12"></div>
                        <div className="h-8 w-full bg-white skew-y-12"></div>
                    </React.Fragment>
                ))}
            </div>

            {/* Silver Caps */}
            <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-gray-300 to-gray-500 z-30 rounded-t-full shadow-inner"></div>
            <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-gray-300 to-gray-500 z-30 rounded-b-full shadow-inner"></div>
        </div>
    );
};
