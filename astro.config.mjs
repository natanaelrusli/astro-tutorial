import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [
    preact({
      compat: true,
    }),
    solidJs(),
  ],
});
