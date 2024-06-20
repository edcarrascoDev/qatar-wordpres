const path = require('path');

module.exports = {
  entry: {
    main: './js/public.js',
  },
  output: {
    filename: 'public.min.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Clean the output directory before emit.
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', ['@babel/preset-react', { runtime: 'automatic' }]],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
        include: /node_modules/,
      },
    ],
  },
};
