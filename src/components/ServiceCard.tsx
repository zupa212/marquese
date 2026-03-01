"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
    name: string;
    description: string;
    index: number;
}

export const ServiceCard = ({ name, description, index }: ServiceCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="group p-8 bg-white border border-brand-charcoal/5 rounded-sm hover:border-brand-gold/30 hover:shadow-xl hover:shadow-brand-gold/5 transition-all duration-300 flex flex-col items-start space-y-4 cursor-default"
        >
            <div className="w-12 h-12 rounded-full bg-brand-green/5 text-brand-green flex items-center justify-center group-hover:bg-brand-gold group-hover:text-brand-charcoal transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-scissors"><circle cx="6" cy="6" r="3" /><path d="M8.12 9.12 12 12" /><path d="M20 4 8.12 15.88" /><circle cx="6" cy="18" r="3" /><path d="M14.8 14.8 20 20" /></svg>
            </div>
            <h3 className="text-xl font-serif font-bold group-hover:text-brand-gold transition-colors italic">{name}</h3>
            <p className="text-sm text-brand-charcoal/60 leading-relaxed">
                {description}
            </p>
            <div className="h-0.5 w-0 group-hover:w-12 bg-brand-gold transition-all duration-300"></div>
        </motion.div>
    );
};
