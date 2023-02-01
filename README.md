This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Exolyt Spotify
<img width="1101" alt="Screenshot 2023-02-01 at 13 24 28" src="https://user-images.githubusercontent.com/30744133/216030014-414d8ee8-85c4-4d59-90ab-c2c413a27e55.png">

## Getting Started

Adding Enviroment variables:
Create a .env.local file in the root directory:


```js
NEXT_PUBLIC_SPOTIFY_OAUTH_TOKEN=${Token}
NEXT_PUBLIC_API_URL=https://api.spotify.com/v1
```

Token can be generated using from https://developer.spotify.com/console/get-available-genre-seeds/
## Exclude 'Bearer' when declaring the token.

Install npm packages:

```bash
npm install
```

Build to generate an optimized version of your application for production

```bash
npm run build
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

