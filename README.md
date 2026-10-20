# Santuario Cafe

Local website project built with Next.js App Router, React, TypeScript, and Tailwind CSS.

## Develop in VS Code

Open this folder directly in VS Code. Use Node.js 24 LTS and npm.

```sh
npm install
npm run dev
```

Open http://localhost:3000. Changes to `src/app/page.tsx` update the page automatically.
Press F5 in VS Code to start the development server with debugging.

## Commands

- `npm run dev`: local development server
- `npm run build`: production build
- `npm start`: run the production build
- `npm run typecheck`: TypeScript validation
- `npm run lint`: ESLint

## Project structure

- `src/app/`: routes, page layout, global styles, and future server endpoints
- `src/lib/`: future shared utilities and server integrations
- `src/types/`: domain types, including the initial menu item model
- `public/images/`: working copies of the 24 supplied images
- `.vscode/`: recommended extensions, editor settings, and debugger

The original photos remain in the root folder. Public assets are served at `/images/<filename>`.
This is an initial scaffold; the full cafe design, verified menu, business details, and ordering flow are still to be built.

## Future online ordering

Next.js supports server endpoints alongside the website, so ordering can be added to this project.
Choose the cafe's POS/ordering integration before implementing a custom checkout.
For custom ordering, add persistent menu/order storage and a payment provider when needed.
Calculate prices and check availability on the server; confirm payment through verified webhooks,
with idempotent order creation and explicit fulfillment states. Never rely on browser-submitted totals.
Do not collect payment details directly or expose server secrets in browser code.

No database, payment account, or live ordering is configured yet.

## Tooling notes

Development and production builds use Webpack because Turbopack's CSS worker failed on this Windows setup.
The initial npm audit reports five high-severity findings in the ESLint tooling's transitive
`braces` dependency chain. A compatible fix is not currently offered by npm; do not force
the suggested downgrade of eslint-config-next. Recheck when upgrading the tooling.

Framework setup reference: https://nextjs.org/docs/app/getting-started/installation
