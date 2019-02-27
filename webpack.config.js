// const webpack           = require('webpack')
const path = require('path')
const glob = require('glob')
// const CopyWebpackPlugin = require('copy-webpack-plugin')
const CustomModuleIdsPlugin = require('custom-module-ids-webpack-plugin')

let i = 1
module.exports = {
  output:       {
    path:          path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2',
    publicPath:    '/',
  },
  entry:        ['./index.js'].concat(glob.sync('./languages/*/*.js')).reduce((modules, filePath) => {
    modules[
      path.join(
        path.relative(__dirname, path.dirname(filePath)),
        path.parse(filePath).name
      )
      ] = filePath
    return modules
  }, {}),
  module:       {
    rules: [
      {
        test:    /\.js$/,
        exclude: [
          path.resolve(__dirname, 'node_modules'),
          path.resolve(__dirname, 'dist'),
          path.resolve(__dirname, 'webpack.config.js')
        ],
        use:     {
          loader:  'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/preset-flow'],
            plugins: ['@babel/plugin-syntax-dynamic-import', '@babel/plugin-proposal-object-rest-spread', '@babel/plugin-proposal-class-properties'],
          }
        }
      }
    ]
  },
  mode:         'production',
  performance:  {hints: false},
  optimization: {
    splitChunks: {
      name: function (module, chunks, cacheGroupKey) {
        return chunks.length > 1 || chunks.length === 0 ? `languages/${cacheGroupKey}` : chunks[0].name
      }
    }
  },
  plugins: [
    new CustomModuleIdsPlugin({
      idFunction: function(libIdent, module) {
        return 'fjlang' + i++
      }
    })
  ]
}