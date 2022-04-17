module.exports = {
  ...require("./jest.config"),
  roots: ["src"],
  testPathIgnorePatterns: ["<rootDir>/src/config"],
  collectCoverageFrom: ["<rootDir>/**/*.ts", "!<rootDir>/**/index.ts"],
  coveragePathIgnorePatterns: ["__stubs__/*", "__tests__/*", "__mocks__/*"],
};
