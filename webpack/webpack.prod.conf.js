const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

const buildWebpackConfig = merge(baseWebpackConfig, {
  //++ BUILD config 
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(png|jp(e)?g|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: `${baseWebpackConfig.externals.paths.assets}img`,
              useRelativePath: true
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 70,
              },
              optipng: {
                enabled: true,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4,
                strip: true,
              },
              gifsicle: {
                interlaced: true,
              },
              //! the webp option will enable WEBP
              webp: {
                preset: 'default',
                method: 4,
                interlaced: true,
                quality: 75,
              }
            }
          },
        ],
      }, 
    ]
  },
  plugins: []
})

module.exports = buildWebpackConfig