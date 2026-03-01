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
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
                isScrolled ? "bg-brand-ivory/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent"
            )}
        >
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex flex-col group">
                    <span className={cn(
                        "font-serif text-2xl font-bold tracking-tighter transition-colors",
                        (isScrolled || pathname !== '/') ? "text-brand-charcoal" : "text-brand-ivory"
                    )}>
                        MARQUISE
                    </span>
                    <span className={cn(
                        "text-[10px] uppercase tracking-[0.3em] font-light -mt-1 transition-colors",
                        (isScrolled || pathname !== '/') ? "text-brand-gold" : "text-brand-gold/80"
                    )}>
                        Barber Shop
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center space-x-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-sm uppercase tracking-widest font-medium transition-all hover:text-brand-gold relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-brand-gold after:transition-all hover:after:w-full",
                                (isScrolled || pathname !== '/') ? "text-brand-charcoal" : "text-brand-ivory",
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
                            variant: (isScrolled || pathname !== '/') ? 'gold' : 'outline',
                            size: 'sm',
                            className: !(isScrolled || pathname !== '/') ? 'border-brand-ivory text-brand-ivory hover:bg-brand-ivory hover:text-brand-charcoal' : ''
                        })}
                    >
                        {t.nav.book}
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="lg:hidden flex items-center space-x-4">
                    <LanguageToggle />
                    <button
                        className={cn(
                            "p-2 transition-colors",
                            (isScrolled || pathname !== '/') ? "text-brand-charcoal" : "text-brand-ivory"
                        )}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={cn(
                "fixed inset-0 bg-brand-charcoal z-40 transition-transform duration-500 lg:hidden flex flex-col items-center justify-center space-y-8",
                isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            )}>
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                            "text-2xl font-serif font-bold text-brand-ivory hover:text-brand-gold transition-colors",
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
                    className={buttonVariants({ variant: 'gold', size: 'lg', className: 'mt-8' })}
                >
                    {t.nav.book}
                </Link>
            </div>
        </nav>
    );
};
