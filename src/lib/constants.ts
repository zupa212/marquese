export const BOOKING_URL = "https://www.ebarber.gr/barbershops/marquise-barber-shop/appointments/step1";
export const GOOGLE_REVIEWS_URL = "https://search.google.com/local/reviews?placeid=ChIJ8_B8j8e9oRQRqEIDw4F7OQE"; // Placeholder ID
export const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/iRaEG1wtnc3QDTPSA";
export const GOOGLE_MAPS_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1570.5!2d23.8115!3d38.0747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bdc78f7cf0f3%3A0x13979817bc302a8!2sMarquise+Barber+Shop!5e0!3m2!1sel!2sgr!4v1709330000000";

export const BUSINESS_INFO = {
    name: "Marquise Barber Shop",
    category: "Κουρείο - Μπαρμπέρικο",
    address: "Παπαδιαμάντη 1, Κηφισιά 145 62, Ελλάδα",
    phone: "+30 21 0801 5009",
    phoneClick: "tel:+302108015009",
    rating: "5.0",
    reviewCount: "5.056",
    hours: [
        { day: "Δευτέρα", time: "Κλειστά" },
        { day: "Τρίτη", time: "10:00–20:00" },
        { day: "Τετάρτη", time: "10:00–20:00" },
        { day: "Πέμπτη", time: "10:00–20:00" },
        { day: "Παρασκευή", time: "10:00–20:00" },
        { day: "Σάββατο", time: "09:00–17:00" },
        { day: "Κυριακή", time: "Κλειστά" },
    ],
};

export const SERVICES = [
    { name: "Ανδρικό Κούρεμα", nameEn: "Gentleman's Haircut", description: "Κλασικό και μοντέρνο κούρεμα με προσοχή στη λεπτομέρεια.", descriptionEn: "Classic and modern haircut with attention to detail.", price: 22, duration: 30 },
    { name: "Κούρεμα + Περίγραμμα Μούσι", nameEn: "Combo (Gentleman's Haircut & Beard Contour)", description: "Ολοκληρωμένη περιποίηση για μαλλιά και γένια.", descriptionEn: "Complete grooming for hair and beard.", price: 25, duration: 30 },
    { name: "Κούρεμα + Πλήρης Περιποίηση Γενειάδας", nameEn: "Combo (Gentleman's Haircut & Beard Care)", description: "Η απόλυτη εμπειρία ανανέωσης.", descriptionEn: "The ultimate refresh experience.", price: 29, duration: 45 },
    { name: "Παραδοσιακό Ξύρισμα", nameEn: "Traditional Shave", description: "Με ζεστές πετσέτες και φρεσκάδα παραδοσιακού μπαρμπέρικου.", descriptionEn: "Hot towel shave with traditional barber freshness.", price: 20, duration: 30 },
    { name: "Περίγραμμα Μούσι", nameEn: "Beard Fresh Line-up", description: "Καθαρές γραμμές για προσεγμένη εμφάνιση.", descriptionEn: "Clean lines for a sharp look.", price: 10, duration: 10 },
    { name: "Ολική Περιποίηση Γενειάδας", nameEn: "Complete Beard Care", description: "Φροντίδα και σχήμα για τη γενειάδα σας.", descriptionEn: "Full beard care and shaping.", price: 14, duration: 15 },
    { name: "Παιδικό Κούρεμα (έως 12 ετών)", nameEn: "Little Gent's Cut", description: "Φιλική εξυπηρέτηση για τους μικρούς μας φίλους.", descriptionEn: "Friendly service for our little friends.", price: 18, duration: 20 },
    { name: "Σχήμα Φρυδιών", nameEn: "Eyebrows Shaping Threading", description: "Λεπτομερή περιποίηση για καθαρό βλέμμα.", descriptionEn: "Detailed shaping for a clean look.", price: 5, duration: 5 },
    { name: "Αποτρίχωση με Ζεστό Κερί (Ανά περιοχή)", nameEn: "Facial Hair Removal with Hot Wax (By Area)", description: "Αποτρίχωση προσώπου με ζεστό κερί, ανά περιοχή.", descriptionEn: "Facial hair removal with hot wax, per area.", price: 3, duration: 5 },
    { name: "Θεραπεία Βαθύ Καθαρισμού (Detox)", nameEn: "Hair & Scalp Special Detox", description: "Αναζωογόνηση τριχωτού και απομάκρυνση ρύπων.", descriptionEn: "Scalp revitalization and impurity removal.", price: 12, duration: 15 },
    { name: "Θεραπεία Ξηροδερμίας", nameEn: "Anti-Dandruff & Scalp Therapy", description: "Εξειδικευμένη φροντίδα για υγιές δέρμα.", descriptionEn: "Specialized care for healthy skin.", price: 8, duration: 5 },
    { name: "Καθαρισμός Προσώπου", nameEn: "Facial Cleansing with Steam & Scrub", description: "Αίσθηση φρεσκάδας και καθαριότητας.", descriptionEn: "A feeling of freshness and cleanliness.", price: 18, duration: 20 },
    { name: "Black Mask", nameEn: "Black Mask", description: "Βαθύς καθαρισμός πόρων με μάσκα ενεργού άνθρακα.", descriptionEn: "Deep pore cleaning with activated charcoal mask.", price: 9, duration: 15 },
    { name: "Eye Patches", nameEn: "Eye Patches", description: "Αναζωογόνηση ματιών με ειδικά patches κολλαγόνου.", descriptionEn: "Eye rejuvenation with collagen patches.", price: 5, duration: 10 },
    { name: "Premium Combo: Κούρεμα & Παραδοσιακό Ξύρισμα", nameEn: "Premium Combo: Gentleman's Haircut & Traditional Shaving", description: "Η απόλυτη premium εμπειρία — κούρεμα και παραδοσιακό ξύρισμα.", descriptionEn: "The ultimate premium experience — haircut and traditional shave.", price: 38, duration: 50 },
    { name: "The Gentleman's Pre-Wedding Premium Combo", nameEn: "The Gentleman's Pre-Wedding Premium Combo", description: "Πλήρης πακέτο ετοιμασίας γαμπρού — κούρεμα, ξύρισμα, περιποίηση.", descriptionEn: "Full groom preparation package — haircut, shave, grooming.", price: 70, duration: 90 },
];
