const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");


async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", browserify.default(config));
  return config;
}


module.exports = defineConfig({
  defaultCommandTimeout: 6000,
  projectId: "cyDemo",
  e2e: {
    setupNodeEvents,
    specPattern: "cypress/integration/features/**/*.feature",
    pageLoadTimeout: 15000,
  },
});
