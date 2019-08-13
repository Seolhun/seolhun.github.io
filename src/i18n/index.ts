import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import homeEn from './locales/en/home';
import homeKo from './locales/ko/home';

const isDev = process.env.NODE_ENV === 'development';

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: ['en', 'ko'],
    defaultNS: 'home',
    debug: isDev,
    resources: {
      ko: {
        home: homeKo,
      },
      en: {
        home: homeEn,
      },
    },
  });

export default i18next;
