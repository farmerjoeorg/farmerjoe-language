import countries from 'i18n-iso-countries/langs/ru.json'
import CountryUtil from '../../CountryUtil'

export default new CountryUtil({
  locale:              'ru',
  countryTranslations: countries.countries
})