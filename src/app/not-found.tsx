import { Layout } from "@/components/Layout";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/Button";
import { Home, Scissors, Phone } from "lucide-react";
import { BOOKING_URL, BUSINESS_INFO } from "@/lib/constants";

export default function NotFound() {
    return (
        <Layout>
            <div className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 brick-pattern opacity-5 pointer-events-none"></div>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <div className="w-24 h-24 rounded-full bg-brand-green/10 flex items-center justify-center mx-auto mb-8">
                        <Scissors size={40} className="text-brand-green" />
                    </div>
                    <h1 className="text-8xl md:text-[10rem] font-serif font-bold text-brand-charcoal/10 leading-none mb-4">404</h1>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-charcoal mb-4 italic -mt-12 md:-mt-20 relative z-10">
                        Αυτή η σελίδα δεν βρέθηκε
                    </h2>
                    <p className="text-brand-charcoal/60 text-lg mb-10 max-w-md mx-auto">
                        Η σελίδα που ψάχνετε δεν υπάρχει ή έχει μετακινηθεί. Αλλά μην ανησυχείτε — είμαστε εδώ για εσάς!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/"
                            className={buttonVariants({ variant: 'gold', size: 'lg' })}
                        >
                            <Home className="mr-2" size={20} />
                            Αρχική Σελίδα
                        </Link>
                        <Link
                            href="/services"
                            className={buttonVariants({ variant: 'outline', size: 'lg' })}
                        >
                            <Scissors className="mr-2" size={20} />
                            Υπηρεσίες
                        </Link>
                        <Link
                            href={BOOKING_URL}
                            className={buttonVariants({ variant: 'outline', size: 'lg' })}
                        >
                            <Phone className="mr-2" size={20} />
                            Κράτηση
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
