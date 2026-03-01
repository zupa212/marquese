import { Layout } from "@/components/Layout";
import { ReviewsContent } from "./ReviewsContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Κριτικές Πελατών — Premium Κουρείο Κηφισιά",
    description: "5.056+ ικανοποιημένοι πελάτες αξιολογούν με 5 αστέρια το Marquise Barber Shop. Διαβάστε εμπειρίες από παραδοσιακό ξύρισμα, fade κουρέματα και beard grooming στην Κηφισιά.",
    openGraph: {
        title: "Κριτικές | Marquise Barber Shop Κηφισιά",
        description: "5.056+ κριτικές με 5 αστέρια. Διαβάστε τι λένε οι πελάτες μας.",
        url: "https://www.marquisebarbershop.gr/reviews",
    },
    twitter: {
        title: "Κριτικές | Marquise Barber Shop Κηφισιά",
        description: "5.056+ κριτικές με 5 αστέρια. Διαβάστε τι λένε οι πελάτες μας.",
    },
    alternates: {
        canonical: "https://www.marquisebarbershop.gr/reviews",
    },
};

export default function ReviewsPage() {
    return (
        <Layout>
            <ReviewsContent />
        </Layout>
    );
}
