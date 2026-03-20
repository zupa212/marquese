"use client";

import React, { createContext, useContext, useState } from 'react';
import { Language, translations } from '@/lib/i18n';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: typeof translations['el'];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [language, setLanguage] = useState<Language>('el');
    const [isMounted, setIsMounted] = useState(false);

    React.useEffect(() => {
        const saved = localStorage.getItem('marquise-lang') as Language;
        if (saved && (saved === 'el' || saved === 'en')) {
            setLanguage(saved);
        }
        setIsMounted(true);
    }, []);

    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang);
        localStorage.setItem('marquise-lang', lang);
    };

    const t = translations[language];

    // Prevent hydration mismatch by only rendering after mount if needed, 
    // or just ensure consistent initial state. 
    // Actually, as long as initial state is consistent 'el', we are good.

    return (
        <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
