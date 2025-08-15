import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './en.json'
import vi from './vi.json'

i18n.use(initReactI18next).init({
  lng: 'vi',
  resources: {
    en: {
      translation: en
    },
    vi: {
      translation: vi
    }
  },
  supportedLngs: ['vi', 'en'],
  fallbackLng: ['vi', 'en']
})

export default i18n
