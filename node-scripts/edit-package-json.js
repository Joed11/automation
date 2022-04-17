const fs = require("fs");
const currentPackageFile = JSON.parse(fs.readFileSync("./package.json"));

const overwrites = {
  main: "dist/index.js",
  author: "Joe DiMartino",
  license: "MIT",
  scripts: {
    compile: "./node_modules/.bin/tsc",
    dev: "npm run compile && npm run start",
    start: "node dist/index.js",
    test: "jest",
    "test:unit": "./node_modules/.bin/jest --config jest.config.unit.js",
  },
};

const updatedPackage = {
  ...currentPackageFile,
  ...overwrites,
};

fs.writeFileSync("package.json", JSON.stringify(updatedPackage, null, 2));
