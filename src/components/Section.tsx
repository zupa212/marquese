"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    dark?: boolean;
    rounded?: boolean;
}

export const Section = ({ children, className, id, dark = false, rounded = false }: SectionProps) => {
    return (
        <section
            id={id}
            className={cn(
                "py-16 md:py-24 px-4 md:px-8",
                dark ? "bg-brand-charcoal text-brand-ivory" : "bg-brand-ivory text-brand-charcoal",
                className
            )}
        >
            <motion.div
                className={cn(
                    "container mx-auto",
                    rounded && cn(
                        "bg-white/50 backdrop-blur-sm rounded-[2rem] md:rounded-[4rem] p-8 md:p-16 border border-brand-charcoal/5 shadow-xl shadow-brand-charcoal/5",
                        dark && "bg-brand-ivory/5 border-brand-ivory/10 shadow-none"
                    )
                )}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
                {children}
            </motion.div>
        </section>
    );
};
