import countries from 'i18n-iso-countries/langs/ar.json'
import CountryUtil from '../../CountryUtil'

export default new CountryUtil({
  locale:              'ar',
  countryTranslations: countries.countries
})