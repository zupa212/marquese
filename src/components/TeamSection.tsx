"use client";

import Image from "next/image";
import { useLanguage } from "@/hooks/useLanguage";
import { Section } from "./Section";

export const TeamSection = () => {
    const { t } = useLanguage();

    const barbers = [
        {
            id: "apostolis",
            ...t.team.barbers.apostolis,
            image: "/images/barbers/apostolis.jpg", // Needs placeholder
        },
        {
            id: "aggelos",
            ...t.team.barbers.aggelos,
            image: "/images/barbers/aggelos.jpg", // Needs placeholder
        }
    ];

    return (
        <Section className="bg-brand-charcoal text-white" rounded>
            <div className="absolute inset-0 brick-pattern opacity-[0.03] pointer-events-none"></div>
            <div className="text-center mb-20 relative z-10">
                <span className="text-brand-gold font-bold uppercase tracking-[0.3em] text-sm block mb-4">
                    {t.team.subtitle}
                </span>
                <h2 className="text-4xl md:text-6xl font-serif font-bold italic">
                    {t.team.title}
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 relative z-10 max-w-5xl mx-auto">
                {barbers.map((barber) => (
                    <div key={barber.id} className="group cursor-pointer">
                        <div className="relative aspect-[3/4] rounded-t-[3rem] overflow-hidden mb-8 border border-white/5 group-hover:border-brand-gold/30 transition-colors">
                            <div className="absolute inset-0 bg-brand-charcoal flex items-center justify-center">
                                {/* Fallback if no image yet */}
                                <span className="font-serif text-6xl text-brand-ivory/10 italic">{barber.name[0]}</span>
                            </div>
                            <Image
                                src={barber.image}
                                alt={barber.name}
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-0 group-hover:opacity-100" // We hide it until user uploads real images to avoid broken link icons, revealing true color on hover
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none'; // Hide broken image wrapper respectfully
                                }}
                            />
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent"></div>

                            <div className="absolute inset-x-0 bottom-6 px-8 flex justify-between items-end">
                                <div>
                                    <h3 className="text-3xl font-serif font-bold text-white mb-1 group-hover:text-brand-gold transition-colors">{barber.name}</h3>
                                    <p className="text-brand-gold/80 text-sm font-medium tracking-widest uppercase">{barber.role}</p>
                                </div>
                            </div>
                        </div>
                        <div className="px-4">
                            <p className="text-white/60 font-light leading-relaxed text-center group-hover:text-white/90 transition-colors">
                                {barber.bio}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};
