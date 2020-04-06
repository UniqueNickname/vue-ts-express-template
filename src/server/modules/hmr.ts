const webpack = require('webpack')
const webpackDevConfig = require('../../../webpack/webpack.dev.conf')

const bundler = webpack(webpackDevConfig)

const webpackDevMiddleware = require('webpack-dev-middleware')(bundler, {
  stats: 'errors-warnings',
  hot: true,
})
const webpackHotMiddleware = require('webpack-hot-middleware')(bundler)

function hmr(app) {
  app.use(webpackDevMiddleware)
  app.use(webpackHotMiddleware)
}

module.exports = hmr