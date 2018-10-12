const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const getConfig = (env) => {
  const isProd = env && env.production;
  const isDev = !isProd;

  const config = {
    devServer: {
      proxy: {
        '/api': 'http://localhost:8000'
      },
      host: '0.0.0.0'
    },
    entry: './src/index.js',
    output: {
      filename: 'main.js',
      path: __dirname + '/build/'
    },
    mode: isProd ? 'production' : 'development',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [{
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'index.html'
      })
    ],
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  };

  return config;
}
module.exports = getConfig;
