const path = require("path");

module.exports = {
  mode: "development",
  entry: "./App.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "main.js",
  },

  target: "web",
  devServer: {
    port: "3000",
    static: ["./public"],
    open: true,
    hot: true,
    liveReload: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|svg)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
};