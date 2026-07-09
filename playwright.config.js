// @ts-check
import { defineConfig, devices} from '@playwright/test';
//import config from './playwright.config.js';

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
export default defineConfig({ // Configuration for Playwright Test 
  testDir: './tests', // Specify the directory where the test files are located
  timeout: 50 * 1000, // Maximum time one test can run for.
  expect: {
  timeout: 50 * 1000, // Maximum time expect() should wait for the condition to be met.
  },
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    //trace: 'on-first-retry',

    browserName: 'chromium', // Specify the browser to use for testing. Options: 'chromium', 'firefox', 'webkit'
    headless: false, // Run tests in headless mode (without a visible browser window)
    screenshot: 'on', // Capture screenshots for each test. Options: 'on', 'off', 'only-on-failure'
    trace: 'on', //'retain-on-failure', // Enable tracing for debugging purposes. Options: 'on', 'off', 'retain-on-failure', 'on-first-retry'
    

  },



//module.exports = config; // Export the configuration object for Playwright Test

  /* Configure projects for major browsers */
 /* projects: [
    {
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
    //],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

