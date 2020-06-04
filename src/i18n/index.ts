/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */

import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const supportedLanguages = ['en', 'ko'];
const supportedFiles = ['common', 'home', 'content', 'error'];
const resources = supportedLanguages.reduce((langObj, lang) => {
  const supportedFileObject = supportedFiles.reduce((fileObj, file) => ({
    ...fileObj,
    [file]: require(`@/i18n/locales/${lang}/${file}`).default,
  }), {});
  return {
    ...langObj,
    [lang]: supportedFileObject,
  };
}, {});

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'ko',
    fallbackLng: ['en', 'ko'],
    defaultNS: 'home',
    debug: process.env.NODE_ENV === 'development',
    resources,
  });

export default i18next;
