export type Language = 'el' | 'en';

export const translations = {
    el: {
        nav: {
            services: "Υπηρεσίες",
            gallery: "Γκαλερί",
            reviews: "Κριτικές",
            contact: "Επικοινωνία",
            book: "Κλείστε Ραντεβού"
        },
        hero: {
            title: "Marquise Barber Shop",
            subtitle: "Premium κουρέματα & παραδοσιακό ξύρισμα στην Κηφισιά.",
            cta: "Κλείστε Ραντεβού"
        },
        servicesPage: {
            title: "Υπηρεσίες Κουρείου & Περιποίησης",
            description: "Στο Marquise, κάθε υπηρεσία είναι μια εμπειρία προσαρμοσμένη στις ανάγκες σας. Χρησιμοποιούμε μόνο τα καλύτερα προϊόντα για το τέλειο αποτέλεσμα στην Κηφισιά.",
            ready: "Έτοιμοι για την ανανέωσή σας;",
            cta: "Κλείστε Ραντεβού Online",
            ctaPhone: "Καλέστε για Ραντεβού"
        },
        contactPage: {
            title: "Επικοινωνία",
            subtitle: "Eίμαστε στη διάθεσή σας",
            info: "Πληροφορίες",
            social: "Social Media",
            visit: "Θέλετε να μας επισκεφθείτε;",
            visitDesc: "Κλείστε το ραντεβού σας τώρα και εξασφαλίστε την προτίμησή σας.",
            maps: "Άνοιγμα στους Χάρτες",
            cta: "Κάντε κράτηση online",
            ctaPhone: "Κλήση για ραντεβού"
        },
        common: {
            visitUs: "Επισκεφθείτε μας",
            phone: "Τηλέφωνο",
            address: "Διεύθυνση",
            hours: "Ωράριο Λειτουργίας",
            closed: "Κλειστά"
        },
        team: {
            title: "Η Ομάδα Μας",
            subtitle: "Οι Master Barbers",
            barbers: {
                apostolis: {
                    name: "Αποστόλης",
                    role: "Master Barber & Founder",
                    bio: "Με πολυετή εμπειρία στην παραδοσιακή και σύγχρονη κομμωτική τέχνη, ο Αποστόλης έχει δημιουργήσει το Marquise Barber Shop με όραμα την απόλυτη ανδρική περιποίηση. Εξειδικεύεται στα αυστηρά fades και στο κλασικό ψαλίδι."
                },
                aggelos: {
                    name: "Άγγελος",
                    role: "Senior Barber",
                    bio: "Το πάθος του Άγγελου για την λεπτομέρεια τον ξεχωρίζει. Οι καθαρές γραμμές, η τέλεια περιποίηση γενειάδας και η αφοσίωση στην εξυπηρέτηση είναι αυτά που τον κάνουν αναντικατάστατο μέλος της ομάδας μας."
                }
            }
        }
    },
    en: {
        nav: {
            services: "Services",
            gallery: "Gallery",
            reviews: "Reviews",
            contact: "Contact",
            book: "Book Appointment"
        },
        hero: {
            title: "Marquise Barber Shop",
            subtitle: "Premium cuts & traditional shaving in Kifisia.",
            cta: "Book Now"
        },
        servicesPage: {
            title: "Barber & Grooming Services",
            description: "At Marquise, every service is an experience tailored to your needs. We use only the finest products for the perfect result in Kifisia.",
            ready: "Ready for your renewal?",
            cta: "Book Online Now",
            ctaPhone: "Call for Appointment"
        },
        servicesList: {
            "Ανδρικό Κούρεμα": "Men's Haircut",
            "Κούρεμα + Περίγραμμα Μούσι": "Haircut + Beard Trim",
            "Κούρεμα + Πλήρης Περιποίηση Γενειάδας": "Haircut + Full Beard Grooming",
            "Παραδοσιακό Ξύρισμα": "Traditional Shave",
            "Περίγραμμα Μούσι": "Beard Trim",
            "Ολική Περιποίηση Γενειάδας": "Full Beard Grooming",
            "Παιδικό Κούρεμα (έως 12 ετών)": "Kids Haircut (under 12)",
            "Σχήμα Φρυδιών": "Eyebrow Shaping",
            "Θεραπεία Βαθύ Καθαρισμού (Detox)": "Scalp Detox Treatment",
            "Θεραπεία Ξηροδερμίας": "Dry Skin Treatment",
            "Καθαρισμός Προσώπου": "Facial Cleansing",
            "Κλασικό και μοντέρνο κούρεμα με προσοχή στη λεπτομέρεια.": "Classic and modern haircut with attention to detail.",
            "Ολοκληρωμένη περιποίηση για μαλλιά και γένια.": "Complete grooming for both hair and beard.",
            "Η απόλυτη εμπειρία ανανέωσης.": "The ultimate renewal experience.",
            "Με ζεστές πετσέτες και φρεσκάδα παραδοσιακού μπαρμπέρικου.": "With hot towels and traditional barber shop freshness.",
            "Καθαρές γραμμές για προσεγμένη εμφάνιση.": "Clean lines for a polished look.",
            "Φροντίδα και σχήμα για τη γενειάδα σας.": "Care and shaping for your beard.",
            "Φιλική εξυπηρέτηση για τους μικρούς μας φίλους.": "Friendly service for our young friends.",
            "Λεπτομερή περιποίηση για καθαρό βλέμμα.": "Detailed grooming for a clean look.",
            "Αναζωογόνηση τριχωτού και απομάκρυνση ρύπων.": "Scalp rejuvenation and impurity removal.",
            "Εξειδικευμένη φροντίδα για υγιές δέρμα.": "Specialized care for healthy skin.",
            "Αίσθηση φρεσκάδας και καθαριότητας.": "A feeling of freshness and cleanliness."
        },
        contactPage: {
            title: "Contact",
            subtitle: "We are at your disposal",
            info: "Information",
            social: "Social Media",
            visit: "Want to visit us?",
            visitDesc: "Book your appointment now and secure your spot.",
            maps: "Open in Maps",
            cta: "Book online now",
            ctaPhone: "Call for appointment"
        },
        days: {
            "Δευτέρα": "Monday",
            "Τρίτη": "Tuesday",
            "Τετάρτη": "Wednesday",
            "Πέμπτη": "Thursday",
            "Παρασκευή": "Friday",
            "Σάββατο": "Saturday",
            "Κυριακή": "Sunday"
        },
        common: {
            visitUs: "Visit Us",
            phone: "Phone",
            address: "Address",
            hours: "Opening Hours",
            closed: "Closed"
        },
        team: {
            title: "Our Team",
            subtitle: "The Master Barbers",
            barbers: {
                apostolis: {
                    name: "Apostolis",
                    role: "Master Barber & Founder",
                    bio: "With years of experience in traditional and modern barbering, Apostolis founded Marquise Barber Shop with a vision for ultimate men's grooming. He specializes in strict fades and classic scissor cuts."
                },
                aggelos: {
                    name: "Aggelos",
                    role: "Senior Barber",
                    bio: "Aggelos' passion for detail sets him apart. Clean lines, perfect beard trims, and dedication to service are what make him an irreplaceable member of our team."
                }
            }
        }
    }
};
