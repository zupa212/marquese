"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { buttonVariants } from './ui/Button';
import { BUSINESS_INFO, BOOKING_URL } from '@/lib/constants';
import { cn } from '@/lib/utils';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Αρχική', href: '/' },
        { name: 'Υπηρεσίες', href: '/services' },
        { name: 'Γκαλερί', href: '/gallery' },
        { name: 'Κριτικές', href: '/reviews' },
        { name: 'Επικοινωνία', href: '/contact' },
    ];

    return (
        <nav className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
            scrolled ? "bg-brand-ivory/95 shadow-md py-3" : "bg-transparent py-5"
        )}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="flex flex-col">
                    <span className="text-2xl md:text-3xl font-serif font-bold tracking-tighter leading-none text-brand-green">
                        MARQUISE
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.3em] font-sans text-brand-gold font-bold">
                        Barber Shop
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "text-sm uppercase tracking-widest font-medium transition-colors hover:text-brand-gold",
                                pathname === link.href ? "text-brand-gold" : "text-brand-charcoal"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href={BOOKING_URL || BUSINESS_INFO.phoneClick}
                        className={buttonVariants({ variant: 'gold', size: 'sm', className: 'ml-4' })}
                    >
                        {BOOKING_URL ? "BOOK ONLINE" : "ΚΛΗΣΗ"}
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-brand-charcoal" onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={cn(
                "fixed inset-0 bg-brand-ivory z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 ease-in-out md:hidden",
                isOpen ? "translate-x-0" : "translate-x-full"
            )}>
                <button className="absolute top-6 right-6 text-brand-charcoal" onClick={() => setIsOpen(false)} aria-label="Close menu">
                    <X size={32} />
                </button>
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                            "text-2xl uppercase tracking-[0.2em] font-serif font-bold",
                            pathname === link.href ? "text-brand-gold" : "text-brand-charcoal"
                        )}
                    >
                        {link.name}
                    </Link>
                ))}
                <div className="pt-8">
                    <Link
                        href={BOOKING_URL || BUSINESS_INFO.phoneClick}
                        onClick={() => setIsOpen(false)}
                        className={buttonVariants({ variant: 'gold', size: 'lg', className: 'w-64' })}
                    >
                        {BOOKING_URL ? "BOOK ONLINE" : "ΚΛΗΣΗ"}
                    </Link>
                </div>
            </div>
        </nav>
    );
};
