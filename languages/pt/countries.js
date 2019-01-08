import countries from 'i18n-iso-countries/langs/pt.json'
import CountryUtil from '../../CountryUtil'

export default new CountryUtil({
  locale:              'pt',
  countryTranslations: countries.countries
})