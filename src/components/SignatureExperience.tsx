"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface SignatureExperienceProps {
    title: string;
    description: string;
    image: string;
    reverse?: boolean;
}

export const SignatureExperience = ({ title, description, image, reverse = false }: SignatureExperienceProps) => {
    return (
        <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 mb-24 last:mb-0`}>
            <motion.div
                className="w-full lg:w-1/2"
                initial={{ opacity: 0, x: reverse ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden group">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-brand-green/20 mix-blend-multiply opacity-50"></div>
                </div>
            </motion.div>

            <motion.div
                className="w-full lg:w-1/2 space-y-6"
                initial={{ opacity: 0, x: reverse ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <h3 className="text-3xl md:text-5xl font-serif font-bold italic text-brand-gold">{title}</h3>
                <p className="text-brand-ivory/70 text-lg leading-relaxed font-light">
                    {description}
                </p>
                <div className="w-16 h-1 bg-brand-gold/40"></div>
            </motion.div>
        </div>
    );
};
