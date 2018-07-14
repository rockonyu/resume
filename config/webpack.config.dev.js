const webpack = require('webpack');
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

module.exports = {
    mode: 'development',
    entry: [
      './src/client/index.tsx',
      `webpack-hot-middleware/client?http://localhost:${process.env.HTTP_PORT}&reload=true`,
    ],
    output: {
      publicPath: '/',
      path: resolve(__dirname, '..', 'build', 'client'),
      filename: '[name].js',
      hotUpdateMainFilename: 'hot-update.[hash:6].json',
      hotUpdateChunkFilename: 'hot-update.[hash:6].js'
    },
    target: 'web',
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
          loaders: [
            'style-loader',
            'css-loader',
          ],
        },
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new HtmlWebpackPlugin({
        inject: true,
        template: resolve(__dirname, '..', 'src', 'client', 'index.html'),
        //favicon: resolve(__dirname, '..', 'src', 'client', 'static', 'favicon.png'),
        alwaysWriteToDisk: true
      }),
      new HtmlWebpackHarddiskPlugin({
        outputPath: resolve(__dirname, '..', 'build-dev', 'client')
      })
    ],
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            chunks: 'all'
          }
        }
      }
    },
    stats: {
      assetsSort: '!size',
      children: false,
      chunks: false,
      colors: true,
      entrypoints: false,
      modules: false
    }
  };