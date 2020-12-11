module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/, // all files .js
        exclude: /node_modules/, //exclude file folder name
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
};
