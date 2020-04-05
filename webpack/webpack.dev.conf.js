const webpack =  require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const devWebpackConfig = merge(baseWebpackConfig, {
  //++ DEV config 
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  watch: true,
  stats: 'errors-warnings',
  devServer: {
    contentBase: baseWebpackConfig.externals.paths.dist,
    port: 3000,
    overlay: {
      warnings: true,
      errors: true
    }
  },
  output: {
    filename: `${baseWebpackConfig.externals.paths.assets}js/[name].[hash].js`,
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