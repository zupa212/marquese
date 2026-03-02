import { Layout } from "@/components/Layout";
import { Section } from "@/components/Section";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, Calendar } from "lucide-react";

export const metadata: Metadata = {
    title: "Blog — Συμβουλές Ανδρικής Περιποίησης Κηφισιά",
    description: "Άρθρα, συμβουλές και οδηγοί για ανδρικά κουρέματα, beard care, fade και παιδικά κουρέματα από το Marquise Barber Shop Κηφισιά.",
    openGraph: {
        title: "Blog | Marquise Barber Shop",
        description: "Οδηγοί και συμβουλές ανδρικής περιποίησης από τους experts του Marquise.",
        url: "https://www.marquisebarbershop.gr/blog",
    },
    alternates: {
        canonical: "https://www.marquisebarbershop.gr/blog",
    },
};

const BLOG_POSTS = [
    {
        slug: "kalyitero-barber-shop-kifisia",
        title: "Κουρείο Κηφισιά — Marquise Barber Shop",
        excerpt: "Κουρείο στην Κηφισιά με 5.056+ κριτικές 5 αστέρια. Ανδρικά κουρέματα, fade, παραδοσιακό ξύρισμα, beard grooming, premium χώρος.",
        date: "2026-03-02",
        readTime: "4 λεπτά",
    },
    {
        slug: "mid-taper-fade",
        title: "Mid Taper Fade — Τι Είναι & Γιατί Είναι Trend",
        excerpt: "Ο πλήρης οδηγός για κάθε τύπο fade: low, mid, high, skin. Μάθετε ποιο ταιριάζει στο δικό σας στυλ.",
        date: "2026-03-02",
        readTime: "5 λεπτά",
    },
    {
        slug: "paradosiako-xyrisma",
        title: "Παραδοσιακό Ξύρισμα με Φάκα — Η Εμπειρία",
        excerpt: "Ζεστές πετσέτες, αφρός με πινέλο, straight razor — βήμα βήμα η τελετουργία του αυθεντικού ξυρίσματος.",
        date: "2026-03-02",
        readTime: "4 λεπτά",
    },
    {
        slug: "paidiko-kourema-kifisia",
        title: "Παιδικό Κούρεμα Κηφισιά & Βόρεια Προάστια",
        excerpt: "Ψάχνετε παιδικό κούρεμα στην Κηφισιά; Μάθετε γιατί το Marquise είναι η ιδανική επιλογή για τους μικρούς μας φίλους.",
        date: "2026-03-01",
        readTime: "3 λεπτά",
    },
];

export default function BlogPage() {
    return (
        <Layout>
            <div className="pt-32 pb-20 bg-brand-green text-brand-ivory text-center relative overflow-hidden">
                <div className="absolute inset-0 brick-pattern opacity-5 pointer-events-none"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 italic">Blog — Marquise Barber Shop</h1>
                    <p className="max-w-2xl mx-auto text-brand-ivory/80 text-lg">
                        Συμβουλές, trends και οδηγοί ανδρικής περιποίησης από τους experts μας στην Κηφισιά.
                    </p>
                </div>
            </div>

            <Section rounded>
                <div className="max-w-3xl mx-auto space-y-8">
                    {BLOG_POSTS.map(post => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="block group bg-white border border-brand-charcoal/5 p-8 rounded-[2rem] hover:shadow-xl hover:border-brand-gold/30 transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="flex items-center gap-4 mb-4 text-xs text-brand-charcoal/40 uppercase tracking-widest">
                                <span className="flex items-center gap-1">
                                    <Calendar size={12} /> {post.date}
                                </span>
                                <span>•</span>
                                <span>{post.readTime}</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-charcoal group-hover:text-brand-green transition-colors mb-3">
                                {post.title}
                            </h2>
                            <p className="text-brand-charcoal/60 mb-6">{post.excerpt}</p>
                            <span className="inline-flex items-center gap-2 text-brand-green font-bold text-sm uppercase tracking-widest group-hover:gap-4 transition-all">
                                Διαβάστε Περισσότερα <ArrowRight size={16} />
                            </span>
                        </Link>
                    ))}
                </div>
            </Section>
        </Layout>
    );
}
