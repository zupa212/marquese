"use client";

import { usePathname } from 'next/navigation';

export const useTrackClick = () => {
    const pathname = usePathname();

    const track = async (category: 'booking' | 'call' | 'directions', label: string) => {
        try {
            await fetch('/api/track', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    category,
                    label,
                    page: pathname,
                }),
            });
        } catch (error) {
            console.error('Tracking failed:', error);
        }
    };

    return track;
};
