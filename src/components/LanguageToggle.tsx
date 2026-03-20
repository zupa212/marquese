"use client";

import { useLanguage } from '@/hooks/useLanguage';

export const LanguageToggle = () => {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="flex items-center bg-brand-charcoal/5 rounded-full p-1 border border-brand-charcoal/5">
            <button
                onClick={() => setLanguage('el')}
                className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full transition-all duration-300 ${language === 'el'
                        ? 'bg-brand-gold text-brand-charcoal shadow-sm'
                        : 'text-brand-charcoal/40 hover:text-brand-charcoal'
                    }`}
            >
                GR
            </button>
            <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full transition-all duration-300 ${language === 'en'
                        ? 'bg-brand-gold text-brand-charcoal shadow-sm'
                        : 'text-brand-charcoal/40 hover:text-brand-charcoal'
                    }`}
            >
                EN
            </button>
        </div>
    );
};
