const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8082,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "cart",
      filename: "remoteEntry.js",
      // sets the name of manifest file.
      exposes: {
        "./CartShow": "./src/bootstrap", //Aliases
      },
      shared: {
        faker: {
          singleton: true,
          // Only ones
        },
      },
      // shared: ['faker']
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
