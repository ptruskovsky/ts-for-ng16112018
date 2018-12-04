module.exports = (config) => {
  config.set({
    frameworks: ["jasmine", "karma-typescript"],
    files: [
      { pattern: "./lesson/NepipenkoIgor/**/*.ts" }
    ],
    preprocessors: {
      "**/*.ts": ["karma-typescript"]
    },
    reporters: ["progress", "karma-typescript"],
    browsers: ["ChromeHeadless"],
    singleRun: false,
    karmaTypescriptConfig: {
      tsconfig: "./lesson/NepipenkoIgor/tsconfig.json",
      reports: {
        "html": "coverage",
        "text": ""
      }
    }
  })
}