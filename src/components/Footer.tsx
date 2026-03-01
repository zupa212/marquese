import React from 'react';
import Link from 'next/link';
import { Phone, MapPin, Clock, Facebook, Instagram, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO, GOOGLE_MAPS_URL } from '@/lib/constants';

export const Footer = () => {
    return (
        <footer className="relative bg-brand-charcoal text-white pt-20 pb-10 overflow-hidden">
            {/* Brick Pattern Background */}
            <div className="absolute inset-0 brick-pattern opacity-10 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="flex flex-col space-y-6">
                        <Link href="/" className="flex flex-col">
                            <span className="text-3xl font-serif font-bold tracking-tighter text-brand-gold">
                                MARQUISE
                            </span>
                            <span className="text-xs uppercase tracking-[0.3em] font-sans text-brand-ivory opacity-80">
                                Barber Shop
                            </span>
                        </Link>
                        <p className="text-brand-ivory opacity-60 text-sm leading-relaxed max-w-xs">
                            Premium εμπειρία κουρέματος και περιποίησης στην καρδιά της Κηφισιάς. Εκεί όπου η παράδοση συναντά το σύγχρονο στυλ.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="w-10 h-10 rounded-full border border-brand-gold/30 flex items-center justify-center hover:bg-brand-gold hover:text-brand-charcoal transition-all">
                                <Instagram size={18} />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full border border-brand-gold/30 flex items-center justify-center hover:bg-brand-gold hover:text-brand-charcoal transition-all">
                                <Facebook size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Contact Column */}
                    <div className="flex flex-col space-y-6">
                        <h3 className="text-lg font-serif font-bold text-brand-gold uppercase tracking-wider">Επικοινωνία</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3 group">
                                <MapPin className="text-brand-gold mt-1 flex-shrink-0" size={18} />
                                <a
                                    href={GOOGLE_MAPS_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-brand-ivory opacity-80 hover:opacity-100 hover:text-brand-gold transition-all text-sm"
                                >
                                    {BUSINESS_INFO.address}
                                </a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="text-brand-gold flex-shrink-0" size={18} />
                                <a
                                    href={BUSINESS_INFO.phoneClick}
                                    className="text-brand-ivory opacity-80 hover:opacity-100 hover:text-brand-gold transition-all text-sm font-medium"
                                >
                                    {BUSINESS_INFO.phone}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Hours Column */}
                    <div className="flex flex-col space-y-6">
                        <h3 className="text-lg font-serif font-bold text-brand-gold uppercase tracking-wider">Ωράριο</h3>
                        <ul className="space-y-2">
                            {BUSINESS_INFO.hours.map((item) => (
                                <li key={item.day} className="flex justify-between text-sm border-b border-white/5 pb-1">
                                    <span className="text-brand-ivory opacity-60">{item.day}</span>
                                    <span className={item.time === 'Κλειστά' ? 'text-red-400 opacity-80' : 'text-brand-ivory opacity-90'}>
                                        {item.time}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links Column */}
                    <div className="flex flex-col space-y-6">
                        <h3 className="text-lg font-serif font-bold text-brand-gold uppercase tracking-wider">Σύνδεσμοι</h3>
                        <ul className="grid grid-cols-1 gap-2">
                            <li><Link href="/services" className="text-sm text-brand-ivory opacity-60 hover:opacity-100 hover:text-brand-gold transition-all">Υπηρεσίες</Link></li>
                            <li><Link href="/gallery" className="text-sm text-brand-ivory opacity-60 hover:opacity-100 hover:text-brand-gold transition-all">Γκαλερί</Link></li>
                            <li><Link href="/reviews" className="text-sm text-brand-ivory opacity-60 hover:opacity-100 hover:text-brand-gold transition-all">Κριτικές</Link></li>
                            <li><Link href="/contact" className="text-sm text-brand-ivory opacity-60 hover:opacity-100 hover:text-brand-gold transition-all">Επικοινωνία</Link></li>
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
