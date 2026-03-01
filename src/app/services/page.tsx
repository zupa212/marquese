import { Metadata } from "next";
import { ServicesContent } from "./ServicesContent";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Υπηρεσίες Κουρέματος & Περιποίησης Κηφισιά",
    description: "Ανδρικό κούρεμα, fade, παραδοσιακό ξύρισμα, περιποίηση γενειάδας, detox τριχωτού, black mask και πολλά ακόμα στο Marquise Barber Shop Κηφισιά. Δείτε τον πλήρη κατάλογο υπηρεσιών.",
    keywords: ["υπηρεσίες κουρείου Κηφισιά", "barber services Kifisia", "ανδρικό κούρεμα", "gentleman haircut", "fade", "beard grooming", "traditional shave", "παραδοσιακό ξύρισμα", "detox τριχωτού", "παιδικό κούρεμα", "kids haircut", "black mask", "pre-wedding barber"],
    openGraph: {
        title: "Υπηρεσίες | Marquise Barber Shop Κηφισιά",
        description: "Fade, παραδοσιακό ξύρισμα, beard grooming, detox τριχωτού — ανακαλύψτε τις premium υπηρεσίες μας.",
        url: "https://www.marquisebarbershop.gr/services",
    },
    twitter: {
        title: "Υπηρεσίες | Marquise Barber Shop Κηφισιά",
        description: "Fade, παραδοσιακό ξύρισμα, beard grooming, detox τριχωτού — ανακαλύψτε τις premium υπηρεσίες μας.",
    },
    alternates: {
        canonical: "https://www.marquisebarbershop.gr/services",
    },
};

export default function ServicesPage() {
    const servicesSchema = {
        "@context": "https://schema.org",
        "@type": "OfferCatalog",
        "name": "Υπηρεσίες Marquise Barber Shop",
        "description": "Premium barber services in Kifisia, Athens — Gentleman's haircuts, traditional shaves, beard care, kids haircuts, facial treatments.",
        "itemListElement": SERVICES.map((service, index) => ({
            "@type": "Offer",
            "position": index + 1,
            "itemOffered": {
                "@type": "Service",
                "name": service.name,
                "alternateName": service.nameEn,
                "description": service.description,
                "provider": {
                    "@type": "BarberShop",
                    "name": "Marquise Barber Shop",
                    "url": "https://www.marquisebarbershop.gr"
                },
                "areaServed": {
                    "@type": "City",
                    "name": "Κηφισιά, Αθήνα"
                }
            }
        }))
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
            />
            <ServicesContent />
        </>
    );
}
