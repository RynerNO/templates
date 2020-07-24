const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
  node: {
    fs: "empty"
 },
  output: {
    chunkFilename: 'chunks/[id].[hash].js',
    filename: 'app.[hash].js',
    publicPath: '/',
    crossOriginLoading: "anonymous",
    path: path.resolve(__dirname, 'dist/public')
  },
  plugins: [new VueLoaderPlugin()],
  module: {
    rules: [
      {
        test: /\.vue$/,

        use: [
          'vue-loader',
        ]
      },
      {
        test: /\.pug$/,
        oneOf: [
          {
            resourceQuery: /^\?vue/,
            use: ['pug-plain-loader']
          }
        ]
      },
 
      {
        test: /\.svg/,
        use: {
            loader: 'svg-url-loader',
            options: {}
        }
      },
      {
        test: /\.(eot|woff|woff2|ttf|jpg|png)([\?]?.*)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'assets/[hash].[ext]',
          }
      },
      },
      {
        test: /\.sass$/i,
        use: [
          'vue-style-loader',
          'css-loader',
          'postcss-loader', 
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sassOptions: {
                indentedSyntax: true
              }
            },
           
          },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: ['./src/client/styles/colors.sass', './src/client/styles/mixins.sass']
            },
          }
        ],
      },
      {
        test: /\.css$/i,
        use: [
          'vue-style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
            }
          },
        ]
      },
    ]
  }
}