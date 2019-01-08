import countries from 'i18n-iso-countries/langs/de.json'
import CountryUtil from '../../CountryUtil'

export default new CountryUtil({
  locale:              'de',
  countryTranslations: countries.countries
})