const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "39wc3g",
  video:false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      this.chromeWebSecurity=false
    },
  },
})
