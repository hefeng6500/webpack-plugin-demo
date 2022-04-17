const webpack = require("webpack");

const config = require("./webpack.config.js");

const compiler = webpack(config);

compiler.run((err, stats) => {
  // [Stats Object](#stats-object)
  console.log("start run!");

  compiler.close((closeErr) => {
    console.log("close run!");
  });
});
