"use client";

import React from 'react';
import Link from 'next/link';
import { Phone, MapPin, Calendar } from 'lucide-react';
import { BUSINESS_INFO, BOOKING_URL, GOOGLE_MAPS_URL } from '@/lib/constants';
import { useTrackClick } from '@/hooks/useTrackClick';

export const StickyMobileBar = () => {
    const track = useTrackClick();

    return (
        <div className="md:hidden fixed bottom-6 left-6 right-6 z-50">
            <div className="bg-brand-charcoal/90 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10 flex items-center justify-around py-3 px-4">
                <Link
                    href={BUSINESS_INFO.phoneClick}
                    onClick={() => track('call', 'Mobile Sticky Bar')}
                    className="flex flex-col items-center justify-center text-brand-ivory space-y-1 group"
                >
                    <div className="p-2 rounded-full bg-white/5 group-active:bg-brand-gold group-active:text-brand-charcoal transition-all">
                        <Phone size={20} />
                    </div>
                    <span className="text-[10px] uppercase tracking-widest opacity-60 font-bold">Κλήση</span>
                </Link>

                <div className="h-8 w-[1px] bg-white/10"></div>

                <Link
                    href={BOOKING_URL || BUSINESS_INFO.phoneClick}
                    onClick={() => track('booking', 'Mobile Sticky Bar')}
                    className="flex flex-col items-center justify-center space-y-1 group"
                >
                    <div className="p-3 bg-brand-gold rounded-full text-brand-charcoal shadow-lg shadow-brand-gold/20 -mt-8 scale-110 group-active:scale-95 transition-transform">
                        <Calendar size={24} />
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">Booking</span>
                </Link>

                <div className="h-8 w-[1px] bg-white/10"></div>

                <Link
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    onClick={() => track('directions', 'Mobile Sticky Bar')}
                    className="flex flex-col items-center justify-center text-brand-ivory space-y-1 group"
                >
                    <div className="p-2 rounded-full bg-white/5 group-active:bg-brand-gold group-active:text-brand-charcoal transition-all">
                        <MapPin size={20} />
                    </div>
                    <span className="text-[10px] uppercase tracking-widest opacity-60 font-bold">Οδηγίες</span>
                </Link>
            </div>
        </div>
    );
};
