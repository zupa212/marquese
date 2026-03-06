import { Metadata } from 'next';
import { Layout } from "@/components/Layout";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/Button";
import { Home, Scissors, Phone, AlertCircle } from "lucide-react";
import { BOOKING_URL, BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
    title: "404 - Η σελίδα δεν βρέθηκε | Marquise Barber Shop",
    description: "Η σελίδα που ψάχνετε στο Marquise Barber Shop δεν βρέθηκε. Επιστρέψτε στην αρχική ή κλείστε το ραντεβού σας για κούρεμα στην Κηφισιά.",
    robots: {
        index: false,
        follow: true,
    }
};

export default function NotFound() {
    return (
        <Layout>
            <div className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 brick-pattern opacity-5 pointer-events-none"></div>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <div className="w-24 h-24 rounded-full bg-brand-gold/10 flex items-center justify-center mx-auto mb-10 border border-brand-gold/20">
                        <AlertCircle size={40} className="text-brand-gold" />
                    </div>
                    <h1 className="text-8xl md:text-[12rem] font-serif font-bold text-brand-charcoal/5 leading-none mb-4 animate-pulse">404</h1>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-charcoal mb-6 italic -mt-12 md:-mt-24 relative z-10">
                        Κάτι πήγε... <span className="text-brand-gold">στραβά</span>
                    </h2>
                    <p className="text-brand-charcoal/60 text-lg mb-12 max-w-lg mx-auto font-light leading-relaxed">
                        Η σελίδα που αναζητάτε δεν είναι διαθέσιμη. Ίσως έχει μετακινηθεί ή η διεύθυνση είναι λανθασμένη.
                        Μην ανησυχείτε, η premium περιποίηση σας περιμένει στην αρχική μας σελίδα.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-5 justify-center">
                        <Link
                            href="/"
                            className={buttonVariants({ variant: 'gold', size: 'lg', className: 'px-8' })}
                        >
                            <Home className="mr-2" size={20} />
                            Αρχική Σελίδα
                        </Link>
                        <Link
                            href="/services"
                            className={buttonVariants({ variant: 'outline', size: 'lg', className: 'border-brand-charcoal/20 px-8' })}
                        >
                            <Scissors className="mr-2" size={20} />
                            ΚΛΕΙΣΕ ΚΟΥΡΕΜΑ
                        </Link>
                        <Link
                            href={BOOKING_URL}
                            className={buttonVariants({ variant: 'outline', size: 'lg', className: 'border-brand-charcoal/20 px-8' })}
                        >
                            <Phone className="mr-2" size={20} />
                            Κλείσε Ραντεβού
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
