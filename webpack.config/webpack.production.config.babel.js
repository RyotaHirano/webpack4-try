const merge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const baseConfig = require('./webpack.base.config.babel.js')

const plugins = [
  new ExtractTextPlugin({
    disable: false
  })
]

module.exports = merge(baseConfig, {
  mode: 'production',
  plugins,
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|svg|gif|ico)$/,
        use:
          [
            {
              loader: 'file-loader',
              options: {
                name: 'assets/[path][name].[ext]'
              }
            },
            {
              loader: 'image-webpack-loader',
              query: {
                mozjpeg: {
                  progressive: true,
                },
                gifsicle: {
                  interlaced: false,
                },
                optipng: {
                  optimizationLevel: 7,
                },
                pngquant: {
                  quality: '65-90',
                  speed: 4,
                },
              }
            }
          ]
      }
    ]
  }
})