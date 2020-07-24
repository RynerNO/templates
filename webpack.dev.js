const path = require('path');
const { merge } = require('webpack-merge');
const Webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');
require('dotenv').config()
module.exports = merge(common, {
  mode: 'development',
  entry: ['./src/client/app.js'],
  output: {
    chunkFilename: 'chunks/[hash].[name].js',
    filename: '[hash].[name].js',
    publicPath: '/',
    crossOriginLoading: "anonymous",
    path: path.resolve(__dirname, 'dist/public')
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: "/",
    port: 3000,
    hot: true,
  },
  plugins: [new Webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      cache: true,
      hash: true,
      title: process.env.APP_TITLE,
      filename: 'index.html',
      templateContent: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
      </head>
      <body>
        <div id="app"></div>
      </body>
      </html>
      `,
      meta: { viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'},
      output: path.resolve(__dirname, 'dist', 'public'),
      xhtml: true,
    })
  ],
  module: {
    rules: [
      {
        test: /\.m?js/i,
        use: [
          { loader: 'babel-loader', options: { compact: false }}
        ],
        exclude: /node_modules/,
      },
    
    ]
  }
})