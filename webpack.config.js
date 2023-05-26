const { Configuration } = require('webpack');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader/dist/index')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

/**
 * @type {Configuration}
 */
const config = {
  mode: "development",
  entry: "./src/main.ts",
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader"
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          configFile: path.resolve(process.cwd(), 'tsconfig.json'),
          appendTsSuffixTo: [/\.vue$/]
        }
      }
    ]
  },
  output: {
    filename: "[hash].js",
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.vue', '.ts', '.js']
  },
  stats: "errors-only",
  devServer: {
    port: 9001,
    open: true,
    proxy: {
      './api': ''
    }
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./public/index.html"
    }),
    new VueLoaderPlugin(),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ['Your application is running here:  http://localhost:9001/']
      }
    })
  ],
  // externals: {
  //   vue: "Vue"
  // }
}


module.exports = config
