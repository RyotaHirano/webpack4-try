const merge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const baseConfig = require('./webpack.base.config.babel.js')

const plugins = [
  new ExtractTextPlugin({
    filename: 'assets/css/style.[hash].css',
    allChunks: true
  }),
]

module.exports = merge(baseConfig, {
  mode: 'production',
  plugins
})