import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { BUSINESS_INFO } from "@/lib/constants";
import { GA4Stub } from "@/components/Analytics";
import { Providers } from "./Providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "greek"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const SITE_URL = "https://www.marquisebarbershop.gr";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Marquise Barber Shop | Κουρείο - Μπαρμπέρικο Κηφισιά",
    template: "%s | Marquise Barber Shop",
  },
  description: "Premium ανδρικά κουρέματα, fade, παραδοσιακό ξύρισμα και περιποίηση γενειάδας στην Κηφισιά. Κλείστε ραντεβού online στο Marquise Barber Shop.",
  keywords: ["κουρείο Κηφισιά", "barber shop Kifisia", "ανδρικό κούρεμα", "fade κούρεμα", "παραδοσιακό ξύρισμα", "μπαρμπέρικο", "Marquise", "barbershop Athens"],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "el_GR",
    url: SITE_URL,
    siteName: "Marquise Barber Shop",
    title: "Marquise Barber Shop | Premium Κουρείο Κηφισιά",
    description: "Premium ανδρικά κουρέματα, fade, παραδοσιακό ξύρισμα και περιποίηση γενειάδας στην Κηφισιά. Κλείστε ραντεβού online.",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "Marquise Barber Shop — Premium Κουρείο στην Κηφισιά",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marquise Barber Shop | Premium Κουρείο Κηφισιά",
    description: "Premium ανδρικά κουρέματα, fade, παραδοσιακό ξύρισμα και περιποίηση γενειάδας στην Κηφισιά.",
    images: ["/images/hero.png"],
  },
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
    "image": "https://www.marquisebarbershop.gr/images/hero.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Παπαδιαμάντη 1",
      "addressLocality": "Κηφισιά",
      "postalCode": "14562",
      "addressCountry": "GR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 38.0747,
      "longitude": 23.8115
    },
    "telephone": BUSINESS_INFO.phone,
    "url": "https://www.marquisebarbershop.gr",
    "priceRange": "€€",
    "sameAs": [
      "https://maps.app.goo.gl/iRaEG1wtnc3QDTPSA",
      "https://www.ebarber.gr/barbershops/marquise-barber-shop/appointments/step1"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "5056",
      "bestRating": "5"
    },
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
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2E5A47" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Marquise" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased text-brand-charcoal bg-brand-ivory`}
      >
        <GA4Stub />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
