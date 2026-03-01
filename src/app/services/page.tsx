import { Layout } from "@/components/Layout";
import { Section } from "@/components/Section";
import { SERVICES, BOOKING_URL, BUSINESS_INFO } from "@/lib/constants";
import { buttonVariants } from "@/components/ui/Button";
import Link from "next/link";
import { Scissors, Check } from "lucide-react";

export const metadata = {
    title: "Υπηρεσίες | Marquise Barber Shop",
    description: "Ανακαλύψτε τις premium υπηρεσίες κουρέματος και περιποίησης στο Marquise Barber Shop στην Κηφισιά.",
};

export default function ServicesPage() {
    return (
        <Layout>
            <div className="pt-32 pb-20 bg-brand-green text-brand-ivory text-center relative overflow-hidden">
                <div className="absolute inset-0 brick-pattern opacity-5 pointer-events-none"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 italic leading-tight">Υπηρεσίες Κουρείου &amp; Περιποίησης</h1>
                    <p className="max-w-2xl mx-auto text-brand-ivory/80 text-lg">
                        Στο Marquise, κάθε υπηρεσία είναι μια εμπειρία προσαρμοσμένη στις ανάγκες σας. Χρησιμοποιούμε μόνο τα καλύτερα προϊόντα για το τέλειο αποτέλεσμα στην Κηφισιά.
                    </p>
                </div>
            </div>

            <Section rounded>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICES.map((service) => (
                        <div key={service.name} className="group p-8 bg-white border border-brand-charcoal/5 rounded-sm hover:-translate-y-1 transition-all duration-300">
                            <div className="flex justify-between items-start mb-6">
                                <div className="w-12 h-12 rounded-full bg-brand-green/5 text-brand-green flex items-center justify-center">
                                    <Scissors size={24} />
                                </div>
                                <div className="h-px flex-grow bg-brand-gold/20 mx-4 mt-6"></div>
                            </div>
                            <h3 className="text-2xl font-serif font-bold mb-4">{service.name}</h3>
                            <p className="text-brand-charcoal/60 text-sm leading-relaxed mb-8">
                                {service.description}
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center text-xs text-brand-green font-bold uppercase tracking-widest">
                                    <Check size={14} className="mr-2" /> Premium Προϊόντα
                                </li>
                                <li className="flex items-center text-xs text-brand-green font-bold uppercase tracking-widest">
                                    <Check size={14} className="mr-2" /> Εξειδικευμένο Προσωπικό
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-24 p-12 bg-brand-charcoal text-brand-ivory rounded-sm text-center relative overflow-hidden">
                    <div className="absolute inset-0 brick-pattern opacity-10 pointer-events-none"></div>
                    <h2 className="text-3xl font-serif font-bold mb-6 relative z-10">Έτοιμοι για την ανανέωσή σας;</h2>
                    <Link
                        href={BOOKING_URL || BUSINESS_INFO.phoneClick}
                        className={buttonVariants({ variant: 'gold', size: 'lg', className: 'relative z-10' })}
                    >
                        {BOOKING_URL ? "Κλείστε Ραντεβού Online" : "Καλέστε για Ραντεβού"}
                    </Link>
                </div>
            </Section>
        </Layout>
    );
}
