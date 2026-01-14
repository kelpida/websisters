import { useTranslation } from 'react-i18next';

export const useLanguage = () => {
  const { t, i18n } = useTranslation();
  
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const currentLanguage = i18n.language;
  const isEnglish = i18n.language === 'en';
  const isGreek = i18n.language === 'gr';

  return {
    t,
    i18n,
    changeLanguage,
    currentLanguage,
    isEnglish,
    isGreek,
  };
};
