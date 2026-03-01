import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { SignatureExperience } from "@/components/SignatureExperience";
import { SERVICES, BUSINESS_INFO, BOOKING_URL, GOOGLE_MAPS_EMBED_URL, GOOGLE_MAPS_URL } from "@/lib/constants";
import { buttonVariants } from "@/components/ui/Button";
import Link from "next/link";
import { Quote, Phone, MapPin, Calendar, ExternalLink, Star } from "lucide-react";

export default function Home() {
  const previewServices = SERVICES.slice(0, 4);

  return (
    <Layout>
      <Hero />

      {/* Services Preview */}
      <Section id="services">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Οι Υπηρεσίες μας</h2>
            <p className="text-brand-charcoal/60 text-lg">
              Εξειδικευμένες υπηρεσίες περιποίησης προσαρμοσμένες στις δικές σας ανάγκες. Από το κλασικό κούρεμα μέχρι την πλήρη θεραπεία τριχωτού.
            </p>
          </div>
          <Link href="/services" className={buttonVariants({ variant: 'outline' })}>
            Δείτε όλες τις υπηρεσίες
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {previewServices.map((service, index) => (
            <ServiceCard
              key={service.name}
              name={service.name}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </Section>

      {/* Signature Experiences */}
      <Section dark id="signature">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-brand-gold">The Art of Barbering</h2>
          <div className="h-1 w-24 bg-brand-gold/30 mx-auto"></div>
        </div>

        <SignatureExperience
          title="Παραδοσιακό Ξύρισμα"
          description="Η ιεροτελεστία του ξυρίσματος με ζεστές πετσέτες, premium προϊόντα και την απόλυτη προσοχή στη λεπτομέρεια που μόνο ένας Marquise κουρέας μπορεί να προσφέρει."
          image="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1470&auto=format&fit=crop"
        />

        <SignatureExperience
          title="Detox & Θεραπεία Τριχωτού"
          description="Βαθύς καθαρισμός και αναζωογόνηση για το τριχωτό της κεφαλής. Μια ολοκληρωμένη εμπειρία σπα που απομακρύνει τους ρύπους και δυναμώνει την τρίχα."
          image="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1470&auto=format&fit=crop"
          reverse
        />
      </Section>

      {/* Gallery Teaser */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4">Inside the Shop</h2>
          <p className="text-brand-charcoal/60">Στιγμές από την καθημερινότητά μας.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="aspect-square relative overflow-hidden group rounded-sm">
              <img
                src={`https://images.unsplash.com/photo-1599351431247-f132f017154c?q=80&w=687&auto=format&fit=crop&sig=${i}`}
                alt="Gallery item"
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-brand-green/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Link href="/gallery" className="text-white bg-brand-charcoal/50 p-2 rounded-full">
                  <ExternalLink size={20} />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link href="/gallery" className={buttonVariants({ variant: 'ghost' })}>
            Δείτε όλη τη γκαλερί
          </Link>
        </div>
      </Section>

      {/* Reviews Teaser */}
      <Section id="reviews" dark>
        <div className="flex flex-col items-center text-center mb-16">
          <Quote className="text-brand-gold mb-6" size={48} />
          <h2 className="text-4xl font-serif font-bold mb-4">Τι λένε οι πελάτες μας</h2>
          <div className="flex items-center space-x-2 mb-2">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={20} className="fill-brand-gold text-brand-gold" />)}
          </div>
          <p className="text-brand-gold font-bold tracking-[0.2em] text-sm uppercase">5.056 αξιολογήσεις</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            { name: "Νίκος Π.", text: "Το καλύτερο κούρεμα στην περιοχή. Φοβερή προσοχή στη λεπτομέρεια και πολύ ευχάριστο περιβάλλον." },
            { name: "Γιώργος Μ.", text: "Επαγγελματισμός στο έπακρο. Το παραδοσιακό ξύρισμα είναι μια εμπειρία που πρέπει να δοκιμάσετε." },
            { name: "Αλέξανδρος Κ.", text: "Συνεπείς στα ραντεβού και πάντα με χαμόγελο. Ο χώρος είναι εξαιρετικός, πραγματικά premium." }
          ].map((review, i) => (
            <div key={i} className="bg-white/5 p-8 rounded-sm border border-white/10 hover:border-brand-gold/30 transition-all">
              <p className="italic text-brand-ivory/80 mb-6 leading-relaxed">&ldquo;{review.text}&rdquo;</p>
              <p className="font-serif font-bold text-brand-gold">— {review.name}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/reviews" className={buttonVariants({ variant: 'outline', className: 'border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-charcoal' })}>
            Διαβάστε όλες τις κριτικές
          </Link>
        </div>
      </Section>

      {/* Location & Contact */}
      <Section id="location">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-6 italic">Σας περιμένουμε</h2>
              <p className="text-brand-charcoal/60 text-lg leading-relaxed">
                Βρισκόμαστε στην καρδιά της Κηφισιάς, σε έναν χώρο σχεδιασμένο για την απόλυτη άνεση και χαλάρωση του άνδρα.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs mb-1">Διεύθυνση</h4>
                  <p className="text-brand-charcoal/80">{BUSINESS_INFO.address}</p>
                  <a href={GOOGLE_MAPS_URL} target="_blank" className="text-brand-green text-sm font-bold hover:underline">Οδηγίες Χάρτη</a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs mb-1">Τηλέφωνο</h4>
                  <p className="text-brand-charcoal/80">{BUSINESS_INFO.phone}</p>
                </div>
              </div>
            </div>

            <Link
              href={BOOKING_URL || BUSINESS_INFO.phoneClick}
              className={buttonVariants({ variant: 'gold', size: 'lg', className: 'w-full sm:w-auto' })}
            >
              {BOOKING_URL ? "Κλείστε Ραντεβού Online" : "Κλείστε Ραντεβού Τηλεφωνικά"}
            </Link>
          </div>

          <div className="h-[400px] bg-brand-charcoal/5 rounded-sm overflow-hidden border border-brand-charcoal/10 relative">
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
      </Section>
    </Layout>
  );
}
