import { Layout } from "@/components/Layout";
import { Section } from "@/components/Section";
import { Star, Quote, ExternalLink } from "lucide-react";
import { BUSINESS_INFO, GOOGLE_REVIEWS_URL } from "@/lib/constants";
import { buttonVariants } from "@/components/ui/Button";
import Link from "next/link";

export const metadata = {
    title: "Κριτικές | Marquise Barber Shop",
    description: "Δείτε τι λένε οι 5.056+ ικανοποιημένοι πελάτες μας για το Marquise Barber Shop.",
};

export default function ReviewsPage() {
    const reviews = [
        { name: "Νίκος Π.", date: "Πριν από 2 εβδομάδες", text: "Το καλύτερο κούρεμα στην περιοχή. Φοβερή προσοχή στη λεπτομέρεια και πολύ ευχάριστο περιβάλλον. Το προσωπικό είναι επαγγελματίες." },
        { name: "Γιώργος Μ.", date: "Πριν από 1 μήνα", text: "Επαγγελματισμός στο έπακρο. Το παραδοσιακό ξύρισμα είναι μια εμπειρία που πρέπει να δοκιμάσετε. Πραγματικά premium υπηρεσίες." },
        { name: "Αλέξανδρος Κ.", date: "Πριν από 3 μήνες", text: "Συνεπείς στα ραντεβού και πάντα με χαμόγελο. Ο χώρος είναι εξαιρετικός, πραγματικά premium αισθητική και αποτέλεσμα." },
        { name: "Δημήτρης Σ.", date: "Πριν από 4 μήνες", text: "Εξαιρετική δουλειά στο μούσι. Πολύ καλά προϊόντα και ο μπαρμπέρης ήξερε ακριβώς τι χρειαζόμουν." },
        { name: "Κώστας Λ.", date: "Πριν από 5 μήνες", text: "Ο χώρος σε χαλαρώνει αμέσως. Το κούρεμα ήταν ακριβώς όπως το ζήτησα. Θα ξαναπάω σίγουρα." },
        { name: "Μάνος Τ.", date: "Πριν από 6 μήνες", text: "Πολύ καλή εμπειρία. Το detox τριχωτού είναι must αν θέλετε να νιώσετε αναζωογονημένοι." },
    ];

    return (
        <Layout>
            <div className="pt-32 pb-20 bg-brand-ivory text-brand-charcoal border-b border-brand-charcoal/5">
                <div className="container mx-auto px-6 text-center">
                    <div className="flex justify-center items-center space-x-2 mb-4">
                        {[1, 2, 3, 4, 5].map(i => <Star key={i} size={24} className="fill-brand-gold text-brand-gold" />)}
                    </div>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4">5.056 Αξιολογήσεις</h1>
                    <p className="max-w-xl mx-auto text-brand-green font-bold uppercase tracking-[0.3em] text-sm">
                        Η Εμπιστοσύνη σας είναι η ανταμοιβή μας
                    </p>
                </div>
            </div>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {reviews.map((review, i) => (
                        <div key={i} className="bg-white p-10 border border-brand-charcoal/5 rounded-sm relative group">
                            <Quote className="absolute top-8 right-8 text-brand-gold opacity-10 group-hover:opacity-20 transition-opacity" size={64} />
                            <div className="flex items-center space-x-1 mb-4">
                                {[1, 2, 3, 4, 5].map(j => <Star key={j} size={14} className="fill-brand-gold text-brand-gold" />)}
                            </div>
                            <p className="text-lg italic text-brand-charcoal/80 mb-8 leading-relaxed relative z-10">&ldquo;{review.text}&rdquo;</p>
                            <div className="flex justify-between items-end border-t border-brand-charcoal/5 pt-6">
                                <div>
                                    <h4 className="font-serif font-bold text-xl">{review.name}</h4>
                                    <p className="text-xs text-brand-charcoal/40 uppercase tracking-widest mt-1">{review.date}</p>
                                </div>
                                <span className="text-brand-gold text-[10px] font-bold uppercase tracking-widest border border-brand-gold/30 px-3 py-1 rounded-full">Verified Review</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <a
                        href={GOOGLE_REVIEWS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={buttonVariants({ variant: 'gold', size: 'lg' })}
                    >
                        Δείτε όλες τις κριτικές στο Google <ExternalLink size={18} className="ml-2" />
                    </a>
                </div>
            </Section>
        </Layout>
    );
}
