/**
 * a list with cca2 codes of languages that FarmerJoe currently supports
 *
 * @type {string[]}
 */
import { includes, isArray } from 'lodash-es'

// regenerator runtime needs to be imported as regeneratorRuntime for the async functions
import regeneratorRuntime from 'regenerator-runtime/runtime'

export const supportedLanguages = [
  'ar', 'bg', 'bn', 'cs', 'da', 'de', 'el', 'en', 'es', 'et', 'fr', 'hi', 'hr', 'hu', 'it', 'lt', 'nl', 'pl', 'pt', 'ro', 'ru', 'sk', 'sl', 'tr', 'uk'
]
const localeCache               = {}

export async function loadLocale (locale, modules) {
  if (!isArray(modules)) {
    modules = [modules]
  }

  const loadedModules = await Promise.all(modules.map(module => {
      return import(
        /* webpackChunkName: "languages/[request]" */
        /* webpackExclude: /.*\.json$/ */
        `./languages/${locale}/${module}`
        )
    }
  ))
  return localeCache[locale] = modules.reduce((result, module, index) => {
    result[module] = loadedModules[index]
    return result
  }, localeCache[locale] || {})
}

export function isLocaleLoaded (locale, module) {
  return !!localeCache[locale] && (!module || module && !!localeCache[locale][module])
}

export function getLocaleData (locale) {
  return localeCache[locale]
}

export const isLocaleSupported = (locale) => {
  return includes(supportedLanguages, locale)
}