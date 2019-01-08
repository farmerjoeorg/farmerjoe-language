import countries from 'i18n-iso-countries/langs/hu.json'
import CountryUtil from '../../CountryUtil'

export default new CountryUtil({
  locale:              'hu',
  countryTranslations: countries.countries
})