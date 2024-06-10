import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import preprocessor from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";
import dotenv from 'dotenv'

dotenv.config()

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8080',
    specPattern: "cypress/e2e/**/*.*",
    async setupNodeEvents(on, config) {
      // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
      await preprocessor.addCucumberPreprocessorPlugin(on, config);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin.default(config)],
        })
      );
      /**
       * existing env have to be kept
       * => contains preprocessor configuration
       */
      config.env = {
        ...config.env,
      }

      config.screenshotsFolder = "cypress/output/screenshots"
      config.videosFolder = "cypress/output/videos"
      config.video = false
      config.chromeWebSecurity = false

      // modify config values
      config.pageLoadTimeout = 20000
      config.defaultCommandTimeout = 10000
      config.viewportWidth = 1920
      config.viewportHeight = 1080
      config.userAgent = "tns_analytics_qs3-1fqsfd-32fQSD-Ff34"
      config.scrollBehavior = false
      config.includeShadowDom = true
      // IMPORTANT return the updated config object
      return config

    },
  },
});

