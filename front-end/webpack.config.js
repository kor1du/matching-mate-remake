const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development", // 1
  entry: "./src/index.tsx", // 2
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|png|svg|gif)$/,
        type: "asset/resource",
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/",
  },
  devServer: {
    port: 3000,
    open: true,
    historyApiFallback: true,
  },
};
