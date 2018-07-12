const webpack = require('webpack');
const path = require('path');

module.exports = [
  {
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    entry: {
      app: './src/app.ts',
    },
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].js',
      publicPath: '/'
    },
    target: 'node',
    node: {
      __dirname: false,
      __filename: false,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader?presets[]=env',
          query: {
              presets: ['env'],
          },
        },
        {
          test: /\.tsx?$/,
          loader: 'awesome-typescript-loader'
        },
        {
          test: /\.css$/,
          loaders: ['css-loader'],
        },
      ]
    }
  }
];