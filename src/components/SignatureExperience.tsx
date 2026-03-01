"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BarberPole } from './BarberPole';
import { cn } from '@/lib/utils';

interface SignatureExperienceProps {
    title: string;
    description: string;
    image: string;
    reverse?: boolean;
}

export const SignatureExperience = ({ title, description, image, reverse = false }: SignatureExperienceProps) => {
    return (
        <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 mb-32 last:mb-0`}>
            <motion.div
                className="w-full lg:w-1/2 relative"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden group shadow-2xl border border-brand-ivory/10">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-brand-green/20 mix-blend-multiply opacity-30"></div>
                </div>

                {/* Decorative Barber Pole */}
                <div className={cn(
                    "absolute -bottom-10 z-10 hidden lg:block",
                    reverse ? "-left-10" : "-right-10"
                )}>
                    <BarberPole className="scale-75 shadow-[0_20px_50px_rgba(0,0,0,0.3)]" />
                </div>
            </motion.div>

            <motion.div
                className="w-full lg:w-1/2 space-y-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <div className="space-y-4">
                    <span className="text-brand-gold font-serif text-lg italic tracking-widest uppercase">The marquise way</span>
                    <h3 className="text-4xl md:text-5xl font-serif font-bold text-brand-ivory leading-tight">{title}</h3>
                </div>
                <p className="text-brand-ivory/70 text-lg leading-relaxed font-light italic">
                    {description}
                </p>
                <div className="flex items-center space-x-4">
                    <div className="w-12 h-[1px] bg-brand-gold/40"></div>
                    <span className="text-brand-gold text-xs uppercase tracking-[0.3em] font-bold">Premium Selection</span>
                </div>
            </motion.div>
        </div>
    );
};
