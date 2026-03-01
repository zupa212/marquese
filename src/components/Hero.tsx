"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { buttonVariants } from './ui/Button';
import { BUSINESS_INFO, BOOKING_URL, GOOGLE_MAPS_URL } from '@/lib/constants';
import { MapPin, Calendar, Star } from 'lucide-react';
import { useTrackClick } from '@/hooks/useTrackClick';

export const Hero = () => {
    const track = useTrackClick();

    return (
        <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero.png"
                    alt="Marquise Barber Shop Storefront"
                    fill
                    priority
                    className="object-cover object-center"
                />
                <div className="absolute inset-0 hero-overlay z-10"></div>
            </div>

            <div className="container mx-auto px-6 relative z-20 pt-20">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center space-x-2 bg-brand-gold/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-brand-gold/30"
                    >
                        <Star className="text-brand-gold fill-brand-gold" size={14} />
                        <span className="text-brand-ivory text-xs font-bold uppercase tracking-widest">
                            {BUSINESS_INFO.reviewCount} Αξιολογήσεις • 5.0 Αστέρια
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-brand-ivory leading-[1.1] mb-6"
                    >
                        Marquise <span className="text-brand-gold">Barber Shop</span> — Premium κουρέματα στην Κηφισιά
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-xl text-brand-ivory/80 mb-10 max-w-2xl font-light leading-relaxed"
                    >
                        Καθαρές γραμμές. Απόλυτη λεπτομέρεια. Premium εμπειρία για τον άνδρα που ξέρει τι θέλει.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Link
                            href={BOOKING_URL || BUSINESS_INFO.phoneClick}
                            onClick={() => track('booking', 'Hero CTA')}
                            className={buttonVariants({ variant: 'gold', size: 'lg', className: 'group' })}
                        >
                            <Calendar className="mr-2 group-hover:rotate-12 transition-transform" size={20} />
                            {BOOKING_URL ? "Κάντε κράτηση online" : "Κλήση για ραντεβού"}
                        </Link>
                        <Link
                            href={GOOGLE_MAPS_URL}
                            target="_blank"
                            onClick={() => track('directions', 'Hero Directions')}
                            className={buttonVariants({ variant: 'outline', size: 'lg', className: 'border-brand-ivory text-brand-ivory hover:bg-brand-ivory hover:text-brand-charcoal' })}
                        >
                            <MapPin className="mr-2" size={20} />
                            Οδηγίες
                        </Link>
                    </motion.div>

                    {/* Trust Row */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-brand-ivory/10 pt-8 max-w-2xl"
                    >
                        <div className="flex flex-col">
                            <span className="text-brand-gold font-serif text-2xl font-bold">Κηφισιά</span>
                            <span className="text-brand-ivory/50 text-xs uppercase tracking-widest">Τοποθεσία</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-brand-gold font-serif text-2xl font-bold">Online</span>
                            <span className="text-brand-ivory/50 text-xs uppercase tracking-widest">Booking</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-brand-gold font-serif text-2xl font-bold">Premium</span>
                            <span className="text-brand-ivory/50 text-xs uppercase tracking-widest">Experience</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
                <div className="w-[1px] h-12 bg-gradient-to-b from-brand-gold to-transparent"></div>
            </div>
        </section>
    );
};
