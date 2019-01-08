import countries from 'i18n-iso-countries/langs/uk.json'
import CountryUtil from '../../CountryUtil'

export default new CountryUtil({
  locale:              'uk',
  countryTranslations: countries.countries
})