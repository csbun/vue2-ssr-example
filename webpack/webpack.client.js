const path = require('path');
const projectRoot = path.resolve(__dirname, '..');

module.exports = {
  entry: path.join(projectRoot, 'src/client.js'),
  output: {
    path: path.join(projectRoot, 'dist'),
    // publicPath: path.join(projectRoot, 'public'),
    filename: 'bundle.client.js',
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
