"use client";

import React from 'react';
import Link from 'next/link';
import { Phone, MapPin, Facebook, Instagram } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/constants';
import { useTrackClick } from '@/hooks/useTrackClick';
import { useLanguage } from '@/hooks/useLanguage';
import { translations, TranslationSchema } from '@/lib/i18n';
import { ModelViewer } from './ModelViewer';

export const Footer = () => {
    const track = useTrackClick();
    const { t, language } = useLanguage();

    return (
        <footer className="relative pb-24 overflow-hidden px-4 md:px-12 lg:px-20 mt-20">
            <div className="container mx-auto max-w-7xl">
                {/* 3D Model Placeholder */}
                <div className="mb-20 transform scale-110 md:scale-125">
                    <ModelViewer />
                </div>

                <div className="relative group overflow-hidden rounded-[40px] md:rounded-[80px] border-l-8 border-r-8 border-white/5 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] transition-transform duration-1000">
                    {/* Parallax Background Layers */}
                    <div className="absolute inset-0 bg-brand-deep-green pointer-events-none transition-colors duration-700"></div>
                    <div className="absolute inset-0 leather-grain pointer-events-none"></div>
                    <div className="absolute inset-0 brick-pattern opacity-[0.03] pointer-events-none overflow-hidden h-[120%] -top-[10%] group-hover:translate-y-4 transition-transform duration-[2000ms] ease-out"></div>
                    
                    <div className="px-8 md:px-16 lg:px-24 pt-24 pb-12 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                            {/* Brand Column */}
                            <div className="flex flex-col items-center text-center space-y-10 relative">
                                <Link href="/" className="flex flex-col items-center group/logo">
                                    <span className="text-5xl font-serif font-bold tracking-tighter text-brand-ivory group-hover/logo:italic transition-all duration-500 text-center">
                                        MARQUISE
                                    </span>
                                    <span className="text-xs uppercase tracking-[0.5em] font-sans text-brand-gold mt-2 font-semibold">
                                        Barber Shop
                                    </span>
                                </Link>
                                <p className="text-brand-ivory/70 text-base leading-relaxed max-w-xs font-medium">
                                    {t.hero.subtitle}
                                </p>
                                <div className="flex space-x-8 items-center justify-center">
                                    <Link href="#" className="text-brand-ivory/40 hover:text-brand-gold transition-all duration-300 transform hover:scale-110">
                                        <Instagram size={24} />
                                    </Link>
                                    <Link href="#" className="text-brand-ivory/40 hover:text-brand-gold transition-all duration-300 transform hover:scale-110">
                                        <Facebook size={24} />
                                    </Link>
                                </div>
                            </div>

                            {/* Contact Column */}
                            <div className="flex flex-col items-center text-center space-y-8">
                                <h3 className="text-xl font-serif font-bold text-brand-ivory uppercase tracking-widest border-b-2 border-white/10 pb-3 inline-block leading-none">{t.contactPage.info}</h3>
                                <ul className="space-y-6 flex flex-col items-center text-center">
                                    <li className="flex flex-col items-center space-y-2 group/item text-center">
                                        <MapPin className="text-brand-gold/60 group-hover/item:text-brand-gold transition-colors" size={24} />
                                        <span className="text-brand-ivory/80 group-hover/item:text-brand-ivory transition-all text-sm font-semibold max-w-[200px] text-center">
                                            {BUSINESS_INFO.address}
                                        </span>
                                    </li>
                                    <li className="flex flex-col items-center space-y-2 group/item text-center">
                                        <Phone className="text-brand-gold/60 group-hover/item:text-brand-gold transition-colors" size={24} />
                                        <a
                                            href={BUSINESS_INFO.phoneClick}
                                            onClick={() => track('call', 'Footer Phone')}
                                            className="text-brand-ivory/80 group-hover/item:text-brand-ivory transition-all text-sm font-bold text-center"
                                        >
                                            {BUSINESS_INFO.phone}
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Hours Column */}
                            <div className="flex flex-col items-center text-center space-y-8">
                                <h3 className="text-xl font-serif font-bold text-brand-ivory uppercase tracking-widest border-b-2 border-white/10 pb-3 inline-block leading-none">{t.common.hours}</h3>
                                <ul className="space-y-3 w-full max-w-[240px] text-center">
                                    {BUSINESS_INFO.hours.map((item) => (
                                        <li key={item.day} className="flex justify-between items-center text-sm py-1 border-b border-white/5 last:border-0 text-center">
                                            <span className="text-white/40 font-semibold uppercase tracking-wider text-[11px] text-left">
                                                {language === 'el' ? item.day : (translations.en as TranslationSchema & { days: Record<string, string> }).days?.[item.day] || item.day}
                                            </span>
                                            <span className={item.time === 'Κλειστά' ? 'text-red-400/70 font-bold italic text-right' : 'text-brand-ivory font-bold text-right'}>
                                                {item.time === 'Κλειστά' ? t.common.closed : item.time}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Quick Links Column */}
                            <div className="flex flex-col items-center text-center space-y-8">
                                <h3 className="text-xl font-serif font-bold text-brand-ivory uppercase tracking-widest border-b-2 border-white/10 pb-3 inline-block leading-none">{language === 'el' ? 'Σύνδεσμοι' : 'Links'}</h3>
                                <ul className="flex flex-col items-center gap-4 text-center">
                                    <li><Link href="/services" className="text-sm text-brand-ivory/60 hover:text-brand-gold transition-all duration-300 font-bold flex items-center justify-center text-center">{t.nav.services}</Link></li>
                                    <li><Link href="/reviews" className="text-sm text-brand-ivory/60 hover:text-brand-gold transition-all duration-300 font-bold flex items-center justify-center text-center">{t.nav.reviews}</Link></li>
                                    <li><Link href="/contact" className="text-sm text-brand-ivory/60 hover:text-brand-gold transition-all duration-300 font-bold flex items-center justify-center text-center">{t.nav.contact}</Link></li>
                                </ul>
                            </div>
                        </div>

                        {/* Bottom Bar */}
                        <div className="py-12 border-t border-white/10 flex flex-col items-center space-y-6 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-white/20 text-center">
                            <p className="hover:text-brand-gold transition-colors">© {new Date().getFullYear()} Marquise Barber Shop. Premium Craftsmanship.</p>
                            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
                                <p className="hover:text-brand-gold transition-colors cursor-help">Digital Architecture by Premium Agency</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
