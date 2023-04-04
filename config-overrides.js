const { name } = require("./package");
const packageName = require("./package.json").name;
module.exports = {
  webpack: (config) => {
    config.output.library = `${name}-[name]`;
    config.output.libraryTarget = "umd";
    config.output.globalObject = "window";
    config.output.chunkLoadingGlobal = `webpackJsonp_${packageName}`;
    // config.output.publicPath = "/";
    return config;
  },
  devServer: (_) => {
    const config = _;

    config.headers = {
      "Access-Control-Allow-Origin": "*",
    };
    config.historyApiFallback = true;
    config.hot = false;
    config.watchContentBase = false;
    config.liveReload = false;

    return config;
  },
};
