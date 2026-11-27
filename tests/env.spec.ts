import { test } from '@playwright/test';
import { config } from '../src/utils/config.js';

test('Print Environment Variables', async () => {

    console.log('Environment :', config.environment);

    console.log('Base URL :', config.baseUrl);

});