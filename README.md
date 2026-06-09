# Voyah-web

Dealer website for Voyah premium electric vehicles — model showcase, live showroom
inventory and lead capture (test-drive / callback requests).

## Tech stack

- [Next.js 14](https://nextjs.org/) (App Router)
- TypeScript
- Tailwind CSS

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | Description                  |
| --------------- | ---------------------------- |
| `npm run dev`   | Start the dev server         |
| `npm run build` | Production build             |
| `npm run start` | Run the production build     |
| `npm run lint`  | Lint with Next.js ESLint     |

## Project structure

```
src/
  app/
    page.tsx              Home
    models/               Model range + detail pages
    inventory/            Showroom inventory listing
    about/                About the dealership
    contact/              Contact + test-drive form
    api/leads/route.ts    Lead-capture endpoint
  components/             Navbar, footer, model card, lead form
  lib/                    Model + inventory data
```

## Lead capture

The contact and model-detail forms POST to `/api/leads`. The endpoint validates
the payload and currently logs the lead to the server console. To go live, wire
it up to a database, CRM, or email service (see the `TODO` in
`src/app/api/leads/route.ts`).

## Deployment

Designed to deploy on [Vercel](https://vercel.com/) with zero configuration.
