const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackConfig = require('../../../config/webpack.config.dev')

module.exports = function setup(app) {
    const compiler = webpack(webpackConfig[1])

    app.use(
        webpackDevMiddleware(compiler, {
            publicPath: webpackConfig[1].output.publicPath,
            stats: {
                colors: true,
            },
        })
    )

    app.use(webpackHotMiddleware(compiler))

    app.use(function(err, req, res, next) {
        console.error(err.stack)
        res.status(500).send('Something broke!')
    })
}
