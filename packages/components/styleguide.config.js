const path = require("path");

module.exports = {
  components: "src/**/*.tsx",
  propsParser: require("react-docgen-typescript").parse,
  require: [path.join(__dirname, "../styles/build/prima.css")],
  title: "Prima Pattern Library",
  webpackConfig: require("react-scripts-ts/config/webpack.config.dev")
};
