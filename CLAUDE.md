# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (localhost:3000)
npm run build     # Production build
npm run lint      # ESLint via Next.js
npm run start     # Start production server
```

No test suite configured.

## Stack

- **Next.js 16** — App Router, Server Components by default
- **React 19** — `'use client'` only for interactive leaf nodes
- **Tailwind CSS v4** — No `tailwind.config.js`; theme defined in `src/app/globals.css` via `@theme {}`
- **Framer Motion 12** — All animation variants centralized in `src/lib/animations.ts`
- **TypeScript strict mode** — Path alias `@/*` → `src/*`

## Architecture

### Routing (`src/app/`)
| Route | Notes |
|---|---|
| `/` | Home: hero, benefits, categories, featured products |
| `/catalogo` | Listing with search/filter/sort (Suspense wrapped) |
| `/catalogo/[id]` | Product detail with dynamic metadata + JSON-LD |
| `/carrito` | Cart checkout; overrides root layout (no Header/Footer) |
| `/nosotros` | About page |
| `/contacto` | Contact page |
| `sitemap.ts` / `robots.ts` | SEO — domain: `marthacdistribuciones.com` |

### Data layer (`src/data/productos.ts`)
Single source of truth — static array of 16 products. No database, no API.
- `Producto` interface: `id, nombre, descripcion, precio, categoria, imagen, imagenes[], destacado, activo, contenido, marca`
- `categorias`: `["Todos", "Colágeno", "Suplementos", "Naturales", "Bienestar", "Deportes"]`

### Cart (`src/context/CarritoContext.tsx`)
React Context — wraps entire app in root layout. Access via `useCarrito()` hook.
Methods: `agregarProducto`, `removerProducto`, `actualizarCantidad`, `limpiarCarrito`.
Computed: `totalItems`, `totalPrecio`.

### WhatsApp checkout (`src/lib/whatsapp.ts`)
Cart orders submit via WhatsApp — no payment gateway. `generarMensajeWhatsApp()` formats order into a WhatsApp URL. Number hardcoded: `573218804374`. Currency: COP via `Intl.NumberFormat('es-CO')`.

### Animations (`src/lib/animations.ts`)
Shared Framer Motion variants: `fadeUp`, `fadeIn`, `scaleIn`, `heroSlide`, `stagger(delay)`, `spring`, `springFast`. Import from here — don't define inline.

## Styling conventions

Tailwind v4 — **no config file**. Custom tokens live in `globals.css`:

```css
--color-primary: #2D5A3D      /* dark green */
--color-primary-light: #3A7A52
--color-primary-dark: #1E3D29
--color-secondary: #6B8E4E
--color-accent: #C4A265       /* gold */
--color-bg: #F7F5F0
--color-text: #2C2C2C
```

Font: Poppins (Google Fonts via `next/font`) — applied globally via CSS variable `--font-poppins`.

## Product images

Stored in `public/productos/[product-slug]/`. Each product has a primary `imagen` and optional `imagenes[]` array for carousel. Use Next.js `<Image>` — not `<img>`.

## Locale

Language: `es` (Colombian Spanish). Prices in COP. `lang="es"` set in root layout.
