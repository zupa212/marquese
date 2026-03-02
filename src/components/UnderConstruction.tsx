"use client";

import Image from "next/image";
import { Scissors, Calendar, Phone } from "lucide-react";
import { BOOKING_URL, BUSINESS_INFO } from "@/lib/constants";
import { buttonVariants } from "@/components/ui/Button";
import Link from "next/link";

export const UnderConstruction = () => {
    return (
        <div className="min-h-screen bg-brand-charcoal flex flex-col items-center justify-center relative overflow-hidden text-brand-ivory">
            {/* Background Pattern */}
            <div className="absolute inset-0 brick-pattern opacity-5 pointer-events-none"></div>

            <div className="relative z-10 flex flex-col items-center text-center px-6">
                {/* Logo Section */}
                <div className="mb-12">
                    <div className="relative w-48 h-48 md:w-64 md:h-64 mb-8 mx-auto">
                        <Image
                            src="/images/logo.png"
                            alt="Marquise Barber Shop Logo"
                            fill
                            className="object-contain brightness-110"
                            priority
                        />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-[0.3em] uppercase italic text-brand-gold">
                        MARQUISE
                    </h1>
                </div>

                {/* Status Section */}
                <div className="max-w-xl space-y-8">
                    <div className="inline-flex items-center space-x-3 bg-brand-gold/10 border border-brand-gold/30 px-6 py-2 rounded-full mb-4">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-gold"></span>
                        </span>
                        <span className="text-brand-gold font-bold uppercase tracking-widest text-sm">
                            Under Construction
                        </span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-serif italic font-light leading-relaxed">
                        We are refining the premium experience for you.
                    </h2>

                    <div className="h-px w-24 bg-brand-gold/40 mx-auto"></div>

                    <p className="text-brand-ivory/60 text-lg font-light tracking-wide max-w-md mx-auto">
                        Our digital home is undergoing a 24-hour transformation.
                        We will be back shortly to serve you better.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                        <Link
                            href={BOOKING_URL}
                            className={buttonVariants({ variant: 'gold', size: 'lg', className: 'px-10 h-14' })}
                        >
                            <Calendar className="mr-2" size={20} />
                            ΚΛΕΙΣΕ ΚΟΥΡΕΜΑ
                        </Link>
                        <a
                            href={BUSINESS_INFO.phoneClick}
                            className={buttonVariants({ variant: 'outline', size: 'lg', className: 'border-brand-ivory text-brand-ivory hover:bg-brand-ivory hover:text-brand-charcoal h-14' })}
                        >
                            <Phone className="mr-2" size={20} />
                            {BUSINESS_INFO.phone}
                        </a>
                    </div>

                    <p className="text-brand-gold font-serif italic text-xl mt-8">
                        The Art of Modern Barbering.
                    </p>
                </div>

                {/* Scissors Icon */}
                <div className="mt-16 opacity-20">
                    <Scissors className="text-brand-gold animate-bounce" size={48} strokeWidth={1} />
                </div>
            </div>

            {/* Footer info */}
            <div className="absolute bottom-8 text-brand-ivory/30 text-xs uppercase tracking-[0.5em] font-light">
                © 2026 Marquise Barber Shop
            </div>
        </div>
    );
};
