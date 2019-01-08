import countries from 'i18n-iso-countries/langs/fr.json'
import CountryUtil from '../../CountryUtil'

export default new CountryUtil({
  locale:              'fr',
  countryTranslations: countries.countries
})