"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { translations, type Language } from "./translations";

type LanguageContextValue = {
  lang: Language;
  setLang: (next: Language) => void;
  toggleLang: () => void;
  t: (typeof translations)[Language];
};

const STORAGE_KEY = "avejo-language";

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    if (typeof window === "undefined") return "en";
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved === "pt" || saved === "en" ? saved : "en";
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (next: Language) => {
    if (next === lang) return;
    window.localStorage.setItem(STORAGE_KEY, next);
    setLangState(next);
    window.location.reload();
  };

  const toggleLang = () => {
    const next = lang === "en" ? "pt" : "en";
    setLang(next);
  };

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggleLang,
      t: translations[lang],
    }),
    [lang],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
