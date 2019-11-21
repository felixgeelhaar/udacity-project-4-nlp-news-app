const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')

module.exports = {
  entry: './src/client/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.s?[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/client/views/index.html',
      filename: './index.html',
      title: 'NLP News App',
    }),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
      directoryIndex: 'index.html',
      cleanupOutdatedCaches: true,
      runtimeCaching: [
        {
          urlPattern: /api/,
          handler: 'NetworkFirst',
          options: {
            networkTimeoutSeconds: 10,
            cacheName: 'aylien-cache',
            expiration: {
              maxEntries: 5,
              maxAgeSeconds: 60,
            },
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
        {
          urlPattern: /index.html/,
          handler: 'CacheFirst',
        },
        {
          urlPattern: /styles/,
          handler: 'CacheFirst',
        },
        {
          urlPattern: /.js/,
          handler: 'CacheFirst',
        },
      ],
    }),
  ],
}
