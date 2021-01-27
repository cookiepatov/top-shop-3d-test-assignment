const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: [path.resolve(__dirname, "scripts/main.js"),
  path.resolve(__dirname, "scripts/css.js")],
  module: {
    rules: [
      { test: /\.css$/, use: [ 'style-loader', 'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions:{
            plugins: [
              [
                'autoprefixer',{}
              ]
            ]
          }
        }}] },
      { test: /\.(js)$/, use: 'babel-loader' },
      {
        test: /\.(|woff|woff2|eot|ttf|otf)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[contenthash].[ext]',
            },
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[contenthash].[ext]',
            },
          }
        ]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html")
    }),
    new CopyPlugin({
      patterns: [
        { from: "images", to: "images" }
      ],
    }),
  ],
  mode: 'production'
}
