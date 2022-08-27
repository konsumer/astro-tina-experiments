import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";

const chooseLayout = () => (tree, {
  data
}) => {
  data.astro.frontmatter.layout = 'comp/Page.astro';
};


// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  markdown: {
    remarkPlugins: [chooseLayout]
  }
});