import { createContext, useContext, useState, ReactNode } from 'react';
import { Language, ContentLocale } from '../types/content';
import contentData from '../data/content.json';

interface LanguageContextType {
    lang: Language;
    setLang: (lang: Language) => void;
    data: ContentLocale;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [lang, setLang] = useState<Language>('IT');
    const data = (contentData as any)[lang.toLowerCase()] as ContentLocale;

    return (
        <LanguageContext.Provider value={{ lang, setLang, data }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error("useLanguage debe usarse dentro de LanguageProvider");
    return context;
};