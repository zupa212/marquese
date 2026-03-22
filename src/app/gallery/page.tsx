import { Layout } from "@/components/Layout";
import Image from "next/image";
import { Section } from "@/components/Section";
import { Instagram, ThumbsUp } from "lucide-react";
import { buttonVariants } from "@/components/ui/Button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Γκαλερί Κουρεμάτων & Ανδρικής Περιποίησης Κηφισιά",
    description: "Δείτε φωτογραφίες από fade κουρέματα, παραδοσιακό ξύρισμα, beard grooming και τον premium χώρο του Marquise Barber Shop στην Κηφισιά.",
    openGraph: {
        title: "Gallery | Marquise Barber Shop Κηφισιά",
        description: "Fade, beard grooming, παραδοσιακό ξύρισμα — δείτε δείγματα δουλειάς μας.",
        url: "https://www.marquisebarbershop.gr/gallery",
    },
    twitter: {
        title: "Gallery | Marquise Barber Shop Κηφισιά",
        description: "Fade, beard grooming, παραδοσιακό ξύρισμα — δείτε δείγματα δουλειάς μας.",
    },
    alternates: {
        canonical: "https://www.marquisebarbershop.gr/gallery",
    },
};

export default function GalleryPage() {
    const images = [
        { src: "/images/gallery/apostolis.jpg", title: "Master Barber" },
        { src: "/images/gallery/aggelos.jpg", title: "Senior Barber" },
        { src: "/images/gallery/shop-1.jpg", title: "Shop Interior" },
        { src: "/images/gallery/shop-2.jpg", title: "Premium Style" },
        { src: "/images/gallery/shop-3.jpg", title: "Detailing" },
        { src: "/images/IMG_20260226_202229_00_041.jpg", title: "Marquise View" },
    ];

    return (
        <Layout>
            <div className="pt-32 pb-20 bg-brand-charcoal text-brand-ivory text-center">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 italic leading-tight">Κουρέματα & Ανδρική Περιποίηση — <br className="hidden md:block" /> Marquise Gallery</h1>
                    <p className="max-w-2xl mx-auto text-brand-ivory/60 text-lg uppercase tracking-widest">
                        Στιγμές στυλ και περιποίησης
                    </p>
                </div>
            </div>

            <Section rounded>
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {images.map((img, i) => (
                        <div key={i} className="relative group overflow-hidden rounded-[2rem] break-inside-avoid shadow-lg min-h-[100px]">
                            <Image
                                src={img.src}
                                alt={`Κούρεμα και περιποίηση ανδρών στην Κηφισιά: ${img.title} από το Marquise Barber Shop`}
                                width={800}
                                height={800}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                style={{ width: '100%', height: 'auto' }}
                                className="grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-brand-green/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center">
                                <h3 className="text-white font-serif text-2xl font-bold mb-2">{img.title}</h3>
                                <div className="w-12 h-[1px] bg-brand-gold mb-4"></div>
                                <Instagram className="text-white" size={24} />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <p className="text-brand-charcoal/60 mb-8 flex items-center justify-center italic">
                        <ThumbsUp className="mr-2 text-brand-gold" size={18} />
                        Ακολουθήστε μας στο Instagram για περισσότερα
                    </p>
                    <Link href="https://instagram.com" target="_blank" className={buttonVariants({ variant: 'outline' })}>
                        @marquise_barbershop
                    </Link>
                </div>
            </Section>
        </Layout>
    );
}
