import { Layout } from "@/components/Layout";
import { Section } from "@/components/Section";
import Link from "next/link";
import { Metadata } from "next";
import { BOOKING_URL, BUSINESS_INFO } from "@/lib/constants";
import { buttonVariants } from "@/components/ui/Button";
import { MapPin, Calendar, Phone, Star, ChevronRight, Clock } from "lucide-react";

export const metadata: Metadata = {
    title: "Παιδικό Κούρεμα Κηφισιά & Βόρεια Προάστια — Marquise Barber Shop",
    description: "Ψάχνετε παιδικό κούρεμα στην Κηφισιά ή τα Βόρεια Προάστια; Στο Marquise Barber Shop προσφέρουμε φιλικό, premium παιδικό κούρεμα για αγόρια έως 12 ετών. Κλείστε ραντεβού online.",
    keywords: ["παιδικό κούρεμα Κηφισιά", "παιδικό κούρεμα βόρεια προάστια", "κούρεμα παιδιού Κηφισιά", "kids haircut Kifisia", "παιδικό μπαρμπέρικο", "κούρεμα αγοριών"],
    openGraph: {
        title: "Παιδικό Κούρεμα Κηφισιά & Βόρεια Προάστια | Marquise",
        description: "Premium παιδικό κούρεμα για αγόρια έως 12 ετών στο Marquise Barber Shop, Κηφισιά. Φιλική ατμόσφαιρα, εξειδικευμένοι barbers.",
        url: "https://www.marquisebarbershop.gr/blog/paidiko-kourema-kifisia",
    },
    twitter: {
        title: "Παιδικό Κούρεμα Κηφισιά & Βόρεια Προάστια | Marquise",
        description: "Premium παιδικό κούρεμα για αγόρια έως 12 ετών στο Marquise Barber Shop, Κηφισιά.",
    },
    alternates: {
        canonical: "https://www.marquisebarbershop.gr/blog/paidiko-kourema-kifisia",
    },
};

export default function PaidikoKouremaPage() {
    const faqData = [
        {
            question: "Κάνετε παιδικά κουρέματα στην Κηφισιά;",
            answer: "Ναι! Στο Marquise Barber Shop στην Κηφισιά προσφέρουμε εξειδικευμένο παιδικό κούρεμα (Little Gent's Cut) για αγόρια έως 12 ετών. Η τιμή είναι 18€ και η διάρκεια περίπου 20 λεπτά."
        },
        {
            question: "Πόσο κοστίζει το παιδικό κούρεμα;",
            answer: "Το παιδικό κούρεμα (Little Gent's Cut) κοστίζει 18€ και διαρκεί περίπου 20 λεπτά. Περιλαμβάνει premium προϊόντα και φιλική εξυπηρέτηση."
        },
        {
            question: "Χρειάζεται ραντεβού για παιδικό κούρεμα;",
            answer: "Συστήνουμε να κλείσετε ραντεβού online μέσω του eBarber ή τηλεφωνικά στο +30 21 0801 5009 για να αποφύγετε αναμονή."
        },
        {
            question: "Από ποια ηλικία δέχεστε παιδιά;",
            answer: "Δεχόμαστε παιδιά κάθε ηλικίας, αρκεί να μπορούν να καθίσουν στην καρέκλα. Η υπηρεσία Little Gent's Cut είναι σχεδιασμένη για αγόρια έως 12 ετών."
        },
        {
            question: "Πού βρίσκεται το κουρείο σας;",
            answer: "Βρισκόμαστε στην Παπαδιαμάντη 1, Κηφισιά 14562. Εύκολη πρόσβαση από όλα τα Βόρεια Προάστια (Μαρούσι, Χαλάνδρι, Ν. Ερυθραία, Εκάλη, Πεντέλη)."
        },
    ];

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqData.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <Layout>
            {/* FAQ Schema for LLM SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* Hero */}
            <div className="pt-32 pb-20 bg-brand-charcoal text-brand-ivory relative overflow-hidden">
                <div className="absolute inset-0 brick-pattern opacity-5 pointer-events-none"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex items-center gap-2 text-brand-gold text-xs uppercase tracking-widest mb-6">
                        <Link href="/" className="hover:underline">Αρχική</Link>
                        <ChevronRight size={12} />
                        <Link href="/blog" className="hover:underline">Blog</Link>
                        <ChevronRight size={12} />
                        <span className="text-brand-ivory/60">Παιδικό Κούρεμα</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 italic leading-tight">
                        Παιδικό Κούρεμα στην Κηφισιά<br className="hidden md:block" /> & τα Βόρεια Προάστια
                    </h1>
                    <p className="max-w-2xl text-brand-ivory/80 text-lg font-light leading-relaxed">
                        Ψάχνετε ένα αξιόπιστο, φιλικό κουρείο για το παιδί σας; Στο <strong className="text-brand-gold">Marquise Barber Shop</strong> στην Κηφισιά,
                        κάνουμε το πρώτο (ή το εκατοστό!) κούρεμα του μικρού σας μια premium εμπειρία.
                    </p>
                </div>
            </div>

            {/* Article Content */}
            <Section rounded>
                <article className="max-w-3xl mx-auto prose prose-lg">
                    <h2 className="text-3xl font-serif font-bold text-brand-charcoal mb-6">Γιατί να επιλέξετε το Marquise για παιδικό κούρεμα;</h2>

                    <p className="text-brand-charcoal/70 leading-relaxed mb-8">
                        Το παιδικό κούρεμα δεν είναι απλά μια "μικρή" εκδοχή ενός ανδρικού κουρέματος. Χρειάζεται ιδιαίτερη προσέγγιση, υπομονή και — πάνω απ' όλα — ένας barber που ξέρει πώς να κάνει το παιδί σας να αισθάνεται άνετα.
                    </p>

                    <p className="text-brand-charcoal/70 leading-relaxed mb-8">
                        Στο <strong>Marquise Barber Shop</strong>, στην <strong>Παπαδιαμάντη 1 στην Κηφισιά</strong>,
                        η υπηρεσία <em>&quot;Little Gent&apos;s Cut&quot;</em> σχεδιάστηκε ειδικά για αγόρια έως 12 ετών.
                        Με τιμή μόλις <strong>18€</strong> και διάρκεια <strong>20 λεπτά</strong>,
                        το παιδί σας θα ζήσει μια γρήγορη, ευχάριστη εμπειρία χωρίς άγχος.
                    </p>

                    <div className="bg-brand-green/5 p-8 rounded-[2rem] border border-brand-green/10 mb-10">
                        <h3 className="text-xl font-serif font-bold text-brand-green mb-4">✂️ Little Gent&apos;s Cut — Τι περιλαμβάνει:</h3>
                        <ul className="space-y-3 text-brand-charcoal/70">
                            <li className="flex items-start gap-3">
                                <Star size={16} className="text-brand-gold mt-1 flex-shrink-0" />
                                <span>Κούρεμα με χαλαρή, παιχνιδιάρικη ατμόσφαιρα</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Star size={16} className="text-brand-gold mt-1 flex-shrink-0" />
                                <span>Premium προϊόντα περιποίησης, κατάλληλα για παιδικό δέρμα</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Star size={16} className="text-brand-gold mt-1 flex-shrink-0" />
                                <span>Εξειδικευμένοι barbers με εμπειρία στα παιδικά κουρέματα</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Clock size={16} className="text-brand-gold mt-1 flex-shrink-0" />
                                <span><strong>Διάρκεια:</strong> ~20 λεπτά — <strong>Τιμή:</strong> 18€</span>
                            </li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-brand-charcoal mb-6">Εύκολη πρόσβαση από όλα τα Βόρεια Προάστια</h2>
                    <p className="text-brand-charcoal/70 leading-relaxed mb-4">
                        Η τοποθεσία μας στην <strong>Κηφισιά</strong> είναι εύκολα προσβάσιμη από:
                    </p>
                    <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10 list-none pl-0">
                        {["Μαρούσι", "Χαλάνδρι", "Νέα Ερυθραία", "Εκάλη", "Πεντέλη", "Ψυχικό", "Φιλοθέη", "Βριλήσσια", "Αγία Παρασκευή"].map(area => (
                            <li key={area} className="flex items-center gap-2 bg-brand-ivory border border-brand-charcoal/5 px-4 py-3 rounded-xl text-sm font-medium text-brand-charcoal">
                                <MapPin size={14} className="text-brand-green flex-shrink-0" />
                                {area}
                            </li>
                        ))}
                    </ul>

                    {/* English Summary for LLM + Tourist SEO */}
                    <div className="bg-brand-charcoal/5 p-6 rounded-[1.5rem] mb-10">
                        <p className="text-sm text-brand-charcoal/50 italic">
                            <strong>In English:</strong> Looking for a kids haircut in Kifisia or the Northern Suburbs of Athens? Marquise Barber Shop offers
                            the &quot;Little Gent&apos;s Cut&quot; for boys up to 12 years old — a friendly, 20-minute premium haircut for just 18€.
                            Book online via eBarber or call +30 21 0801 5009. We are located at Papadiamanti 1, Kifisia 14562.
                        </p>
                    </div>

                    {/* FAQ Section */}
                    <h2 className="text-3xl font-serif font-bold text-brand-charcoal mb-6">Συχνές Ερωτήσεις (FAQ)</h2>
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

                {/* CTA Block */}
                <div className="mt-12 p-12 bg-brand-charcoal text-brand-ivory rounded-[2.5rem] text-center relative overflow-hidden">
                    <div className="absolute inset-0 brick-pattern opacity-10 pointer-events-none"></div>
                    <h2 className="text-3xl font-serif font-bold mb-4 relative z-10 italic">Κλείστε Ραντεβού για Παιδικό Κούρεμα</h2>
                    <p className="text-brand-ivory/60 mb-8 relative z-10">Online ή τηλεφωνικά — εξυπηρέτηση χωρίς αναμονή.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                        <Link
                            href={BOOKING_URL}
                            className={buttonVariants({ variant: 'gold', size: 'lg' })}
                        >
                            <Calendar className="mr-2" size={20} />
                            Κράτηση Online
                        </Link>
                        <a
                            href={BUSINESS_INFO.phoneClick}
                            className={buttonVariants({ variant: 'outline', size: 'lg', className: 'border-brand-ivory text-brand-ivory hover:bg-brand-ivory hover:text-brand-charcoal' })}
                        >
                            <Phone className="mr-2" size={20} />
                            {BUSINESS_INFO.phone}
                        </a>
                    </div>
                </div>
            </Section>
        </Layout>
    );
}
