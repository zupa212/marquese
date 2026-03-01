import { Layout } from "@/components/Layout";
import { Section } from "@/components/Section";
import { Phone, MapPin, Calendar, MessageSquare } from "lucide-react";
import { BUSINESS_INFO, BOOKING_URL, GOOGLE_MAPS_EMBED_URL, GOOGLE_MAPS_URL } from "@/lib/constants";
import { buttonVariants } from "@/components/ui/Button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const metadata = {
    title: "Επικοινωνία | Marquise Barber Shop",
    description: "Επικοινωνήστε μαζί μας για ραντεβού ή πληροφορίες. Βρισκόμαστε στην Παπαδιαμάντη 1, Κηφισιά.",
};

export default function ContactPage() {
    return (
        <Layout>
            <div className="pt-32 pb-20 bg-brand-charcoal text-brand-ivory text-center relative overflow-hidden">
                <div className="absolute inset-0 brick-pattern opacity-10 pointer-events-none"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 italic">Επικοινωνία</h1>
                    <p className="max-w-2xl mx-auto text-brand-gold font-bold uppercase tracking-[0.3em] text-sm">
                        Eίμαστε στη διάθεσή σας
                    </p>
                </div>
            </div>

            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {/* Contact Info */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-3xl font-serif font-bold mb-8">Πληροφορίες</h2>
                            <div className="space-y-8">
                                <div className="flex items-start space-x-6">
                                    <div className="w-14 h-14 rounded-full bg-brand-green/5 text-brand-green flex items-center justify-center flex-shrink-0">
                                        <MapPin size={28} />
                                    </div>
                                    <div>
                                        <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-brand-gold mb-2">Διεύθυνση</h4>
                                        <p className="text-xl font-serif">{BUSINESS_INFO.address}</p>
                                        <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="text-brand-green font-bold hover:underline inline-flex items-center mt-2 group">
                                            Άνοιγμα στους Χάρτες <Calendar size={14} className="ml-2 group-hover:rotate-12 transition-transform" />
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-6">
                                    <div className="w-14 h-14 rounded-full bg-brand-green/5 text-brand-green flex items-center justify-center flex-shrink-0">
                                        <Phone size={28} />
                                    </div>
                                    <div>
                                        <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-brand-gold mb-2">Τηλέφωνο</h4>
                                        <a href={BUSINESS_INFO.phoneClick} className="text-3xl font-serif font-bold hover:text-brand-green transition-colors">
                                            {BUSINESS_INFO.phone}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-6">
                                    <div className="w-14 h-14 rounded-full bg-brand-green/5 text-brand-green flex items-center justify-center flex-shrink-0">
                                        <MessageSquare size={28} />
                                    </div>
                                    <div>
                                        <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-brand-gold mb-2">Social Media</h4>
                                        <div className="flex space-x-4 mt-2">
                                            <Link href="#" className="text-brand-charcoal hover:text-brand-green font-bold uppercase tracking-widest text-sm">Instagram</Link>
                                            <span className="text-brand-charcoal/20">|</span>
                                            <Link href="#" className="text-brand-charcoal hover:text-brand-green font-bold uppercase tracking-widest text-sm">Facebook</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-serif font-bold mb-8">Ωράριο Λειτουργίας</h2>
                            <div className="bg-brand-green/5 p-8 rounded-sm">
                                <ul className="space-y-4">
                                    {BUSINESS_INFO.hours.map((item) => (
                                        <li key={item.day} className="flex justify-between items-center border-b border-brand-charcoal/5 pb-2">
                                            <span className="font-bold text-sm uppercase tracking-widest text-brand-charcoal/60">{item.day}</span>
                                            <span className={cn(
                                                "font-serif font-bold text-lg",
                                                item.time === 'Κλειστά' ? "text-red-500" : "text-brand-charcoal"
                                            )}>{item.time}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Map and CTAs */}
                    <div className="space-y-8 flex flex-col">
                        <div className="bg-brand-charcoal text-white p-10 rounded-sm relative overflow-hidden flex-grow flex flex-col justify-center text-center">
                            <div className="absolute inset-0 brick-pattern opacity-10 pointer-events-none"></div>
                            <h3 className="text-3xl font-serif font-bold mb-6 relative z-10 italic">Θέλετε να μας επισκεφθείτε;</h3>
                            <p className="text-brand-ivory/60 mb-10 relative z-10">Κλείστε το ραντεβού σας τώρα και εξασφαλίστε την προτίμησή σας.</p>
                            <div className="flex flex-col gap-4 relative z-10">
                                <Link
                                    href={BOOKING_URL || BUSINESS_INFO.phoneClick}
                                    className={buttonVariants({ variant: 'gold', size: 'lg' })}
                                >
                                    {BOOKING_URL ? "Κάντε κράτηση online" : "Κλήση για ραντεβού"}
                                </Link>
                            </div>
                        </div>

                        <div className="h-[450px] w-full rounded-sm overflow-hidden border border-brand-charcoal/5 shadow-inner">
                            <iframe
                                src={GOOGLE_MAPS_EMBED_URL}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Marquise Barber Shop Location"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </Section>
        </Layout>
    );
}
