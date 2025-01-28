This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

- [x] Create Next.js app @ latest
- [x] Downgrade React 18
- [x] Install shadcn/ui
- [x] Install dependencies/devdependencies
- [x] Install zod, geist, next-themes
- [x] Install Prisma ORM, and initialize
- [x] Database connection updated .env
- [x] package.json updated
- [x] Database push
- [x] Run dev server

```bash
npx create-next-app@latest .
npm i react@18 react-dom@18 "@prisma/client@latest" "zod" "geist" "next-themes" "@t3-oss/env-nextjs"
npm i --save-dev  "prettier" "prettier-plugin-tailwindcss" "@typescript-eslint/eslint-plugin" "@typescript-eslint/parser" "prisma@latest"
npx prisma init
npm run db:push
npx shadcn@latest init -d
npx shadcn@latest add button

npm run dev
```
