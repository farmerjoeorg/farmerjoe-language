const fs = require('fs')
const metadata = require('libphonenumber-js/metadata.min')

const callCodes = {}

Object.keys(metadata.countries)
  .forEach(cca2 => {
    callCodes[cca2] = metadata.countries[cca2][0]
  })

fs.writeFileSync('./callCodes.json', JSON.stringify(callCodes))