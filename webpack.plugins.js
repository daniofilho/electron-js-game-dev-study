const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = [
  new ForkTsCheckerWebpackPlugin(),
  new CopyWebpackPlugin({
    patterns: [
      {
        from: path.resolve(__dirname, 'src/app/fonts'),
        to: path.resolve(__dirname, '.webpack/renderer/main_window/fonts'),
      },
      {
        from: path.resolve(__dirname, 'src/app/images'),
        to: path.resolve(__dirname, '.webpack/renderer/main_window/images'),
      },
    ],
  }),
];
