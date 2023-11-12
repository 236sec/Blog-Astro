import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), tailwind(), react()],
  markdown: {
    syntaxHighlight: 'prism'
  },
  output: "server",
  adapter: vercel()
});