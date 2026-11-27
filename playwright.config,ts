import { defineConfig } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  timeout: 30000,

  fullyParallel: true,

  reporter: [
    ['html']
  ],

  use: {
    baseURL: process.env.BASE_URL
  }

});