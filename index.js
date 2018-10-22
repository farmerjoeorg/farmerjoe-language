/**
 * a list with cca2 codes of languages that FarmerJoe currently supports
 *
 * @type {string[]}
 */
import { includes } from 'lodash-es'
import * as englishLocale from './languages/en'

// regenerator runtime needs to be imported as regeneratorRuntime for the async functions
import regeneratorRuntime from 'regenerator-runtime/runtime'

export const supportedLanguages = [
  'ar', 'bg', 'bn', 'cs', 'da', 'de', 'el', 'en', 'es', 'et', 'fr', 'hi', 'hr', 'hu', 'it', 'lt', 'nl', 'pl', 'pt', 'ro', 'ru', 'sk', 'sl', 'tr', 'uk'
]
const localeCache = {
  en: englishLocale // default language
}

export async function loadLocale (locale) {
  return localeCache[locale] = await import(`./languages/${locale}`)
}

export function isLocaleLoaded (locale) {
  return !!localeCache[locale]
}

export function getLocaleData (locale) {
  return localeCache[locale]
}

export const isLocaleSupported = (locale) => {
  return includes(supportedLanguages, locale)
}