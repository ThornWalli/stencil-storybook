import { defineProject } from 'vitest/config';
import stencil from 'unplugin-stencil/vite';
import { playwright } from '@vitest/browser-playwright';

export default defineProject({
  test: {
    include: ['./**/*.test.js', './**/*.test.ts', './**/*.test.tsx'],
    browser: {
      enabled: true,
      headless: true,
      provider: playwright(),
      instances: [{ browser: 'chromium' }]
    }
  },
  plugins: [stencil()]
});
