import { defineConfig } from "cypress";

export default defineConfig({
  allowCypressEnv: false,

  e2e: {
    experimentalStudio: true,

    // ⭐ Increase timeouts to 12 seconds
    defaultCommandTimeout: 12000,
    requestTimeout: 12000,
    responseTimeout: 12000,
    pageLoadTimeout: 60000,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
