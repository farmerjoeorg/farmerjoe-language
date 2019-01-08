import countries from 'i18n-iso-countries/langs/en.json'
import CountryUtil from '../../CountryUtil'

export default new CountryUtil({
  locale:              'en',
  countryTranslations: countries.countries
})