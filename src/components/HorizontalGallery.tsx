"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const images = [
    "https://images.unsplash.com/photo-1599351431247-f132f017154c?q=80&w=1470&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1470&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1470&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1593702281257-233974514da7?q=80&w=1470&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1512690196236-40742d939e92?q=80&w=1470&auto=format&fit=crop",
];

export const HorizontalGallery = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

    return (
        <div ref={targetRef} className="relative h-[300vh] bg-brand-charcoal">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-8 px-8">
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className="group relative h-[450px] w-[350px] md:h-[600px] md:w-[450px] overflow-hidden rounded-[3rem] bg-brand-charcoal/20 shadow-2xl border border-white/5"
                        >
                            <Image
                                src={src}
                                alt={`Gallery Item ${index + 1}`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                    ))}
                    {/* Repeat some images for longer scroll if needed */}
                    {images.slice(0, 2).map((src, index) => (
                        <div
                            key={`repeat-${index}`}
                            className="group relative h-[450px] w-[350px] md:h-[600px] md:w-[450px] overflow-hidden rounded-[3rem] bg-brand-charcoal/20 shadow-2xl border border-white/5 flex-shrink-0"
                        >
                            <Image
                                src={src}
                                alt={`Gallery Item Repeat ${index + 1}`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};
