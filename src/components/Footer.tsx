"use client";

import React from 'react';
import Link from 'next/link';
import { Phone, MapPin, Clock, Facebook, Instagram, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO, GOOGLE_MAPS_URL } from '@/lib/constants';
import { useTrackClick } from '@/hooks/useTrackClick';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/lib/i18n';

export const Footer = () => {
    const track = useTrackClick();
    const { t, language } = useLanguage();

    return (
        <footer className="relative bg-brand-charcoal text-white pt-20 pb-10 overflow-hidden">
            {/* Brick Pattern Background */}
            <div className="absolute inset-0 brick-pattern opacity-10 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="flex flex-col space-y-8 relative">
                        <Link href="/" className="flex flex-col group">
                            <span className="text-4xl font-serif font-bold tracking-tighter text-brand-gold group-hover:italic transition-all">
                                MARQUISE
                            </span>
                            <span className="text-xs uppercase tracking-[0.4em] font-sans text-brand-ivory opacity-80 mt-1">
                                Barber Shop
                            </span>
                        </Link>
                        <p className="text-brand-ivory opacity-60 text-sm leading-relaxed max-w-xs font-light">
                            {t.hero.subtitle}
                        </p>
                        <div className="flex space-x-6 items-center">
                            <Link href="#" className="text-brand-ivory opacity-40 hover:opacity-100 hover:text-brand-gold transition-all">
                                <Instagram size={22} />
                            </Link>
                            <Link href="#" className="text-brand-ivory opacity-40 hover:opacity-100 hover:text-brand-gold transition-all">
                                <Facebook size={22} />
                            </Link>
                        </div>
                    </div>

                    {/* Contact Column */}
                    <div className="flex flex-col space-y-6">
                        <h3 className="text-lg font-serif font-bold text-brand-gold uppercase tracking-wider">{t.contactPage.info}</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3 group">
                                <MapPin className="text-brand-gold mt-1 flex-shrink-0" size={18} />
                                <span className="text-brand-ivory opacity-80 hover:opacity-100 hover:text-brand-gold transition-all text-sm">
                                    {BUSINESS_INFO.address}
                                </span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="text-brand-gold flex-shrink-0" size={18} />
                                <a
                                    href={BUSINESS_INFO.phoneClick}
                                    onClick={() => track('call', 'Footer Phone')}
                                    className="text-brand-ivory opacity-80 hover:opacity-100 hover:text-brand-gold transition-all text-sm font-medium"
                                >
                                    {BUSINESS_INFO.phone}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Hours Column */}
                    <div className="flex flex-col space-y-6">
                        <h3 className="text-lg font-serif font-bold text-brand-gold uppercase tracking-wider">{t.common.hours}</h3>
                        <ul className="space-y-2">
                            {BUSINESS_INFO.hours.map((item) => (
                                <li key={item.day} className="flex justify-between text-sm border-b border-white/5 pb-1">
                                    <span className="text-brand-ivory opacity-60">
                                        {language === 'el' ? item.day : (translations.en as any).days?.[item.day] || item.day}
                                    </span>
                                    <span className={item.time === 'Κλειστά' ? 'text-red-400 opacity-80' : 'text-brand-ivory opacity-90'}>
                                        {item.time === 'Κλειστά' ? t.common.closed : item.time}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links Column */}
                    <div className="flex flex-col space-y-6">
                        <h3 className="text-lg font-serif font-bold text-brand-gold uppercase tracking-wider">{language === 'el' ? 'Σύνδεσμοι' : 'Links'}</h3>
                        <ul className="grid grid-cols-1 gap-2">
                            <li><Link href="/services" className="text-sm text-brand-ivory opacity-60 hover:opacity-100 hover:text-brand-gold transition-all">{t.nav.services}</Link></li>
                            <li><Link href="/gallery" className="text-sm text-brand-ivory opacity-60 hover:opacity-100 hover:text-brand-gold transition-all">{t.nav.gallery}</Link></li>
                            <li><Link href="/reviews" className="text-sm text-brand-ivory opacity-60 hover:opacity-100 hover:text-brand-gold transition-all">{t.nav.reviews}</Link></li>
                            <li><Link href="/contact" className="text-sm text-brand-ivory opacity-60 hover:opacity-100 hover:text-brand-gold transition-all">{t.nav.contact}</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] uppercase tracking-widest text-brand-ivory opacity-40">
                    <p>© {new Date().getFullYear()} Marquise Barber Shop. All rights reserved.</p>
                    <p>Created by Premium Agency</p>
                </div>
            </div>
        </footer>
    );
};
