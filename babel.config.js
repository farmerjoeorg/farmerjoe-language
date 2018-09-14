module.exports = {
  presets: ['@babel/env', '@babel/preset-flow'],
  plugins: ['syntax-dynamic-import', '@babel/plugin-proposal-object-rest-spread'],
  ignore:  [
    './lib',
    './node_modules',
    './babel.config.js'
  ]
}