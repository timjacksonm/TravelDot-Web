# TravelDot-Web

The coming-soon site for [traveldot.app](https://traveldot.app). TravelDot is a Minnesota
road-conditions app: enter a trip and it shows closures, crashes, road conditions and weather along
the route. The site explains the app and runs the waitlist.

Built with [Astro](https://astro.build) as a static site.

## Layout

- `src/pages/`: one file per route, including the waitlist confirm and unsubscribe pages that
  links in waitlist emails open.
- `src/components/`: the waitlist form, the example trip result, the Minnesota map and shared
  pieces.
- `src/styles/global.css`: design tokens for the light and dark themes.
- `public/brand/`: the logo, one SVG per theme.
- `public/email/`: logo images loaded by the waitlist emails.
