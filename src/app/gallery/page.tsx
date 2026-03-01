import { Layout } from "@/components/Layout";
import { Section } from "@/components/Section";
import { ExternalLink, Instagram, ThumbsUp } from "lucide-react";
import { buttonVariants } from "@/components/ui/Button";
import Link from "next/link";

export const metadata = {
    title: "Γκαλερί | Marquise Barber Shop",
    description: "Δείτε φωτογραφίες από το χώρο μας και τις δουλειές μας στην Κηφισιά.",
};

export default function GalleryPage() {
    const images = [
        { src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1471&auto=format&fit=crop", title: "Premium Cuts" },
        { src: "https://images.unsplash.com/photo-1599351431247-f132f017154c?q=80&w=687&auto=format&fit=crop", title: "Detail Work" },
        { src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1470&auto=format&fit=crop", title: "Traditional Shave" },
        { src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1470&auto=format&fit=crop", title: "Hair Treatment" },
        { src: "https://images.unsplash.com/photo-1622286332308-0d74622cd2aa?q=80&w=1470&auto=format&fit=crop", title: "Modern Style" },
        { src: "https://images.unsplash.com/photo-1593702275687-f8b402bf1fb5?q=80&w=1470&auto=format&fit=crop", title: "Beard Care" },
    ];

    return (
        <Layout>
            <div className="pt-32 pb-20 bg-brand-charcoal text-brand-ivory text-center">
                <div className="container mx-auto px-6">
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 italic">Γκαλερί</h1>
                    <p className="max-w-2xl mx-auto text-brand-ivory/60 text-lg uppercase tracking-widest">
                        Στιγμές στυλ και περιποίησης
                    </p>
                </div>
            </div>

            <Section>
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {images.map((img, i) => (
                        <div key={i} className="relative group overflow-hidden rounded-sm break-inside-avoid">
                            <img
                                src={img.src}
                                alt={img.title}
                                className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-110"
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
