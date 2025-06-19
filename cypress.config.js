/* eslint-disable no-unused-vars */
const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {},
        retries: 1,
        viewportWidth: 1920,
        viewportHeight: 1080,
        baseUrl: "http://localhost:3000",
    },
});
/* eslint-enable no-unused-vars */