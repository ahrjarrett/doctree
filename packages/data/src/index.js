import fs from "fs";

const encoding = "utf8";
require.extensions[".org"] = (module, filename) => {
  module.exports = fs.readFileSync(filename, encoding);
};

module.exports = {
  readme: require("./readme.org"),
  test: require("./org/test.org"),
  cheatsheet: require("./org/cheatsheet.org"),
  softskills: require("./org/softskills.org")
};
