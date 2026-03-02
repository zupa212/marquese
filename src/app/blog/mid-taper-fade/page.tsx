import { Layout } from "@/components/Layout";
import { Section } from "@/components/Section";
import Link from "next/link";
import { Metadata } from "next";
import { BOOKING_URL, BUSINESS_INFO } from "@/lib/constants";
import { buttonVariants } from "@/components/ui/Button";
import { Calendar, Phone, ChevronRight, Scissors } from "lucide-react";

export const metadata: Metadata = {
    title: "Mid Taper Fade — Τι Είναι & Γιατί Είναι Trend στην Κηφισιά",
    description: "Μάθετε τι είναι το mid taper fade κούρεμα, ποιες οι παραλλαγές του και γιατί κυριαρχεί στα trends. Δοκιμάστε το στο Marquise Barber Shop Κηφισιά.",
    keywords: ["mid taper fade", "taper fade κούρεμα", "fade κηφισιά", "ανδρικό κούρεμα fade", "fade haircut Athens", "low fade", "high fade", "skin fade"],
    openGraph: {
        title: "Mid Taper Fade — Τι Είναι | Marquise Barber Shop",
        description: "Ο οδηγός για κάθε fade: low, mid, high, skin. Δοκιμάστε το στο Marquise.",
        url: "https://www.marquisebarbershop.gr/blog/mid-taper-fade",
    },
    alternates: {
        canonical: "https://www.marquisebarbershop.gr/blog/mid-taper-fade",
    },
};

export default function MidTaperFadePage() {
    const faqData = [
        { question: "Τι είναι το mid taper fade;", answer: "Το mid taper fade είναι ένα ανδρικό κούρεμα όπου τα μαλλιά σταδιακά κοντεύουν (fade) στο ύψος του αυτιού, δημιουργώντας μια ομαλή μετάβαση. Είναι ο ιδανικός συνδυασμός: ούτε πολύ βαθύ (skin), ούτε πολύ ψηλό (high)." },
        { question: "Ποια η διαφορά μεταξύ low, mid και high fade;", answer: "Low fade: ξεκινά ακριβώς πάνω από το αυτί. Mid fade: ξεκινά στο ύψος του κροτάφου. High fade: ξεκινά πολύ ψηλά, σχεδόν στην κορυφή. Skin fade: πάει μέχρι το δέρμα." },
        { question: "Πόσο συχνά πρέπει να φτιάχνω το fade;", answer: "Για να διατηρήσετε καθαρές γραμμές, συνιστάται ραντεβού κάθε 2-3 εβδομάδες. Στο Marquise μπορείτε να κλείσετε online μέσω eBarber." },
        { question: "Ταιριάζει σε κάθε τύπο μαλλιών;", answer: "Ναι! Τα fade κουρέματα ταιριάζουν σε ίσια, σγουρά, πυκνά ή λεπτά μαλλιά. Ο barber σας θα προτείνει το κατάλληλο ύψος fade ανάλογα τη δομή των μαλλιών σας." },
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

            <div className="pt-32 pb-20 bg-brand-green text-brand-ivory relative overflow-hidden">
                <div className="absolute inset-0 brick-pattern opacity-5 pointer-events-none"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex items-center gap-2 text-brand-ivory/60 text-xs uppercase tracking-widest mb-6">
                        <Link href="/" className="hover:underline hover:text-brand-gold">Αρχική</Link>
                        <ChevronRight size={12} />
                        <Link href="/blog" className="hover:underline hover:text-brand-gold">Blog</Link>
                        <ChevronRight size={12} />
                        <span>Fade Κούρεμα</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 italic leading-tight">
                        Mid Taper Fade<br className="hidden md:block" /> Τι Είναι & Γιατί Κυριαρχεί
                    </h1>
                    <p className="max-w-2xl text-brand-ivory/80 text-lg font-light leading-relaxed">
                        Το <strong className="text-brand-gold">taper fade</strong> είναι αυτή τη στιγμή το πιο δημοφιλές ανδρικό κούρεμα παγκοσμίως.
                        Αν σας ενδιαφέρει ένα <strong className="text-brand-gold">καθαρό, μοντέρνο look</strong>, αυτός ο οδηγός εξηγεί τα πάντα.
                    </p>
                </div>
            </div>

            <Section rounded>
                <article className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-serif font-bold text-brand-charcoal mb-6">Τι ακριβώς είναι το Taper Fade;</h2>
                    <p className="text-brand-charcoal/70 leading-relaxed mb-6">
                        Ο όρος <strong>&quot;taper&quot;</strong> σημαίνει σταδιακή μείωση μήκους — τα μαλλιά &quot;σβήνουν&quot; ομαλά από μακριά (πάνω) σε κοντά (κάτω).
                        Ο όρος <strong>&quot;fade&quot;</strong> αφορά ακριβώς πόσο κοντά πάνε στο τέλος — μέχρι και δέρμα (skin fade).
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                        {[
                            { name: "Low Fade", desc: "Σβήνει ακριβώς πάνω από το αυτί. Subtle, κομψό, κατάλληλο για επαγγελματικό look." },
                            { name: "Mid Taper Fade", desc: "Σβήνει στο ύψος του κροτάφου. Ο πιο δημοφιλής τύπος — balanced & modern." },
                            { name: "High Fade", desc: "Σβήνει ψηλά, κοντά στην κορυφή. Bold, δυναμικό, eye-catching." },
                            { name: "Skin Fade", desc: "Πάει μέχρι το δέρμα. Ultra-clean lines, χρειάζεται συντήρηση κάθε 2 εβδομάδες." },
                        ].map(fade => (
                            <div key={fade.name} className="bg-brand-green/5 p-6 rounded-[1.5rem] border border-brand-green/10">
                                <div className="flex items-center gap-2 mb-3">
                                    <Scissors size={18} className="text-brand-green" />
                                    <h3 className="font-serif font-bold text-lg text-brand-charcoal">{fade.name}</h3>
                                </div>
                                <p className="text-brand-charcoal/60 text-sm">{fade.desc}</p>
                            </div>
                        ))}
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-brand-charcoal mb-6">Σε ποιον ταιριάζει το Mid Taper Fade;</h2>
                    <p className="text-brand-charcoal/70 leading-relaxed mb-6">
                        Το mid taper fade είναι <strong>εξαιρετικά ευέλικτο</strong>. Ταιριάζει σε:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-brand-charcoal/70 mb-10 pl-4">
                        <li>Ίσια, σγουρά ή σπαστά μαλλιά</li>
                        <li>Κάθε σχήμα προσώπου</li>
                        <li>Επαγγελματικό ή casual look</li>
                        <li>Συνδυάζεται τέλεια με γενειάδα (beard fade)</li>
                    </ul>

                    <div className="bg-brand-charcoal/5 p-6 rounded-[1.5rem] mb-10">
                        <p className="text-sm text-brand-charcoal/50 italic">
                            <strong>In English:</strong> The mid taper fade is the most popular men&apos;s haircut globally — a gradual blend from longer hair on top to shorter sides,
                            fading at temple height. Try it at Marquise Barber Shop in Kifisia, Athens. Book online via eBarber.
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

                <div className="mt-12 p-12 bg-brand-green text-brand-ivory rounded-[2.5rem] text-center relative overflow-hidden">
                    <div className="absolute inset-0 brick-pattern opacity-5 pointer-events-none"></div>
                    <h2 className="text-3xl font-serif font-bold mb-4 relative z-10 italic">Δοκιμάστε το Fade στο Marquise</h2>
                    <p className="text-brand-ivory/80 mb-8 relative z-10">Οι Master Barbers μας εξειδικεύονται σε κάθε τύπο fade.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                        <Link href={BOOKING_URL} className={buttonVariants({ variant: 'gold', size: 'lg' })}><Calendar className="mr-2" size={20} />Κράτηση Online</Link>
                        <a href={BUSINESS_INFO.phoneClick} className={buttonVariants({ variant: 'outline', size: 'lg', className: 'border-brand-ivory text-brand-ivory hover:bg-brand-ivory hover:text-brand-charcoal' })}><Phone className="mr-2" size={20} />{BUSINESS_INFO.phone}</a>
                    </div>
                </div>
            </Section>
        </Layout>
    );
}
