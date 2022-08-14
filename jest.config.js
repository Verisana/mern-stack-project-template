module.exports = {
  collectCoverageFrom: ["packages/*/src/**/*.test.{ts, tsx}"],
  coveragePathIgnorePatterns: ["/node_modules/"],
  testPathIgnorePatterns: ["/node_modules/"],
  transformIgnorePatterns: ["/node_modules/"]
}
