const merge = require('webpack-merge')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const common = require('./webpack.common')

module.exports = merge.smart(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  stats: 'verbose',
  plugins: [
    new CleanWebpackPlugin({
      // Simulate the removal of files
      dry: true,
      // Write Logs to Console
      verbose: true,
      // Automatically remove all unused webpack assets on rebuild
      cleanStaleWebpackAssets: true,
      protectWebpackAssets: false,
    }),
  ],
})
