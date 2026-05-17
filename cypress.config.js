import { defineConfig } from "cypress";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

export default defineConfig({
  experimentalMemoryManagement: true,
  numTestsKeptInMemory: 0,
  video: false,
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports/mochawesome",
    overwrite: false,
    html: true,
    json: true,
    charts: true,
    reportPageTitle: "Cypress Test Report",
  },
  env: {
    coverage: false,
  },

  e2e: {
    setupNodeEvents(on, config) {
      require("@cypress/code-coverage/task")(on, config);

      return config;
    },
  },
});
