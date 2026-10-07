# Music-Academy
## It is a music learning management platform for all music lovers.

## Please visit the website here: https://music-academy-nextjs-phi.vercel.app/

## Project Structure
```bash
Music-Academy-nextjs
|__public
        |___ courses
                    |___ Images (.jpg)

|___ src
        |__app
              |___ contact
                          |___ page.tsx
              |___ courses
                          |___ page.tsx
              |___ globals.css
              |___ favicon.ico
              |___ layout.tsx
              |___ page.tsx

        |__components
                    |___ ui
                            |___ 3d-card.tsx
                            |___ animated-toolkit.tsx
                            |___ background-beams.tsx
                            |___ background-gradient.tsx
                            |___ card-hover-effect.tsx
                            |___ infinite-moving-cards.tsx
                            |___ moving-border.tsx
                            |___ navbar-menu.tsx
                            |___ Spotlight.tsx
                            |___ sticky-scroll-reveal.tsx
                            |___ wavy-background.tsx

                |___ FeaturedCourses.tsx
                |___ Footer.tsx
                |___ HeroSection.tsx
                |___ Intructors.tsx
                |___ Navbar.tsx
                |___ TestimonialCard.tsx
                |___ UpcomingWebinars.tsx
                |___ WhyChooseUS.tsx

         |__data
                |___ music_coureses.json
         |__lib
              |___ utils.ts
|___.gitignore
|___ eslint.config.mjs
|___ next.config.ts
|___ package-lock.json
|___ package.json
|___ postcss.config.mjs
|___ README.md



```
## TechStack
```bash
nextjs
reactjs
react-dom
tailwindcss
typescript
motion
clsx
simplex-noise
eslint
turbopack
postcss
acertenity ui
```

## Getting Started
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

