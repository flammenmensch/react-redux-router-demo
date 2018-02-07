const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env) => ({
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CopyPlugin([ { context: 'public', from: '**/*' } ])
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    port: 8080,
    open: true,
    inline: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: true,
      ignored: /node_modules/
    }
  }
});
