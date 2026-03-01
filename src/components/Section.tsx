"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    dark?: boolean;
}

export const Section = ({ children, className, id, dark = false }: SectionProps) => {
    return (
        <section
            id={id}
            className={cn(
                "py-20 md:py-32 px-6",
                dark ? "bg-brand-charcoal text-brand-ivory" : "bg-brand-ivory text-brand-charcoal",
                className
            )}
        >
            <motion.div
                className="container mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
                {children}
            </motion.div>
        </section>
    );
};
