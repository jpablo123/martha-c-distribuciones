import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ProductoCard from "@/components/ProductoCard";
import { productos, categorias } from "@/data/productos";
import HeroSection from "@/components/home/HeroSection";
import AnimateOnScroll from "@/components/home/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Suplementos Naturales y Productos de Bienestar en Colombia",
  description:
    "Compra colágeno hidrolizado, vitaminas, suplementos naturales y productos de bienestar con envío a toda Colombia. Productos certificados INVIMA. Martha C Distribuciones.",
  alternates: {
    canonical: "https://www.marthacdistribuciones.com",
  },
};

const beneficios = [
  {
    titulo: "Productos Certificados",
    descripcion: "Todos nuestros productos cuentan con registro INVIMA y certificaciones de calidad.",
    icono: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    titulo: "Envío Nacional",
    descripcion: "Realizamos envíos a toda Colombia. Tu pedido llega a la puerta de tu casa.",
    icono: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H18.75M3.375 14.25h.008v.008h-.008v-.008Zm0 0H7.5m0 0v-.375c0-.621.504-1.125 1.125-1.125h3.5" />
      </svg>
    ),
  },
  {
    titulo: "Atención Personalizada",
    descripcion: "Te asesoramos por WhatsApp para encontrar los productos ideales para ti.",
    icono: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
  {
    titulo: "Precios Justos",
    descripcion: "Distribución directa que te garantiza los mejores precios del mercado.",
    icono: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
      </svg>
    ),
  },
];

const imagenCategoria: Record<string, string> = {
  "Colágeno": "/categorias/cat-colageno.png",
  "Suplementos": "/categorias/cat-suplementos.png",
  "Naturales": "/categorias/cat-naturales.png",
  "Bienestar": "/categorias/cat-bienestar.png",
  "Deportes": "/categorias/cat-deportes.png",
};

export default function HomePage() {
  const productosDestacados = productos.filter((p) => p.activo && p.destacado);
  const categoriasUnicas = categorias.filter((c) => c !== "Todos");

  return (
    <>
      <HeroSection />

      {/* ── Beneficios ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {beneficios.map((b, i) => (
              <AnimateOnScroll key={b.titulo} delay={i * 100}>
                <div className="text-center p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-50 text-[var(--color-primary)] mb-4 transition-transform duration-200 hover:scale-110 hover:rotate-[5deg]">
                    {b.icono}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{b.titulo}</h3>
                  <p className="text-[var(--color-text-light)] text-sm">{b.descripcion}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Categorías ── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
                Nuestras Categorías
              </h2>
              <p className="text-[var(--color-text-light)] max-w-2xl mx-auto">
                Encuentra el suplemento ideal para ti entre nuestras categorías especializadas.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categoriasUnicas.map((cat, i) => (
              <AnimateOnScroll key={cat} delay={i * 80}>
                <Link
                  href={`/catalogo?categoria=${encodeURIComponent(cat)}`}
                  className="relative overflow-hidden rounded-2xl group block aspect-[3/4]"
                >
                  <Image
                    src={imagenCategoria[cat]}
                    alt={cat}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-bold text-white text-base leading-tight">{cat}</h3>
                    <span className="text-white/60 text-xs mt-1 flex items-center gap-1">
                      Ver productos
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Productos Destacados ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)]">
                  Productos Destacados
                </h2>
                <p className="text-[var(--color-text-light)] mt-2">
                  Los más vendidos y recomendados por nuestros clientes.
                </p>
              </div>
              <Link
                href="/catalogo"
                className="hidden md:inline-flex items-center gap-2 text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] font-semibold transition-colors"
              >
                Ver todos
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productosDestacados.map((producto, i) => (
              <AnimateOnScroll key={producto.id} delay={i * 100} className="h-full">
                <ProductoCard producto={producto} />
              </AnimateOnScroll>
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Link
              href="/catalogo"
              className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-white font-bold px-6 py-3 rounded-xl hover:bg-[var(--color-primary-light)] transition-colors"
            >
              Ver todo el catálogo
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Final ── */}
      <AnimateOnScroll>
        <section className="py-16 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Necesitas asesoría personalizada?
            </h2>
            <p className="text-green-100 text-lg mb-8">
              Escríbenos por WhatsApp y te ayudamos a encontrar los productos ideales para tu bienestar.
            </p>
            <a
              href="https://wa.me/573218804374?text=Hola%2C%20quiero%20asesor%C3%ADa%20sobre%20sus%20productos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-[var(--color-primary)] font-bold px-8 py-4 rounded-xl transition-all text-lg shadow-lg hover:bg-green-50 hover:scale-[1.05] active:scale-[0.97]"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              </svg>
              Chatea con nosotros
            </a>
          </div>
        </section>
      </AnimateOnScroll>
    </>
  );
}
