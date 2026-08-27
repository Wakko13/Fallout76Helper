// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import pagefind from 'astro-pagefind';

// https://astro.build/config
export default defineConfig({
  site: 'https://wakko13.github.io',
  base: '/Fallout76Helper/',
  output: 'static',
  integrations: [mdx(), pagefind()],
});
