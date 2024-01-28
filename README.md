# Netflix NextJS Clone

This is a Netflix clone project using Next.js with TypeScript.
[Netflix NextJS Clone](https://netflix-nextjs-clone-dusky.vercel.app/)

## Creating NextJS App

Step 1: Create your project
Start by creating a new Next.js project if you don’t have one set up already. The most common approach is to use Create Next App.

```bash
npx create-next-app netflix-nextjs-clone --example with-typescript
cd netflix-nextjs-clone
```

Step 2: Install Tailwind CSS
Install tailwindcss and its peer dependencies via npm, and then run the init command to generate both tailwind.config.js and postcss.config.js.

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Step 3: Configure your template paths
Add the paths to all of your template files in your tailwind.config.js file.

Code:

```
/** @type {import('tailwindcss').Config} \*/
module.exports = {
content: [
"./app/**/_.{js,ts,jsx,tsx,mdx}",
"./pages/\*\*/_.{js,ts,jsx,tsx,mdx}",
"./components/\*_/_.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",

],
theme: {
extend: {},
},
plugins: [],
}
```

Step 4: Add the Tailwind directives to your CSS
Add the @tailwind directives for each of Tailwind’s layers to your globals.css file.

Code:

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Step 5: Start your build process
Run your build process with npm run dev.

```bash
npm run dev
```

## Notes

This example shows how to integrate the TypeScript type system into Next.js. Since TypeScript is supported out of the box with Next.js, all we have to do is to install TypeScript.

```
npm install --save-dev typescript
```

To enable TypeScript's features, we install the type declarations for React and Node.

```
npm install --save-dev @types/react @types/react-dom @types/node
```

When we run `next dev` the next time, Next.js will start looking for any `.ts` or `.tsx` files in our project and builds it. It even automatically creates a `tsconfig.json` file for our project with the recommended settings.

Next.js has built-in TypeScript declarations, so we'll get autocompletion for Next.js' modules straight away.

A `type-check` script is also added to `package.json`, which runs TypeScript's `tsc` CLI in `noEmit` mode to run type-checking separately. You can then include this, for example, in your `test` scripts.
