const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8080,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container", //Only needed for Remotes
      // Lists projects that the Container can search to get addition code
      remotes: {
        //Load the file at the listed url if something in Container has an omport like: import abc from 'products
        products: "products@http://localhost:8081/remoteEntry.js",
        // "Name" of property in products webpack config file && URL
        cart: "cart@http://localhost:8082/remoteEntry.js",
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
