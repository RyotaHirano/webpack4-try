const merge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
import { resolve } from 'path'
const rootResolve = pathname => resolve(__dirname, pathname)

const baseConfig = require('./webpack.base.config.babel.js')

const plugins = [
  new ExtractTextPlugin({
    disable: true
  })
]

module.exports = merge(baseConfig, {
  mode: 'development',
  plugins,
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|svg|gif|ico)$/,
        use:
          [
            {
              loader: 'url-loader',
              options: {
                limit: 9000
              }
            }
          ]
      }
    ]
  },
  devServer: {
    contentBase: rootResolve('public'),
    publicPath: '/',
    inline: true,
    hot: true,
    host: '0.0.0.0'
  }
})