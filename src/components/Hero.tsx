"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { buttonVariants } from './ui/Button';
import { BUSINESS_INFO, BOOKING_URL, GOOGLE_MAPS_URL } from '@/lib/constants';
import { MapPin, Calendar, Star, Phone } from 'lucide-react';
import { useTrackClick } from '@/hooks/useTrackClick';
import { useLanguage } from '@/hooks/useLanguage';

export const Hero = () => {
    const track = useTrackClick();
    const { t, language } = useLanguage();
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section ref={containerRef} className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
            {/* Parallax Background Video */}
            <motion.div style={{ y }} className="absolute inset-0 z-0">
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster="/images/IMG_20260226_202229_00_041.jpg"
                        className="w-full h-full object-cover scale-150"
                    >
                        <source src="/videos/barber-edit-final.mp4" type="video/mp4" />
                        {/* Fallback Image */}
                        <Image
                            src="/images/IMG_20260226_202229_00_041.jpg"
                            alt={language === 'el' ? "Premium Ανδρικό Κουρείο Marquise Barber Shop στην Κηφισιά" : "Premium Marquise Barber Shop in Kifisia"}
                            fill
                            priority
                            className="object-cover object-center scale-150"
                        />
                    </video>
                </div>
                <div className="absolute inset-0 hero-overlay z-10 bg-brand-charcoal/60"></div>
            </motion.div>

            <div className="container mx-auto px-6 relative z-20 pt-20">
                <motion.div style={{ opacity }} className="max-w-4xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-brand-ivory leading-[1.1] mb-6"
                    >
                        {t.hero?.title} — <span className="text-brand-gold">{language === 'el' ? 'Premium κουρέματα' : 'Premium cuts'}</span> {language === 'el' ? 'στην Κηφισιά' : 'in Kifisia'}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-xl text-brand-ivory/80 mb-10 max-w-2xl font-light leading-relaxed"
                    >
                        {t.hero?.subtitle}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="hidden md:flex flex-col sm:flex-row gap-4"
                    >
                        <Link
                            href={BOOKING_URL || BUSINESS_INFO.phoneClick}
                            onClick={() => track('booking', 'Hero CTA')}
                            className={buttonVariants({ variant: 'gold', size: 'lg', className: 'group px-12 py-8 text-xl' })}
                        >
                            <Calendar className="mr-3 group-hover:rotate-12 transition-transform" size={24} />
                            {BOOKING_URL ? (language === 'el' ? "Κλείσε Ραντεβού" : "Book appointment") : (language === 'el' ? "Κλήση για ραντεβού" : "Call for appointment")}
                        </Link>
                    </motion.div>

                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
                <div className="w-[1px] h-12 bg-gradient-to-b from-brand-gold to-transparent"></div>
            </div>
        </section>
    );
};
