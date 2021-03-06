const path = require('path');
const transformInferno = require('ts-transform-inferno').default;

module.exports = {
  entry: {
    app: './public/components/app.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    publicPath: 'static/',
    filename: '[name]-bundle.js',
    chunkFilename: '[name]-[chunkhash].js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          getCustomTransformers: () => ({
            before: [transformInferno({classwrap: true})]
          })
        }
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
        options: {
          modules: true,
        }
      },
    ]
  },
  plugins: [],
  devtool: 'cheap-module-source-map',
  stats: 'minimal',
};
