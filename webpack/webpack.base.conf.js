const path = require('path')
const fs = require('fs')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const WebpackBar = require('webpackbar')

const PATHS = {
  src: path.join(__dirname, '../src/client'),
  dist: path.join(__dirname, '../dist'),
  assets: 'assets/'
}

const PAGES_DIR = `${PATHS.src}/pug/pages/`
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'))

module.exports = {
  //++ BASE config 
  externals: {
    paths: PATHS
  },
  output: {
    path: PATHS.dist,
    publicPath: '/'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [
    {
      test: /\.pug$/,
      oneOf: [
        {
          resourceQuery: /^\?vue/,
          use: ['pug-plain-loader']
        },
        {
          use: ['pug-loader']
        }
      ]
    },
    {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: '/node_modules/',
    },
    {
      test: /\.ts$/,
      loader: 'babel-loader',
      exclude: '/node_modules/',
    },
    {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loader: {
          scss: 'vue-style-loader!css-loader!sass-loader',
          ts: 'ts-loader'
        }
      }
    },
    {
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: `${PATHS.assets}fonts`,
      }
    }, 
    {
      test: /\.s[ac]ss$/,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: { sourceMap: true }
        }, {
          loader: 'postcss-loader',
          options: { sourceMap: true, config: { path: `./postcss.config.js` } }
        }, {
          loader: 'sass-loader',
          options: { sourceMap: true }
        }
      ]
    },
    {
      test: /\.css$/,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: { sourceMap: true }
        }, {
          loader: 'postcss-loader',
          options: { sourceMap: true, config: { path: `./postcss.config.js` } }
        }
      ]
    }]
  },
  resolve: {
    alias: {
      '~': PATHS.src,
      '@': PATHS.src,
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new WebpackBar({
      name: 'client',
      color: 'green',
    }),
    new Dotenv(),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      { from: `${PATHS.src}/static`, to: '' },
    ]),
    ...PAGES.map(page => new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/${page}`,
      filename: `./${page.replace(/\.pug/,'.html')}`
    }))
  ],
}