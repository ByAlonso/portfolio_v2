import { createI18n } from 'vue-i18n'
import en from './localization/en.json'
import es from './localization/es.json'

const i18n = createI18n({
  locale: 'es',
  fallbackLocale: 'en',
  messages: { en: en, es: es },
})

export default i18n
