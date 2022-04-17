const path = require("path");
const FileListPlugin = require("./plugins/ConsoleLogOnBuildWebpackPlugin/index.js");
const HelloPlugin = require("./plugins/HelloPlugin/index.js");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "my-first-webpack.bundle.js",
  },
  plugins: [
    new HelloPlugin({ options: true }),
    new FileListPlugin(),
  ],
};
