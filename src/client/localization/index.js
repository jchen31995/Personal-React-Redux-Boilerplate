import { addLocaleData } from 'react-intl'

import en from 'react-intl/locale-data/en'
import es from 'react-intl/locale-data/es'
import fr from 'react-intl/locale-data/fr'
import zh from 'react-intl/locale-data/zh'
import it from 'react-intl/locale-data/it'

import enMessages from './languages/en-US'
import esMessages from './languages/es-ES'
import zhMessages from './languages/zh-CN'
import frMessages from './languages/fr-FR'
import itMessages from './languages/it-IT'

const supportedLanguages = ['en-US', 'es-ES', 'fr-FR', 'it-IT', 'zh-CN']

addLocaleData([...en, ...es, ...fr, ...it, ...zh])

const language = {
  'en-US': enMessages,
  'es-ES': esMessages,
  'fr-FR': frMessages,
  'it-IT': itMessages,
  'zh-CN': zhMessages,
}

const locale = supportedLanguages.includes(process.env.LOCALE) ? process.env.LOCALE : 'en-US'

const translatedMessages = language[locale]

export { locale, translatedMessages }
