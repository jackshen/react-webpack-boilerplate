const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  devServer: {
    open: true,
    writeToDisk: true,
  },
  devtool: "inline-source-map",
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        exclude: /node_modules/,
        loader: "babel-loader",
        test: /\.(jsx?)$/,
      },
    ],
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "./dist"),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ESLintPlugin(),
    new HtmlWebpackPlugin({ hot: true, template: "./public/index.html" }),
  ],
  resolve: {
    alias: {
      Components: path.resolve(__dirname, "./src/components"),
      Helpers: path.resolve(__dirname, "./src/helpers"),
      Hooks: path.resolve(__dirname, "./src/hooks"),
    },
    extensions: [".js", ".jsx"],
  },
};
