// load environment variables from .env file
require('dotenv').config()

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://seniors-journey-test.dev-dp.dts-stn.com/',
    language: 'French'
  },
};
