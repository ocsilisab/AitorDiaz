# Portafolio — Aitor Díaz Santana

Web personal de presentación y contacto para trabajo freelance: desarrollo web (Next.js/React/TypeScript) y módulos de Odoo a medida.

## Stack

- [Next.js](https://nextjs.org) (App Router) + React + TypeScript
- Tailwind CSS
- [Resend](https://resend.com) para el envío de emails del formulario de contacto

## Estructura

- `src/app/` — páginas: inicio, servicios, portafolio, sobre mí, contacto
- `src/components/` — `Header`, `Footer`, `ContactForm`
- `src/lib/site-config.ts` — datos globales del sitio (nombre, navegación, email)

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

> Si el proyecto vive en un filesystem de WSL (`\\wsl.localhost\...`), ejecuta `npm install` y `npm run dev` **desde una terminal WSL nativa**, no desde PowerShell/CMD de Windows — instalar a través del mount UNC puede corromper los symlinks de `node_modules/.bin`.

### Variables de entorno

Copia `.env.example` a `.env.local` y rellena:

```
RESEND_API_KEY=  # https://resend.com — necesario para que el formulario de contacto envíe emails
```

## Scripts

- `npm run dev` — servidor de desarrollo
- `npm run build` — build de producción
- `npm run start` — sirve el build de producción
- `npm run lint` — ESLint
- `npm run test:e2e` — tests end-to-end con Playwright

## Despliegue

Desplegado en [Vercel](https://vercel.com). Recuerda configurar `RESEND_API_KEY` como variable de entorno en el proyecto de Vercel, no solo en local.
