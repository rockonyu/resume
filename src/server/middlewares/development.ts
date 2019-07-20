import * as webpack from 'webpack';
import * as webpackDevMiddleware from 'webpack-dev-middleware';
import * as webpackHotMiddleware from 'webpack-hot-middleware';
import * as webpackConfig from '../../../config/webpack.config.dev';

function setup(app) {
    const compiler = webpack(webpackConfig[1]);

    app.use(
        webpackDevMiddleware(compiler, {
            publicPath: webpackConfig[1].output.publicPath,
            stats: {
                colors: true,
            },
        }),
    );

    app.use(webpackHotMiddleware(compiler));

    app.use(function(err, req, res, next) {
        console.error(err.stack);
        res.status(500).send('Something broke!');
    });
}

export default setup;
