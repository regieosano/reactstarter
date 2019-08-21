const path = require("path");
const webpack = require("webpack");

exports.loadSCSS = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: /\.scss$/,
        include,
        exclude,

        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
});

exports.loadImages = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        include,
        exclude,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true,
              disable: true,
            },
          },
        ],
      },
    ],
  },
});

exports.devServer = ({ port } = {}) => ({
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, "public/"),
    stats: "errors-only",
    port,
    publicPath: "http://localhost:4939/dist/",
    hotOnly: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
