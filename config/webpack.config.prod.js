const webpack = require('webpack')
const path = require('path')

module.exports = [
    {
        mode: 'production',
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx'],
        },
        entry: {
            ampify: './src/ampify.tsx',
        },
        output: {
            path: path.resolve(__dirname, '..', 'build'),
            filename: '[name].js',
            publicPath: '/',
        },
        target: 'node',
        node: {
            __dirname: false,
            __filename: false,
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'awesome-typescript-loader',
                },
            ],
        },
    },
]
