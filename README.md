# AdBuzz Digital

<p align="center">
  <img src="public/brand/logo-light.png" alt="AdBuzz Digital" width="360" />
</p>

Marketing, creative and website services for businesses ready for their next useful digital move.

## Website

The site includes:

- Responsive marketing pages for services, about, work, resources and contact
- Light and premium-black dark themes using official AdBuzz logo variants
- Theme-aware hero brand animation and a Lottie page-transition loader
- Accessible navigation, mobile menu, footer, FAQ and contact pathways
- SEO essentials: metadata, sitemap, robots directives and brand favicons

## Technology

- Next.js 16 and React 19
- TypeScript
- Tailwind CSS 4
- shadcn/ui and Base UI components
- next-intl
- Lottie React

## Run locally

Requirements: Node.js 24+ and Bun.

```bash
bun install
bun run dev:next
```

Open [http://localhost:3000](http://localhost:3000).

To run the production build locally:

```bash
bun run build-local
bun run start -- -p 3001
```

Open [http://localhost:3001](http://localhost:3001).

For another device on the same Wi-Fi network, start the production server with:

```bash
bun run start -- -H 0.0.0.0 -p 3001
```

Then use `http://YOUR-COMPUTER-IP:3001` on that device.

## Quality checks

```bash
bun run check:types
bun run lint
bun run test
```

## Project structure

```text
public/brand/     Official logos, icons, favicons and hero media
src/app/          Routes, layouts, metadata, sitemap and robots
src/components/   Site shell, theme toggle, loader and UI components
src/styles/       Global theme tokens and site styles
```

## Repository

This repository is maintained by [AdBuzz Digital](https://github.com/AdbuzzDigital).
