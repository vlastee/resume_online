const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    home: './src/main.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({  // Also generate a html
        filename: 'index.html',
        template: 'src/index.html'
      })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { 
        test: /\.(png|jpe?g|gif)$/,
        use: [
        {
            loader: 'file-loader',
            options: {
                outputPath: 'images',
            },
        },
        ],
    },
    { test: /jquery-mousewheel/, loader: "imports-loader?define=>false&this=>window" },
      { test: /malihu-custom-scrollbar-plugin/, loader: "imports-loader?define=>false&this=>window" },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
    ]
  }
};