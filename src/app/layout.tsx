import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { BUSINESS_INFO } from "@/lib/constants";
import { GA4Stub } from "@/components/Analytics";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "greek"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marquise Barber Shop | Κουρείο - Μπαρμπέρικο (Κηφισιά)",
  description: "Premium κουρέματα στην Κηφισιά. Καθαρές γραμμές, λεπτομέρεια και εμπειρία. Κάντε κράτηση online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BarberShop",
    "name": BUSINESS_INFO.name,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Παπαδιαμάντη 1",
      "addressLocality": "Κηφισιά",
      "postalCode": "14562",
      "addressCountry": "GR"
    },
    "telephone": BUSINESS_INFO.phone,
    "url": "https://marquisebarber.gr", // Placeholder
    "openingHoursSpecification": BUSINESS_INFO.hours.filter(h => h.time !== 'Κλειστά').map(h => {
      const [open, close] = h.time.split('–');
      return {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": h.day === 'Τρίτη' ? 'Tuesday' : h.day === 'Τετάρτη' ? 'Wednesday' : h.day === 'Πέμπτη' ? 'Thursday' : h.day === 'Παρασκευή' ? 'Friday' : h.day === 'Σάββατο' ? 'Saturday' : 'Monday',
        "opens": open.trim(),
        "closes": close.trim()
      };
    })
  };

  return (
    <html lang="el">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased text-brand-charcoal bg-brand-ivory`}
      >
        <GA4Stub />
        {children}
      </body>
    </html>
  );
}
