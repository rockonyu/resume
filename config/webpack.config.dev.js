const webpack = require('webpack')
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')
const NodemonPlugin = require('nodemon-webpack-plugin')
const nodeExternals = require('webpack-node-externals')

module.exports = [
    {
        mode: 'development',
        entry: {
            server: './src/server/index.ts',
        },
        output: {
            path: resolve(__dirname, '..', 'build-dev'),
            filename: '[name].js',
            publicPath: '/',
        },
        target: 'node',
        node: {
            __dirname: false,
            __filename: false,
        },
        externals: nodeExternals(),
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'awesome-typescript-loader',
                },
            ],
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx'],
        },
        plugins: [
            new NodemonPlugin({
                script: resolve(__dirname, '..', 'build-dev', 'server.js'),
                watch: resolve(__dirname, '..', 'build-dev', 'server.js'),
            }),
        ],
    },
    {
        mode: 'development',
        entry: {
            main: [
                `webpack-hot-middleware/client?reload=true`,
                './src/client/index.tsx',
            ],
            vendor: ['react', 'react-dom'],
        },
        output: {
            publicPath: '/',
            path: resolve(__dirname, '..', 'build-dev', 'client'),
            filename: '[name].js',
            hotUpdateMainFilename: 'hot-update.[hash:6].json',
            hotUpdateChunkFilename: 'hot-update.[hash:6].js',
        },
        target: 'web',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'awesome-typescript-loader',
                },
                {
                    test: /\.css$/,
                    loaders: ['style-loader', 'css-loader'],
                },
            ],
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NamedModulesPlugin(),
            new HtmlWebpackPlugin({
                inject: true,
                filename: 'index.html',
                template: resolve(
                    __dirname,
                    '..',
                    'src',
                    'server',
                    'template.ts'
                ),
                //favicon: resolve(__dirname, '..', 'src', 'client', 'static', 'favicon.png'),
                alwaysWriteToDisk: true,
            }),
            new HtmlWebpackHarddiskPlugin({
                outputPath: resolve(__dirname, '..', 'build-dev', 'client'),
            }),
        ],
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx'],
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    commons: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendor',
                        chunks: 'all',
                    },
                },
            },
        },
        stats: {
            assetsSort: '!size',
            children: false,
            chunks: false,
            colors: true,
            entrypoints: false,
            modules: false,
        },
    },
]
