# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Vercel Deployment

This project is ready for deployment on Vercel.

1. Install dependencies locally:
   ```bash
   npm install
   ```
2. Copy `.env.example` to `.env` and add your Groq API key:
   ```env
   VITE_GROQ_API=your_groq_api_key_here
   ```
3. In Vercel, create a new project and set the environment variable:
   - `VITE_GROQ_API`
4. Deploy the project.

### Vercel build settings

Vercel will use the project scripts and output directory defined in `vercel.json`:

- Build command: `npm run vercel-build`
- Output directory: `dist`
- SPA rewrite: all routes rewrite to `/`

> Note: do not commit `.env` to the repository. Keep API keys in Vercel environment variables only.
