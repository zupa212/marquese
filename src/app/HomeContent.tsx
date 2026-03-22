"use client";

import { Layout } from "@/components/Layout";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { SignatureExperience } from "@/components/SignatureExperience";
import { TeamSection } from "@/components/TeamSection";
import { ParallaxDivider } from "@/components/ParallaxDivider";
import { VirtualTour } from "@/components/ui/360-viewer/VirtualTour";
import { SERVICES, BUSINESS_INFO, BOOKING_URL, GOOGLE_MAPS_EMBED_URL, GOOGLE_MAPS_URL } from "@/lib/constants";
import { buttonVariants } from "@/components/ui/Button";
import Link from "next/link";
import { Quote, Phone, MapPin, ExternalLink, Star } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { HorizontalGallery } from "@/components/HorizontalGallery";


export function HomeContent() {
    const { t, language } = useLanguage();
    const previewServices = SERVICES.slice(0, 4);

    return (
        <Layout>
            <Hero />

            {/* Services Preview - Rounded Island */}
            <Section id="services" rounded>
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-xl text-left">
                        <span className="text-brand-gold font-serif text-lg italic tracking-widest uppercase">{t.homepage.servicesLabel}</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-charcoal mt-2 mb-6">{t.homepage.servicesTitle}</h2>
                        <p className="text-brand-charcoal/60 text-lg leading-relaxed">
                            {t.homepage.servicesDesc}
                        </p>
                    </div>
                    <Link href="/services" className={buttonVariants({ variant: 'gold', size: 'lg' })}>
                        {t.homepage.servicesCta}
                    </Link>
                </div>

                <div className="flex overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar lg:grid lg:grid-cols-4 lg:gap-8 gap-6 -mx-6 px-6 lg:mx-0 lg:px-0">
                    {previewServices.map((service, index) => (
                        <div key={service.name} className="min-w-[80vw] sm:min-w-[45vw] lg:min-w-0 snap-center">
                            <ServiceCard
                                name={language === 'el' ? service.name : service.nameEn}
                                description={language === 'el' ? service.description : service.descriptionEn}
                                index={index}
                            />
                        </div>
                    ))}
                </div>
            </Section>

            {/* Diagonal Parallax Divider */}
            <ParallaxDivider imageSrc="/images/parallax-barber.jpg" />

            {/* 360 Virtual Tour */}
            <VirtualTour src="/images/IMG_20260226_202229_00_041.jpg" />

            {/* Signature Experiences - Dark Mode Island */}
            <Section dark id="signature" rounded>
                <div className="text-center mb-24">
                    <span className="text-brand-gold font-serif text-lg italic tracking-widest uppercase mb-4 block underline underline-offset-8 decoration-brand-gold/20">{t.homepage.signatureLabel}</span>
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-brand-ivory italic">{t.homepage.signatureTitle}</h2>
                </div>

                <div className="space-y-40">
                    <SignatureExperience
                        title={t.homepage.signatureShaveTitle}
                        description={t.homepage.signatureShaveDesc}
                        image="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1470&auto=format&fit=crop"
                    />

                    <SignatureExperience
                        title={t.homepage.signatureDetoxTitle}
                        description={t.homepage.signatureDetoxDesc}
                        image="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1470&auto=format&fit=crop"
                        reverse
                    />
                </div>
            </Section>

            {/* Team Section */}
            <TeamSection />


            {/* Gallery Section - Horizontal Smooth Scroll */}
            <div className="bg-brand-charcoal overflow-visible">
                <div className="text-center pt-24 pb-16 px-6">
                    <span className="text-brand-gold font-serif text-lg italic tracking-widest uppercase">{t.homepage.galleryLabel}</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-ivory mt-2 mb-4 italic">{t.homepage.galleryTitle}</h2>
                    <p className="text-brand-ivory/60">{t.homepage.galleryDesc}</p>
                </div>
                
                <HorizontalGallery />
            </div>

            {/* Reviews Teaser */}
            <Section id="reviews" dark rounded className="mb-20">
                <div className="flex flex-col items-center text-center mb-16">
                    <Quote className="text-brand-gold mb-6 opacity-30" size={64} />
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-brand-ivory italic">{t.homepage.reviewsTitle}</h2>
                    <div className="flex items-center space-x-2 mb-4">
                        {[1, 2, 3, 4, 5].map(i => <Star key={i} size={20} className="fill-brand-gold text-brand-gold" />)}
                    </div>
                    <p className="text-brand-gold font-bold tracking-[0.3em] text-sm uppercase">{t.homepage.reviewsQuality}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {[
                        { name: "Νίκος Π.", text: language === 'el' ? "Το καλύτερο κούρεμα στην περιοχή. Φοβερή προσοχή στη λεπτομέρεια και πολύ ευχάριστο περιβάλλον." : "The best haircut in the area. Amazing attention to detail and a very pleasant environment." },
                        { name: "Γιώργος Μ.", text: language === 'el' ? "Επαγγελματισμός στο έπακρο. Το παραδοσιακό ξύρισμα είναι μια εμπειρία που πρέπει να δοκιμάσετε." : "Professionalism at its finest. The traditional shave is an experience you must try." },
                        { name: "Αλέξανδρος Κ.", text: language === 'el' ? "Συνεπείς στα ραντεβού και πάντα με χαμόγελο. Ο χώρος είναι εξαιρετικός, πραγματικά premium." : "Always on time and always with a smile. The space is exceptional, truly premium." }
                    ].map((review, i) => (
                        <div key={i} className="bg-white/5 p-10 rounded-[2rem] border border-white/5 hover:border-brand-gold/30 transition-all duration-500 hover:translate-y-[-10px] shadow-lg">
                            <p className="italic text-brand-ivory/80 mb-8 leading-relaxed text-lg font-light">&ldquo;{review.text}&rdquo;</p>
                            <div className="flex items-center space-x-4">
                                <div className="h-[1px] w-8 bg-brand-gold"></div>
                                <p className="font-serif font-bold text-brand-gold uppercase tracking-widest text-xs">— {review.name}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Link href="/reviews" className={buttonVariants({ variant: 'gold', size: 'lg' })}>
                        {t.homepage.reviewsCta}
                    </Link>
                </div>
            </Section>

            {/* Location & Contact */}
            <Section id="location" rounded>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-10">
                        <div>
                            <span className="text-brand-green font-bold uppercase tracking-widest text-sm block mb-4">{t.homepage.locationLabel}</span>
                            <h2 className="text-4xl md:text-6xl font-serif font-bold text-brand-charcoal mb-6 leading-tight">{t.homepage.locationTitle} <span className="text-brand-green italic">{t.homepage.locationTitleHighlight}</span></h2>
                            <p className="text-brand-charcoal/60 text-lg leading-relaxed font-light">
                                {t.homepage.locationDesc}
                            </p>
                        </div>

                        <div className="space-y-8 bg-brand-green/5 p-10 rounded-[2.5rem] border border-brand-green/10">
                            <div className="flex items-start space-x-5">
                                <div className="w-12 h-12 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-green flex-shrink-0 animate-pulse">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold uppercase tracking-widest text-xs mb-2 text-brand-green">{t.homepage.locationAddress}</h4>
                                    <p className="text-brand-charcoal text-xl font-serif italic">{BUSINESS_INFO.address}</p>
                                    <a href={GOOGLE_MAPS_URL} target="_blank" className="text-brand-green text-sm font-bold hover:underline inline-block mt-2">{t.homepage.locationMaps}</a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-5">
                                <div className="w-12 h-12 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-green flex-shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold uppercase tracking-widest text-xs mb-2 text-brand-green">{t.homepage.locationPhone}</h4>
                                    <a href={BUSINESS_INFO.phoneClick} className="text-brand-charcoal text-2xl font-serif italic font-bold hover:text-brand-green transition-colors">{BUSINESS_INFO.phone}</a>
                                </div>
                            </div>
                        </div>

                        <Link
                            href={BOOKING_URL || BUSINESS_INFO.phoneClick}
                            className={buttonVariants({ variant: 'gold', size: 'lg', className: 'w-full shadow-2xl hover:scale-[1.02] transition-transform py-8 text-xl' })}
                        >
                            {t.homepage.locationCta}
                        </Link>
                    </div>

                    <div className="h-[600px] bg-brand-charcoal/5 rounded-[3rem] overflow-hidden border border-brand-charcoal/10 relative shadow-2xl group">
                        <iframe
                            src={GOOGLE_MAPS_EMBED_URL}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Marquise Barber Shop Location"
                            className="grayscale group-hover:grayscale-0 transition-all duration-1000"
                        ></iframe>
                    </div>
                </div>
            </Section>
        </Layout>
    );
}
