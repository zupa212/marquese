import { Layout } from "@/components/Layout";
import { ContactContent } from "./ContactContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Επικοινωνία & Τοποθεσία | Marquise Barber Shop",
    description: "Βρείτε μας στην Παπαδιαμάντη 1, Κηφισιά. Κλείστε ραντεβού, δείτε το ωράριο λειτουργίας μας και οδηγίες πρόσβασης στο Google Maps.",
};

export default function ContactPage() {
    return (
        <Layout>
            <ContactContent />
        </Layout>
    );
}
