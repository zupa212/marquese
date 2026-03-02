"use client";

import { Layout } from "@/components/Layout";
import { Section } from "@/components/Section";
import { SERVICES, SERVICE_CATEGORIES, BOOKING_URL, BUSINESS_INFO } from "@/lib/constants";
import { buttonVariants } from "@/components/ui/Button";
import Link from "next/link";
import { Scissors, Check } from "lucide-react";
import { useTrackClick } from "@/hooks/useTrackClick";
import { useLanguage } from "@/hooks/useLanguage";

const categoryOrder = ["haircuts", "beard", "facial", "combos"] as const;

export function ServicesContent() {
    const track = useTrackClick();
    const { t, language } = useLanguage();

    const grouped = categoryOrder.map(cat => ({
        key: cat,
        label: language === 'el' ? SERVICE_CATEGORIES[cat].el : SERVICE_CATEGORIES[cat].en,
        services: SERVICES.filter(s => s.category === cat),
    }));

    return (
        <Layout>
            <div className="pt-32 pb-20 bg-brand-green text-brand-ivory text-center relative overflow-hidden">
                <div className="absolute inset-0 brick-pattern opacity-5 pointer-events-none"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 italic leading-tight">
                        {t.servicesPage.title}
                    </h1>
                    <p className="max-w-2xl mx-auto text-brand-ivory/80 text-lg">
                        {t.servicesPage.description}
                    </p>
                </div>
            </div>

            <Section rounded>
                {grouped.map((group) => (
                    <div key={group.key} className="mb-20 last:mb-0">
                        <h2 className="text-3xl font-serif font-bold text-brand-charcoal mb-10 border-b border-brand-charcoal/10 pb-4">
                            {group.label}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {group.services.map((service) => (
                                <div
                                    key={service.name}
                                    className="group p-8 bg-white border border-brand-charcoal/5 rounded-sm hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                                    onClick={() => track('service', service.name, { serviceName: service.name })}
                                >
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="w-12 h-12 rounded-full bg-brand-green/5 text-brand-green flex items-center justify-center">
                                            <Scissors size={24} />
                                        </div>
                                        <div className="h-px flex-grow bg-brand-gold/20 mx-4 mt-6"></div>
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold mb-4">
                                        {language === 'el' ? service.name : service.nameEn}
                                    </h3>
                                    <p className="text-brand-charcoal/60 text-sm leading-relaxed mb-8">
                                        {language === 'el' ? service.description : service.descriptionEn}
                                    </p>
                                    <ul className="space-y-3 mb-8">
                                        <li className="flex items-center text-xs text-brand-green font-bold uppercase tracking-widest">
                                            <Check size={14} className="mr-2" /> {language === 'el' ? 'Premium Προϊόντα' : 'Premium Products'}
                                        </li>
                                        <li className="flex items-center text-xs text-brand-green font-bold uppercase tracking-widest">
                                            <Check size={14} className="mr-2" /> {language === 'el' ? 'Εξειδικευμένο Προσωπικό' : 'Expert Staff'}
                                        </li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                <div className="mt-24 p-12 bg-brand-charcoal text-brand-ivory rounded-sm text-center relative overflow-hidden">
                    <div className="absolute inset-0 brick-pattern opacity-10 pointer-events-none"></div>
                    <h2 className="text-3xl font-serif font-bold mb-6 relative z-10">
                        {t.servicesPage.ready}
                    </h2>
                    <Link
                        href={BOOKING_URL || BUSINESS_INFO.phoneClick}
                        onClick={() => track('booking', 'Services Bottom CTA')}
                        className={buttonVariants({ variant: 'gold', size: 'lg', className: 'relative z-10' })}
                    >
                        {BOOKING_URL ? t.servicesPage.cta : t.servicesPage.ctaPhone}
                    </Link>
                </div>
            </Section>
        </Layout>
    );
}
