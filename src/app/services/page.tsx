import { Metadata } from "next";
import { ServicesContent } from "./ServicesContent";

export const metadata: Metadata = {
    title: "Υπηρεσίες Κουρέματος & Περιποίησης Κηφισιά",
    description: "Ανδρικό κούρεμα, fade, παραδοσιακό ξύρισμα, περιποίηση γενειάδας, detox τριχωτού και πολλά ακόμα στο Marquise Barber Shop Κηφισιά. Δείτε τον πλήρη κατάλογο υπηρεσιών.",
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
    return <ServicesContent />;
}
