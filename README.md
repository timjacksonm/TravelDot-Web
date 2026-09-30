# TravelDot-Web

The coming-soon site for [traveldot.app](https://traveldot.app). TravelDot is a Minnesota
road-conditions app: enter a trip and it shows closures, crashes, road conditions and weather along
the route. The site explains the app and runs the waitlist.

Built with [Astro](https://astro.build) as a static site, deployed to Cloudflare Workers.

## Running it locally

Requires Node 24.

```sh
cp .env.example .env
npm install
npm run dev
```

`.env.example` turns on `PUBLIC_API_MOCK`, which fakes the waitlist API so the form works without a
backend. Put `mock400`, `mock404`, `mock429` or `mock500` in an email or token to see each error.

## Scripts

| Command                | What it does                        |
| ---------------------- | ----------------------------------- |
| `npm run dev`          | Starts the dev server               |
| `npm run build`        | Builds the site to `dist/`          |
| `npm run check`        | Type-checks `.astro` and TypeScript |
| `npm run lint:all`     | Runs ESLint                         |
| `npm run format:check` | Checks formatting with Prettier     |

## Layout

- `src/pages/`: one file per route, including the waitlist confirm and unsubscribe pages that
  links in waitlist emails open.
- `src/components/`: the waitlist form, the example trip result, the Minnesota map and shared
  pieces.
- `src/styles/global.css`: design tokens for the light and dark themes.
- `public/brand/`: the logo, one SVG per theme.
- `public/email/`: logo images loaded by the waitlist emails.
