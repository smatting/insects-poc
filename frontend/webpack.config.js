const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,  // the extra `x?` must be added for JSX files
        exclude: /node_modules/,
        loader: "babel-loader"  // Babel is configured in .babelrc
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']  // .jsx files must be included
  },
};
