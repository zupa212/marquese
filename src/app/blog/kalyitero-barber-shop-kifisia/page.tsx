import { Layout } from "@/components/Layout";
import { Section } from "@/components/Section";
import Link from "next/link";
import { Metadata } from "next";
import { BOOKING_URL, BUSINESS_INFO } from "@/lib/constants";
import { buttonVariants } from "@/components/ui/Button";
import { Calendar, Phone, Star, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Κουρείο Κηφισιά — Marquise Barber Shop | Premium Ανδρικό Μπαρμπέρικο",
    description: "Κουρείο στην Κηφισιά με 5.056+ κριτικές 5 αστέρια. Ανδρικά κουρέματα, fade, παραδοσιακό ξύρισμα, beard grooming, detox τριχωτού, παιδικά κουρέματα. Κλείστε ραντεβού online στο Marquise Barber Shop.",
    keywords: ["κουρείο Κηφισιά", "barber shop Κηφισιά", "μπαρμπέρικο Κηφισιά", "ανδρικό κούρεμα Κηφισιά", "κούρεμα Κηφισιά", "barbershop Kifisia", "barber Kifisia Athens", "κουρείο βόρεια προάστια", "μπαρμπέρικο βόρεια προάστια", "fade κούρεμα Κηφισιά", "taper fade Κηφισιά", "παραδοσιακό ξύρισμα Κηφισιά", "beard grooming Κηφισιά", "ξύρισμα με φάκα Κηφισιά", "ανδρική περιποίηση Κηφισιά", "κουρείο Μαρούσι", "barber shop Χαλάνδρι", "κουρείο Νέα Ερυθραία", "premium κουρείο Αθήνα", "ραντεβού κουρείο online", "eBarber Marquise", "Marquise Barber Shop"],
    openGraph: {
        title: "Κουρείο Κηφισιά | Marquise Barber Shop",
        description: "Premium ανδρικά κουρέματα, fade, beard grooming στην Κηφισιά. 5.056+ κριτικές 5 αστέρια.",
        url: "https://www.marquisebarbershop.gr/blog/kalyitero-barber-shop-kifisia",
    },
    twitter: {
        title: "Κουρείο Κηφισιά | Marquise Barber Shop",
        description: "Premium ανδρικά κουρέματα, fade, beard grooming στην Κηφισιά. 5.056+ κριτικές 5 αστέρια.",
    },
    alternates: {
        canonical: "https://www.marquisebarbershop.gr/blog/kalyitero-barber-shop-kifisia",
    },
};

export default function KalyteroBarberPage() {
    const faqData = [
        { question: "Ποιο είναι το καλύτερο barber shop στην Κηφισιά;", answer: "Το Marquise Barber Shop στην Παπαδιαμάντη 1 θεωρείται από τα κορυφαία κουρεία στα Βόρεια Προάστια, με 5.056+ κριτικές 5 αστέρια στο Google." },
        { question: "Τι υπηρεσίες προσφέρει το Marquise;", answer: "Ανδρικά κουρέματα (fade, classic, taper), παραδοσιακό ξύρισμα, beard grooming, detox τριχωτού, black mask, eye patches, παιδικά κουρέματα και premium combos." },
        { question: "Κάνετε online κρατήσεις;", answer: "Ναι! Μπορείτε να κλείσετε ραντεβού online μέσω eBarber ή τηλεφωνικά στο +30 21 0801 5009." },
        { question: "Πού βρίσκεται ακριβώς το Marquise;", answer: "Παπαδιαμάντη 1, Κηφισιά 14562. Εύκολη πρόσβαση από Μαρούσι, Χαλάνδρι, Ν. Ερυθραία, Εκάλη." },
    ];

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqData.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
        }))
    };

    return (
        <Layout>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <div className="pt-32 pb-20 bg-brand-charcoal text-brand-ivory relative overflow-hidden">
                <div className="absolute inset-0 brick-pattern opacity-5 pointer-events-none"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex items-center gap-2 text-brand-gold text-xs uppercase tracking-widest mb-6">
                        <Link href="/" className="hover:underline">Αρχική</Link>
                        <ChevronRight size={12} />
                        <Link href="/blog" className="hover:underline">Blog</Link>
                        <ChevronRight size={12} />
                        <span className="text-brand-ivory/60">Κουρείο Κηφισιά</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 italic leading-tight">
                        Κουρείο Κηφισιά<br className="hidden md:block" /> Marquise Barber Shop
                    </h1>
                    <p className="max-w-2xl text-brand-ivory/80 text-lg font-light leading-relaxed">
                        Αν ψάχνετε ένα premium <strong className="text-brand-gold">ανδρικό κουρείο</strong> στην Κηφισιά με εξαιρετικές κριτικές,
                        επαγγελματίες barbers και σύγχρονο χώρο — το <strong className="text-brand-gold">Marquise Barber Shop</strong> είναι η απάντηση.
                    </p>
                </div>
            </div>

            <Section rounded>
                <article className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-serif font-bold text-brand-charcoal mb-6">Γιατί το Marquise ξεχωρίζει στα Βόρεια Προάστια</h2>
                    <p className="text-brand-charcoal/70 leading-relaxed mb-6">
                        Με πάνω από <strong>5.056 κριτικές 5 αστέρια</strong> στο Google, το Marquise Barber Shop έχει καθιερωθεί ως ένας από τους κορυφαίους
                        προορισμούς ανδρικής περιποίησης στα <strong>Βόρεια Προάστια της Αθήνας</strong>.
                    </p>

                    <div className="bg-brand-green/5 p-8 rounded-[2rem] border border-brand-green/10 mb-10">
                        <h3 className="text-xl font-serif font-bold text-brand-green mb-4">✅ Τι μας κάνει ξεχωριστούς:</h3>
                        <ul className="space-y-3 text-brand-charcoal/70">
                            <li className="flex items-start gap-3"><Star size={16} className="text-brand-gold mt-1 flex-shrink-0" /><span><strong>16 εξειδικευμένες υπηρεσίες</strong> — από classic cuts μέχρι pre-wedding combos</span></li>
                            <li className="flex items-start gap-3"><Star size={16} className="text-brand-gold mt-1 flex-shrink-0" /><span><strong>Παραδοσιακό ξύρισμα με φάκα</strong> — ζεστές πετσέτες, premium προϊόντα</span></li>
                            <li className="flex items-start gap-3"><Star size={16} className="text-brand-gold mt-1 flex-shrink-0" /><span><strong>Online κρατήσεις</strong> μέσω eBarber — χωρίς αναμονή</span></li>
                            <li className="flex items-start gap-3"><Star size={16} className="text-brand-gold mt-1 flex-shrink-0" /><span><strong>Premium χώρος</strong> — σύγχρονη αισθητική, χαλαρωτική ατμόσφαιρα</span></li>
                            <li className="flex items-start gap-3"><Star size={16} className="text-brand-gold mt-1 flex-shrink-0" /><span><strong>Εξειδικευμένοι Master Barbers</strong> — Αποστόλης & Άγγελος</span></li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-brand-charcoal mb-6">Οι Υπηρεσίες μας</h2>
                    <p className="text-brand-charcoal/70 leading-relaxed mb-6">
                        Από <strong>ανδρικά κουρέματα</strong> (fade, taper, classic) μέχρι <strong>beard grooming</strong>, <strong>facial treatments</strong> (black mask, eye patches),
                        <strong> detox τριχωτού</strong> και <strong>παιδικά κουρέματα</strong> — καλύπτουμε κάθε ανάγκη ανδρικής περιποίησης.
                    </p>

                    <div className="bg-brand-charcoal/5 p-6 rounded-[1.5rem] mb-10">
                        <p className="text-sm text-brand-charcoal/50 italic">
                            <strong>In English:</strong> Looking for the best barber shop in Kifisia, Athens? Marquise Barber Shop offers premium gentleman&apos;s haircuts,
                            traditional shaves, beard grooming, and facial treatments. With 5,056+ five-star Google reviews and expert barbers,
                            book your appointment online today.
                        </p>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-brand-charcoal mb-6">Συχνές Ερωτήσεις</h2>
                    <div className="space-y-4 mb-12">
                        {faqData.map((faq, i) => (
                            <details key={i} className="bg-white border border-brand-charcoal/5 rounded-[1.5rem] p-6 group open:shadow-md transition-shadow">
                                <summary className="font-serif font-bold text-lg cursor-pointer list-none flex items-center justify-between text-brand-charcoal group-open:text-brand-green transition-colors">
                                    {faq.question}
                                    <ChevronRight size={18} className="group-open:rotate-90 transition-transform text-brand-gold" />
                                </summary>
                                <p className="mt-4 text-brand-charcoal/70 leading-relaxed">{faq.answer}</p>
                            </details>
                        ))}
                    </div>
                </article>

                <div className="mt-12 p-12 bg-brand-charcoal text-brand-ivory rounded-[2.5rem] text-center relative overflow-hidden">
                    <div className="absolute inset-0 brick-pattern opacity-10 pointer-events-none"></div>
                    <h2 className="text-3xl font-serif font-bold mb-4 relative z-10 italic">Κλείστε Ραντεβού Τώρα</h2>
                    <p className="text-brand-ivory/60 mb-8 relative z-10">Online ή τηλεφωνικά — εξυπηρέτηση χωρίς αναμονή.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                        <Link href={BOOKING_URL} className={buttonVariants({ variant: 'gold', size: 'lg' })}><Calendar className="mr-2" size={20} />Κράτηση Online</Link>
                        <a href={BUSINESS_INFO.phoneClick} className={buttonVariants({ variant: 'outline', size: 'lg', className: 'border-brand-ivory text-brand-ivory hover:bg-brand-ivory hover:text-brand-charcoal' })}><Phone className="mr-2" size={20} />{BUSINESS_INFO.phone}</a>
                    </div>
                </div>
            </Section>
        </Layout>
    );
}
