import { resolve } from 'path'
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackConfig = require('../../../config/webpack.config.dev')

import Layout from '../../client/components/Layout'

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

    // all other requests be handled by UI itself
    app.get('*', (req, res) => {
        // res.send(
        //   Layout({
        //     title: "123",
        //     body: null,
        //     styles: null
        //   })
        // );
        res.sendFile(resolve(__dirname, 'client', 'index.html'))
    })
}
