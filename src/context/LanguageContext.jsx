import { createContext, useContext, useMemo, useState } from 'react';
import { translations } from '../translations/translations';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => sessionStorage.getItem('language') || 'en');

  const changeLanguage = (nextLanguage) => {
    setLanguage(nextLanguage);
    sessionStorage.setItem('language', nextLanguage);
  };

  const value = useMemo(
    () => ({
      language,
      setLanguage: changeLanguage,
      t: translations[language]
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}
