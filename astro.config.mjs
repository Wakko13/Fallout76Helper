// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import pagefind from 'astro-pagefind';
import rehypeExternalLinks from 'rehype-external-links';

// https://astro.build/config
export default defineConfig({
  site: 'https://wakko13.github.io',
  base: '/Fallout76Helper/',
  output: 'static',
  markdown: {
    rehypePlugins: [[rehypeExternalLinks, { target: '_blank', rel: ['noopener'] }]],
  },
  integrations: [mdx(), pagefind()],
});
