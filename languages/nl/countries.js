import countries from 'i18n-iso-countries/langs/nl.json'
import CountryUtil from '../../CountryUtil'

export default new CountryUtil({
  locale:              'nl',
  countryTranslations: countries.countries
})