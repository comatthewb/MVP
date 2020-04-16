const path = require("path");
const SRC_DIR = path.join(__dirname, "/client");
const DIST_DIR = path.join(__dirname, "/dist");
import css from "file.css";

module.exports = {
  entry: `${SRC_DIR}/index.js`,
  output: {
    filename: "bundle.js",
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.js?/,
        include: SRC_DIR,
        use: ["style-loader", "css-loader"],
        loader: "babel-loader",
      },
    ],
  },
};
