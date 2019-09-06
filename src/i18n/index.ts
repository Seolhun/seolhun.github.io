import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const supportedLanguages = ['en', 'ko'];
const supportedFiles = ['home', 'tech'];
const resources = supportedLanguages.reduce((langObj, lang) => {
  const supportedFileObject = supportedFiles.reduce((fileObj, file) => {
    return {
      ...fileObj,
      [file]: require(`@/i18n/locales/${lang}/${file}`).default,
    };
  }, {});
  return {
    ...langObj,
    [lang]: supportedFileObject,
  };
}, {});

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: ['en', 'ko'],
    defaultNS: 'home',
    debug: process.env.NODE_ENV === 'development',
    resources,
  });

export default i18next;
