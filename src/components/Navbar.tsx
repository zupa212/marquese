"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { LanguageToggle } from './LanguageToggle';
import { useLanguage } from '@/hooks/useLanguage';
import { buttonVariants } from './ui/Button';
import { BUSINESS_INFO, BOOKING_URL } from '@/lib/constants';
import { useTrackClick } from '@/hooks/useTrackClick';
import { cn } from '@/lib/utils';

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();
    const track = useTrackClick();
    const { t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: t.nav.services, href: '/services' },
        { name: t.nav.gallery, href: '/gallery' },
        { name: t.nav.reviews, href: '/reviews' },
        { name: t.nav.contact, href: '/contact' },
    ];

    return (
        <nav
            className="fixed top-4 left-4 right-4 lg:top-6 lg:left-1/2 lg:-translate-x-1/2 lg:w-full lg:max-w-5xl z-50 transition-all duration-300"
        >
            <div className={cn(
                "w-full rounded-full border px-6 py-3 md:py-4 transition-all duration-300 flex justify-between items-center shadow-lg",
                isScrolled || pathname !== '/'
                    ? "bg-brand-charcoal/80 backdrop-blur-xl border-white/10"
                    : "bg-brand-charcoal/40 backdrop-blur-md border-white/5"
            )}>
                {/* Logo */}
                <Link href="/" className="flex flex-col group justify-center">
                    <span className="font-serif text-xl md:text-2xl font-bold tracking-tighter text-brand-ivory transition-colors group-hover:text-brand-gold">
                        MARQUISE
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-xs md:text-sm uppercase tracking-widest font-medium transition-all hover:text-brand-gold relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-brand-gold after:transition-all hover:after:w-full",
                                "text-brand-ivory",
                                pathname === link.href && "text-brand-gold after:w-full"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Desktop CTA & Toggle */}
                <div className="hidden lg:flex items-center space-x-6">
                    <LanguageToggle />
                    <Link
                        href={BOOKING_URL || BUSINESS_INFO.phoneClick}
                        onClick={() => track('booking', 'Navbar CTA')}
                        className={buttonVariants({
                            variant: 'gold',
                            size: 'sm',
                            className: 'rounded-full px-6 py-4 h-auto'
                        })}
                    >
                        {t.nav.book}
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="lg:hidden flex items-center space-x-4">
                    <LanguageToggle />
                    <button
                        className="p-2 text-brand-ivory hover:text-brand-gold transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={cn(
                "fixed inset-0 bg-brand-charcoal/95 backdrop-blur-xl z-40 transition-transform duration-500 lg:hidden flex flex-col items-center justify-center space-y-8 rounded-3xl",
                isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            )}>
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                            "text-3xl font-serif font-bold text-brand-ivory hover:text-brand-gold transition-colors",
                            pathname === link.href && "text-brand-gold underline underline-offset-8 decoration-1"
                        )}
                    >
                        {link.name}
                    </Link>
                ))}
                <Link
                    href={BOOKING_URL || BUSINESS_INFO.phoneClick}
                    onClick={() => {
                        track('booking', 'Mobile Nav CTA');
                        setIsMobileMenuOpen(false);
                    }}
                    className={buttonVariants({ variant: 'gold', size: 'lg', className: 'mt-8 rounded-full' })}
                >
                    {t.nav.book}
                </Link>
            </div>
        </nav>
    );
};
