const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://magento.softwaretestingboard.com",
    viewportWidth: 1280,
    viewportHeight: 800,
    fixturesFolder: "cypress/fixtures",
    supportFile: "cypress/support/commands.js",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
