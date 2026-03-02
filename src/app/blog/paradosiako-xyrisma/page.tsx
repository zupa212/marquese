import { Layout } from "@/components/Layout";
import { Section } from "@/components/Section";
import Link from "next/link";
import { Metadata } from "next";
import { BOOKING_URL, BUSINESS_INFO } from "@/lib/constants";
import { buttonVariants } from "@/components/ui/Button";
import { Calendar, Phone, ChevronRight, Star } from "lucide-react";

export const metadata: Metadata = {
    title: "Παραδοσιακό Ξύρισμα με Φάκα — Η Εμπειρία στο Marquise Κηφισιά",
    description: "Ζήστε την αυθεντική εμπειρία παραδοσιακού ξυρίσματος με φάκα, ζεστές πετσέτες και premium aftershave στο Marquise Barber Shop Κηφισιά. Κλείστε ραντεβού online.",
    keywords: ["παραδοσιακό ξύρισμα", "ξύρισμα με φάκα", "traditional shave Athens", "hot towel shave Kifisia", "straight razor shave", "ξύρισμα Κηφισιά"],
    openGraph: {
        title: "Παραδοσιακό Ξύρισμα με Φάκα | Marquise Barber Shop",
        description: "Ζεστές πετσέτες, φάκα, premium aftershave — η αυθεντική εμπειρία barbershop.",
        url: "https://www.marquisebarbershop.gr/blog/paradosiako-xyrisma",
    },
    alternates: {
        canonical: "https://www.marquisebarbershop.gr/blog/paradosiako-xyrisma",
    },
};

export default function ParadosiakoXyrismaPage() {
    const faqData = [
        { question: "Τι περιλαμβάνει το παραδοσιακό ξύρισμα;", answer: "Ζεστές πετσέτες για άνοιγμα πόρων, αφρός με πινέλο ασβεστίου, ξύρισμα με cut-throat razor (φάκα), κρύα πετσέτα για κλείσιμο πόρων και premium aftershave balm." },
        { question: "Είναι ασφαλές το ξύρισμα με φάκα;", answer: "Απόλυτα. Οι barbers μας χρησιμοποιούν αποστειρωμένα, μιας χρήσης ξυράφια τύπου shavette. Η εμπειρία τους εξασφαλίζει ακρίβεια και ασφάλεια." },
        { question: "Πόσο κοστίζει και πόσο διαρκεί;", answer: "Το παραδοσιακό ξύρισμα διαρκεί περίπου 30 λεπτά. Για την τιμή, δείτε τον κατάλογο υπηρεσιών μας ή κλείστε ραντεβού μέσω eBarber." },
        { question: "Μπορώ να κάνω κούρεμα και ξύρισμα μαζί;", answer: "Ναι! Το Premium Combo (Κούρεμα & Παραδοσιακό Ξύρισμα) είναι η κορυφαία επιλογή — ο πλήρης gentleman πακέτο σε 50 λεπτά." },
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
                        <span className="text-brand-ivory/60">Παραδοσιακό Ξύρισμα</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 italic leading-tight">
                        Παραδοσιακό Ξύρισμα<br className="hidden md:block" /> με Φάκα στην Κηφισιά
                    </h1>
                    <p className="max-w-2xl text-brand-ivory/80 text-lg font-light leading-relaxed">
                        Μια εμπειρία που ξεπερνά το απλό ξύρισμα. Ζεστές πετσέτες, αφρός με πινέλο, φάκα —
                        ζήστε τον <strong className="text-brand-gold">αυθεντικό τρόπο</strong> που ξυριζόταν ο σύγχρονος gentleman.
                    </p>
                </div>
            </div>

            <Section rounded>
                <article className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-serif font-bold text-brand-charcoal mb-6">Η Τελετουργία του Ξυρίσματος</h2>
                    <p className="text-brand-charcoal/70 leading-relaxed mb-8">
                        Στο <strong>Marquise Barber Shop</strong>, το παραδοσιακό ξύρισμα δεν είναι απλά μια υπηρεσία — είναι μια <em>ιεροτελεστία</em>.
                        Κάθε βήμα έχει σχεδιαστεί για να σας χαρίσει αίσθηση φρεσκάδας και χαλάρωσης.
                    </p>

                    <div className="space-y-6 mb-10">
                        {[
                            { step: "01", title: "Ζεστή Πετσέτα", desc: "Ατμός που ανοίγει τους πόρους και μαλακώνει τα γένια — η τέλεια προετοιμασία." },
                            { step: "02", title: "Αφρός με Πινέλο", desc: "Premium σαπούνι ξυρίσματος, χτυπημένο σε πηχτό αφρό και εφαρμοσμένο με πινέλο ασβεστίου." },
                            { step: "03", title: "Ξύρισμα με Φάκα", desc: "Ακριβές, μεθοδικό περέσμα με straight razor — κόβει κοντά στο δέρμα χωρίς ερεθισμό." },
                            { step: "04", title: "Κρύα Πετσέτα & Aftershave", desc: "Κλείσιμο πόρων, ενυδάτωση και premium aftershave balm για αίσθηση silk." },
                        ].map(item => (
                            <div key={item.step} className="flex gap-6 items-start group">
                                <div className="w-14 h-14 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center flex-shrink-0 font-serif font-bold text-xl group-hover:bg-brand-green group-hover:text-white transition-colors">
                                    {item.step}
                                </div>
                                <div>
                                    <h3 className="font-serif font-bold text-xl text-brand-charcoal mb-1">{item.title}</h3>
                                    <p className="text-brand-charcoal/60">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-brand-green/5 p-8 rounded-[2rem] border border-brand-green/10 mb-10">
                        <h3 className="text-xl font-serif font-bold text-brand-green mb-4">💡 Pro Tip από τους Barbers μας</h3>
                        <p className="text-brand-charcoal/70">
                            Για το <strong>τέλειο αποτέλεσμα</strong>, δοκιμάστε το <em>Premium Combo</em>: κούρεμα + παραδοσιακό ξύρισμα σε ένα ραντεβού.
                            Η πλήρης gentleman εμπειρία ολοκληρώνεται σε 50 λεπτά.
                        </p>
                    </div>

                    <div className="bg-brand-charcoal/5 p-6 rounded-[1.5rem] mb-10">
                        <p className="text-sm text-brand-charcoal/50 italic">
                            <strong>In English:</strong> Experience a traditional straight razor shave at Marquise Barber Shop, Kifisia.
                            Our ritual includes hot towels, premium lather with a badger brush, precise straight razor work, and cooling aftershave balm.
                            Book the Premium Combo (haircut + shave) for the ultimate gentleman&apos;s experience.
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
                    <h2 className="text-3xl font-serif font-bold mb-4 relative z-10 italic">Ζήστε την Εμπειρία</h2>
                    <p className="text-brand-ivory/60 mb-8 relative z-10">Κλείστε ραντεβού για παραδοσιακό ξύρισμα στο Marquise.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                        <Link href={BOOKING_URL} className={buttonVariants({ variant: 'gold', size: 'lg' })}><Calendar className="mr-2" size={20} />Κράτηση Online</Link>
                        <a href={BUSINESS_INFO.phoneClick} className={buttonVariants({ variant: 'outline', size: 'lg', className: 'border-brand-ivory text-brand-ivory hover:bg-brand-ivory hover:text-brand-charcoal' })}><Phone className="mr-2" size={20} />{BUSINESS_INFO.phone}</a>
                    </div>
                </div>
            </Section>
        </Layout>
    );
}
