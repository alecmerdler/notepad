import * as webpack from 'webpack';
import * as path from 'path';

export default {
  entry: {
    app: './app/app.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-bundle.js',
    chunkFilename: '[name]-[chunkhash].js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          }
        ]
      }
    ]
  },
  plugins: [

  ]
} as webpack.Configuration;
