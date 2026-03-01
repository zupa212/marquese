import { Layout } from "@/components/Layout";
import { ReviewsContent } from "./ReviewsContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Κριτικές | Marquise Barber Shop Κηφισιά",
    description: "Διαβάστε τι λένε οι 5.056+ ικανοποιημένοι πελάτες μας. Εμπειρίες από το παραδοσιακό ξύρισμα και τα premium κουρέματα στο Marquise Barber Shop.",
};

export default function ReviewsPage() {
    return (
        <Layout>
            <ReviewsContent />
        </Layout>
    );
}
