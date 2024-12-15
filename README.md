# Technical Test @Jump

More details can be found here: [Frontend test interview](https://github.com/Freelance-launchpad/frontend-tech-interview)

## 🌐 Website & Hosting

You can access the website at [jump-test.vercel.app](https://jump-test.vercel.app/)

The website is hosted on [Vercel](https://vercel.com/).

## 🏗️ Packages

**Core:**

- [React](https://react.dev/) with [Next.js](https://nextjs.org/) for server-side rendering and routing.

**Styling:**

- [Tailwind CSS](https://tailwindcss.com/) for styling.
- [Shadcn/ui](https://ui.shadcn.com/) for UI components.
- [lucide-react](https://lucide.dev/) for icons.

**Tools:**

- [React Hook Form](https://react-hook-form.com/) for form validation.
- [Zod](https://zod.dev/) for schema-based form validation.
- [Tanstack Query](https://tanstack.com/query/v5/docs/framework/react/guides/queries) for data fetching and caching.

**Development:**

- [TypeScript](https://www.typescriptlang.org/) for static type checking.
- [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) for linting and formatting.

## 🗂️ Project Structure

- `app/`: Contains the main application components and pages.
- `components/`: Contains reusable UI components.
- `hooks/`: Contains custom React hooks.
- `lib/`: Contains utility functions and queries for data fetching.
- `provider/`: Contains context providers for managing global state.
- `public/`: Contains static assets such as images and fonts.
- `schema/`: Contains schema definitions for form validation.
- `types/`: Contains TypeScript type definitions.

## 🚀 Getting Started

```bash
# install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## ⭐️ Guidelines

### import

Aliases are set up for `@/*` to import files from any directory in `./tsconfig.json`

```javascript
import { Input } from "@/components/ui";
```

### Queries

In order to avoid unnecessary refetching, the stale time are set globally to **30 minutes** in `./lib/queryClient.ts`

```javascript
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 30, // Change here if needed
    },
  },
});
```

## ⏱️ Estimated time

To complete this project, it took me around **XX hours**.
