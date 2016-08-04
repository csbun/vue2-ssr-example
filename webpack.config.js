var path = require('path');
var projectRoot = __dirname;

module.exports = {
  target: 'node', // !different
  entry: './src/main.js',
  output: {
    libraryTarget: 'commonjs2', // !different
    path: path.join(projectRoot, 'dist'),
    // publicPath: path.join(projectRoot, 'public'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue',
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: projectRoot,
        exclude: /node_modules/,
      },
    ]
  },
  // vue: {
  //   loaders: [
  //     'vue-style-loader',
  //     'css-loader',
  //   ],
  // },
};
