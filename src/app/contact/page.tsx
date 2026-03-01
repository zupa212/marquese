import { Layout } from "@/components/Layout";
import { ContactContent } from "./ContactContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Επικοινωνία & Κράτηση Ραντεβού Κηφισιά",
    description: "Κλείστε ραντεβού online ή τηλεφωνικά στο Marquise Barber Shop. Παπαδιαμάντη 1, Κηφισιά 14562. Ωράριο, χάρτης και οδηγίες πρόσβασης.",
    openGraph: {
        title: "Επικοινωνία & Κράτηση | Marquise Barber Shop",
        description: "Κλείστε ραντεβού online ή τηλεφωνικά. Παπαδιαμάντη 1, Κηφισιά.",
        url: "https://www.marquisebarbershop.gr/contact",
    },
    twitter: {
        title: "Επικοινωνία & Κράτηση | Marquise Barber Shop",
        description: "Κλείστε ραντεβού online ή τηλεφωνικά. Παπαδιαμάντη 1, Κηφισιά.",
    },
    alternates: {
        canonical: "https://www.marquisebarbershop.gr/contact",
    },
};

export default function ContactPage() {
    return (
        <Layout>
            <ContactContent />
        </Layout>
    );
}
