const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const buildWebpackConfig = merge(baseWebpackConfig, {
  //++ BUILD config 
  mode: 'production',
  output: {
    filename: `${baseWebpackConfig.externals.paths.assets}js/[name].js`,
  },
  stats: 'errors-only',
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
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${baseWebpackConfig.externals.paths.assets}css/[name].css`,
    }),
  ]
})

module.exports = buildWebpackConfig