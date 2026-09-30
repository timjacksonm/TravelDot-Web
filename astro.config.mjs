// @ts-check
import { defineConfig, envField } from "astro/config";

// Cloudflare builds every branch with the same variables, and the API only accepts traveldot.app.
// Branch previews fake the API and use Cloudflare's always-pass Turnstile key.
const branch = process.env.WORKERS_CI_BRANCH;
if (branch && branch !== "main") {
  process.env.PUBLIC_API_MOCK = "true";
  process.env.PUBLIC_TURNSTILE_SITE_KEY = "1x00000000000000000000AA";
}

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
