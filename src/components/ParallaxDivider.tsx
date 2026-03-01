import React from 'react';
import { cn } from '@/lib/utils';

interface ParallaxDividerProps {
    imageSrc: string;
    height?: string;
    className?: string;
}

export const ParallaxDivider = ({
    imageSrc,
    height = "h-96 md:h-[30rem]",
    className
}: ParallaxDividerProps) => {
    return (
        <div
            className={cn(
                "w-full relative overflow-hidden my-20",
                height,
                className
            )}
            // Use clip-path to create the diagonal top and bottom cuts
            style={{
                clipPath: 'polygon(0 8%, 100% 0, 100% 92%, 0 100%)'
            }}
        >
            {/* The element holding the parallax background */}
            <div
                className="absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-center bg-fixed transform scale-125"
                style={{ backgroundImage: `url(${imageSrc})` }}
            />
            {/* Optional overlay to darken/tint the image slightly so it blends nicely */}
            <div className="absolute inset-0 bg-brand-charcoal/20" />
        </div>
    );
};
