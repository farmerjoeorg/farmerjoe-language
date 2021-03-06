// @flow
import { find, memoize, keys } from 'lodash-es'
import callCodes from './callCodes.json'

type Country = { name: string, key: string, cca2: string, callCode: number }

export default class CountryUtil {
  constructor ({locale, countryTranslations}) {
    this.locale              = locale.toLowerCase()
    this.countryTranslations = countryTranslations
    this.comparisonLocales   = [this.locale, 'de']
  }

  getCountries: () => Country[] = memoize(() => {
    const countries = keys(this.countryTranslations)
      .map(countryCode => this.makeCountryObject(countryCode))
    countries.sort((a, b) => a.name.localeCompare(b.name, this.comparisonLocales))
    return countries
  })

  getCountriesTel: () => Country[] = memoize(() => {
    return this.getCountries().filter(c => !!c.callCode)
  })

  findCountry (predicate): ((Country) => boolean) => ?Country {
    return find(this.getCountries(), predicate)
  }

  findCountryByCCA2 (cca2: string): (string) => ?Country {
    return this.findCountry({cca2: cca2.toUpperCase()})
  }

  findCountryByName (name: string): (string) => ?Country {
    const nameLowerCase = name.toLocaleLowerCase(this.comparisonLocales)
    return this.findCountry(({name}) => {
      const countryNameLowerCase = name.toLocaleLowerCase(this.comparisonLocales)
      return nameLowerCase === countryNameLowerCase
    })
  }

  makeCountryObject (countryCode): (string) => Country {
    const countryCodeUC = countryCode.toUpperCase()
    const callCode      = callCodes[countryCodeUC] || null

    return {
      name:     this.countryTranslations[countryCodeUC],
      key:      countryCodeUC,
      cca2:     countryCodeUC,
      callCode: callCode
    }
  }

  getCountryName: (?string) => ?string = memoize((value) => {
    let country = null
    if (value) {
      // new values are country codes
      country = this.findCountryByCCA2(value)
    }
    if (!country && value) {
      // old values are whatever the user entered manually, try to find it by name
      country = this.findCountryByName(value)
    }
    return country ? country.name : value
  })
}