import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import rehypeMermaid from 'rehype-mermaid'
import rehypeShikiji from 'rehype-shikiji'
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), tailwind(), react()],
  markdown: {
    //syntaxHighlight: 'prism',
    syntaxHighlight: false,
    rehypePlugins: [rehypeMermaid, [rehypeShikiji, { theme: 'github-dark' }]],
  },
  output: "server",
  adapter: vercel()
});