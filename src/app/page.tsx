"use client";

import Link from "next/link";
import ProductoCard from "@/components/ProductoCard";
import { productos, categorias } from "@/data/productos";

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

export default function HomePage() {
  const productosDestacados = productos.filter((p) => p.activo && p.destacado);
  const categoriasUnicas = categorias.filter((c) => c !== "Todos");

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden flex items-center bg-white border-b border-[var(--color-border)]">
        {/* Contenido */}
        <div className="relative w-full max-w-4xl mx-auto px-6 py-20 md:py-32 text-center">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 bg-[var(--color-primary)]/8 text-[var(--color-primary)] text-sm font-semibold px-4 py-2 rounded-full mb-8 border border-[var(--color-primary)]/15">
            <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse" />
            Envío gratis a toda Colombia
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 text-[var(--color-text)]">
            Tu bienestar comienza<br className="hidden sm:block" /> con lo{" "}
            <span className="text-[var(--color-primary)]">natural</span>
          </h1>

          <p className="text-lg md:text-xl text-[var(--color-text-light)] mb-4 leading-relaxed max-w-2xl mx-auto">
            Suplementos naturales, colágeno y vitaminas de la más alta calidad.
          </p>

          {/* Prueba social */}
          <div className="flex items-center justify-center gap-2 mb-10">
            <div className="flex -space-x-2">
              {["bg-amber-400","bg-emerald-400","bg-sky-400","bg-rose-400"].map((c,i) => (
                <div key={i} className={`w-8 h-8 rounded-full border-2 border-white ${c} flex items-center justify-center text-white text-xs font-bold`}>
                  {["A","M","C","L"][i]}
                </div>
              ))}
            </div>
            <p className="text-sm text-[var(--color-text-light)]">
              <span className="font-bold text-[var(--color-text)]">+200 clientes</span> satisfechos en Colombia
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/catalogo"
              className="inline-flex items-center justify-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 text-lg shadow-md hover:shadow-lg hover:scale-105"
            >
              Ver Catálogo
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <a
              href="https://wa.me/573218804374?text=Hola%2C%20quiero%20información%20sobre%20sus%20productos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-bold px-8 py-4 rounded-xl transition-all duration-300 text-lg hover:bg-[var(--color-primary)]/5 hover:scale-105"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-500">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              </svg>
              Escríbenos por WhatsApp
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-12 text-sm text-[var(--color-text-light)]">
            <span className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-[var(--color-primary)]">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
              </svg>
              Registro INVIMA
            </span>
            <span className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-[var(--color-primary)]">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
              </svg>
              Pago por Nequi
            </span>
            <span className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-[var(--color-primary)]">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
              </svg>
              Envío gratis
            </span>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {beneficios.map((b) => (
              <div key={b.titulo} className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-50 text-[var(--color-primary)] mb-4">
                  {b.icono}
                </div>
                <h3 className="font-bold text-lg mb-2">
                  {b.titulo}
                </h3>
                <p className="text-[var(--color-text-light)] text-sm">{b.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categorías */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
              Nuestras Categorías
            </h2>
            <p className="text-[var(--color-text-light)] max-w-2xl mx-auto">
              Encuentra el suplemento ideal para ti entre nuestras categorías especializadas.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categoriasUnicas.map((cat) => (
              <Link
                key={cat}
                href={`/catalogo?categoria=${encodeURIComponent(cat)}`}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-[var(--color-border)] hover:border-[var(--color-primary)] group"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-green-50 group-hover:bg-[var(--color-primary)] transition-colors flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
                  {cat}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Productos Destacados */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productosDestacados.map((producto) => (
              <ProductoCard key={producto.id} producto={producto} />
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

      {/* CTA Final */}
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
            className="inline-flex items-center gap-3 bg-white text-[var(--color-primary)] font-bold px-8 py-4 rounded-xl hover:bg-green-50 transition-colors text-lg shadow-lg"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            </svg>
            Chatea con nosotros
          </a>
        </div>
      </section>
    </>
  );
}
