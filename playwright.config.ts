import { PlaywrightTestConfig } from '@playwright/test';

const config : PlaywrightTestConfig ={
  timeout: 60000,
  retries: 0,
  use: {
    headless: true,
    trace: 'on-first-retry',
    viewport: {width: 1280, height: 720},
    actionTimeout: 1500,
    ignoreHTTPSErrors: true,
    video: "off",
    screenshot: "off",
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'Firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'Webkit',
      use: { browserName: 'webkit' },
    },
  ],
};


export default config;