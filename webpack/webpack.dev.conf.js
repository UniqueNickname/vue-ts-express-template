const webpack =  require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const devWebpackConfig = merge(baseWebpackConfig, {
  //++ DEV config 
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  // watch: true,
  stats: 'errors-warnings',
  entry: {
    app: [
      'webpack-hot-middleware/client?path=/__webpack_hmr&reload=true',
      `${baseWebpackConfig.externals.paths.src}/index.ts`,
      `${baseWebpackConfig.externals.paths.src}/ts/index.ts`,
    ],
  },
  output: {
    filename: `${baseWebpackConfig.externals.paths.assets}js/[name].[hash].bundle.js`,
  },
  module: {
    rules: [
      {
        test: /\.(png|jp(e)?g|gif|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: `${baseWebpackConfig.externals.paths.assets}img`,
            useRelativePath: true
          }
        },
      }, 
    ]
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map'
    }),
    new MiniCssExtractPlugin({
      filename: `${baseWebpackConfig.externals.paths.assets}css/[name].[hash].css`,
    }),
  ]
})

module.exports = devWebpackConfig