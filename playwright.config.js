import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir: './tests/browser',
  outputDir: './test-results/playwright',
  timeout: 30000,
  fullyParallel: false,
  use: {
    baseURL: 'http://127.0.0.1:4173',
    headless: true,
    channel: process.env.PLAYWRIGHT_CHANNEL || undefined,
    trace: 'retain-on-failure',
  },
  webServer: {
    command: 'node node_modules/vite/bin/vite.js preview --host 127.0.0.1',
    url: 'http://127.0.0.1:4173',
    reuseExistingServer: !process.env.CI,
    timeout: 30000,
  },
  reporter: [['list'], ['html', { outputFolder: 'test-results/playwright-report', open: 'never' }]],
});
