// @ts-check
import { defineConfig, envField } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://traveldot.app",
  // The privacy copy uses straight quotes, as in the design.
  markdown: { smartypants: false },
  env: {
    schema: {
      PUBLIC_TURNSTILE_SITE_KEY: envField.string({ context: "client", access: "public" }),
      PUBLIC_API_URL: envField.string({
        context: "client",
        access: "public",
        default: "https://api.traveldot.app",
      }),
      PUBLIC_API_MOCK: envField.boolean({ context: "client", access: "public", default: false }),
    },
  },
});
