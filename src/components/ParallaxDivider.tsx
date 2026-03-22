"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface ParallaxDividerProps {
    imageSrc: string;
    height?: string;
    className?: string;
}

export const ParallaxDivider = ({
    imageSrc,
    height = "h-[40vh] md:h-[60vh]",
    className
}: ParallaxDividerProps) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Move the image from -15% to 15% to create a deep parallax effect
    const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

    return (
        <div
            ref={ref}
            className={cn(
                "w-full relative overflow-hidden my-24",
                height,
                className
            )}
            style={{
                clipPath: 'polygon(0 10%, 100% 0, 100% 90%, 0 100%)'
            }}
        >
            <motion.div
                style={{ y }}
                className="absolute inset-0 w-full h-[140%] -top-[20%]"
            >
                <Image
                    src={imageSrc}
                    alt="Marquise Barber Shop Parallax"
                    fill
                    className="object-cover"
                    priority
                />
            </motion.div>
            
            {/* Elegant Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/40 via-transparent to-brand-charcoal/40" />
            <div className="absolute inset-0 bg-brand-charcoal/10" />
        </div>
    );
};
