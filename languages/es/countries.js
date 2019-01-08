import countries from 'i18n-iso-countries/langs/es.json'
import CountryUtil from '../../CountryUtil'

export default new CountryUtil({
  locale:              'es',
  countryTranslations: countries.countries
})