// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({ // Configuration for Playwright Test 
  testDir: './tests', // Specify the directory where the test files are located
  retries: 1, // Maximum number of retries for failed tests. Set to 0 to disable retries.
  //workers: 3, // Number of parallel workers to use for running tests. Set to 1 to run tests sequentially.
  timeout: 50 * 1000, // Maximum time one test can run for.
  expect: {
    timeout: 50 * 1000, // Maximum time expect() should wait for the condition to be met.
  },
  /* Run tests in files in parallel */
  //fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  //retries: process.env.CI ? 2 : 0, // Maximum number of retries for failed tests. Set to 0 to disable retries.
  /* Opt out of parallel tests on CI. */
  //workers: process.env.CI ? 1 : undefined, // Number of parallel workers to use for running tests. Set to 1 to run tests sequentially.
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    //trace: 'on-first-retry',

   // browserName: 'webkit', // Specify the browser to use for testing. Options: 'chromium', 'firefox', 'webkit'
   // headless: true, // Run tests in headless mode (without a visible browser window)
   // screenshot: 'on', // Capture screenshots for each test. Options: 'on', 'off', 'only-on-failure'
   // trace: 'on', //'retain-on-failure', // Enable tracing for debugging purposes. Options: 'on', 'off', 'retain-on-failure', 'on-first-retry'


  },
  /* Configure projects for major browsers */
  projects: [

    {
      name: 'safari',
      use: {
        /* Base URL to use in actions like `await page.goto('')`. */
        // baseURL: 'http://localhost:3000',

        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
        //trace: 'on-first-retry',

        browserName: 'webkit', // Specify the browser to use for testing. Options: 'chromium', 'firefox', 'webkit'
        headless: true, // Run tests in headless mode (without a visible browser window)
        screenshot: 'on', // Capture screenshots for each test. Options: 'on', 'off', 'only-on-failure'
        trace: 'on', //'retain-on-failure', // Enable tracing for debugging purposes. Options: 'on', 'off', 'retain-on-failure', 'on-first-retry'


      },
    },

    {
      name: 'chrome',
      use: {
        browserName: 'chromium',
        headless: true,
        screenshot: 'on',
        video: 'retain-on-failure',
        trace: 'on',
      }
    },

    // viewports for mobile devices

    {
      name: 'chromeMobile',
      use: {
        browserName: 'chromium',
        headless: false,
        screenshot: 'on',
        trace: 'on',
        viewport: { width: 720, height: 720 }, // Set the viewport size for the browser window
      }
    },

    {
      name: 'safariMobile',
      use: {
        
        browserName: 'webkit', // Specify the browser to use for testing. Options: 'chromium', 'firefox', 'webkit'
        headless: false, // Run tests in headless mode (without a visible browser window)
        screenshot: 'on', // Capture screenshots for each test. Options: 'on', 'off', 'only-on-failure'
        video: 'retain-on-failure', // Record video for each test. Options: 'on', 'off', 'retain-on-failure'
        ignoreHTTPSErrors: true, // Ignore HTTPS errors during testing ssl certificado
        permissions: ['geolocation'], // Grant geolocation permission to the browser context
        //geolocation: { latitude: 37.7749, longitude: -122.4194 }, // Set the geolocation coordinates for the browser context (San Francisco)
        trace: 'on', //'retain-on-failure', // Enable tracing for debugging purposes. Options: 'on', 'off', 'retain-on-failure', 'on-first-retry'
        ...devices['iPhone 12'], // Use the device configuration for iPhone 12

      },
    },



    /*{
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },*/
    /*
        {
          name: 'firefox',
          use: { ...devices['Desktop Firefox'] },
        },
        */
    /*
        {
          name: 'webkit',
          use: { ...devices['Desktop Safari'] },
        },
    */
    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

