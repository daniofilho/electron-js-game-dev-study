module.exports = [
  // Add support for native node modules
  {
    // We're specifying native_modules in the test because the asset relocator loader generates a
    // "fake" .node file which is really a cjs file.
    test: /native_modules\/.+\.node$/,
    use: 'node-loader',
  },
  {
    test: /\.(m?js|node)$/,
    parser: { amd: false },
    use: {
      loader: '@vercel/webpack-asset-relocator-loader',
      options: {
        outputAssetBase: 'native_modules',
      },
    },
  },
  {
    test: /\.tsx?$/,
    exclude: /(node_modules|\.webpack)/,
    use: {
      loader: 'ts-loader',
      options: {
        transpileOnly: true,
      },
    },
  },
  {
    test: /\.s[ac]ss$/i,
    use: ['style-loader', 'css-loader', 'sass-loader'],
  },
  {
    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'fonts/',
          publicPath: 'fonts/',
        },
      },
    ],
  },
  {
    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
    use: {
      loader: 'url-loader',
      options: {
        limit: 500 * 1024, // 500Kb
        outputPath: 'images',
        publicPath: '/src/images',
        name: '[name]-[hash:6].[ext]',
        esModule: false,
      },
    },
  },
];
