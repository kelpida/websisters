import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locales/en.json';
import grTranslations from './locales/gr.json';

const resources = {
  en: { translation: enTranslations },
  gr: { translation: grTranslations },
};

// Get stored language or default to 'en'
const storedLanguage = localStorage.getItem('language') || 'en';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: storedLanguage,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
