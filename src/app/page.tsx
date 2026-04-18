"use client";

import Link from "next/link";
import Image from "next/image";
import ProductoCard from "@/components/ProductoCard";
import { productos, categorias } from "@/data/productos";
import { motion } from "framer-motion";
import { fadeUp, stagger, heroSlide, fadeIn } from "@/lib/animations";

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

function iconoCategoria(cat: string) {
  const cls = "w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors";
  switch (cat) {
    case "Colágeno":
      // Cara sonriente — piel, belleza, juventud
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={cls}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
        </svg>
      );
    case "Suplementos":
      // Tubo de ensayo — ciencia, suplementación
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={cls}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        </svg>
      );
    case "Naturales":
      // Sol — naturaleza, energía natural
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={cls}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
        </svg>
      );
    case "Bienestar":
      // Corazón — salud, bienestar
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={cls}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>
      );
    case "Deportes":
      // Rayo — energía, rendimiento deportivo
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={cls}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
        </svg>
      );
    default:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={cls}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
        </svg>
      );
  }
}

export default function HomePage() {
  const productosDestacados = productos.filter((p) => p.activo && p.destacado);
  const categoriasUnicas = categorias.filter((c) => c !== "Todos");

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden min-h-[92dvh] flex items-center border-b border-[var(--color-border)] bg-[var(--color-bg)]">
        {/* Grain texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.035]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-0 items-center min-h-[92dvh] py-24 lg:py-0">

          {/* ── Left: Text ── */}
          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            animate="visible"
            className="lg:py-24"
          >
            <motion.p
              variants={fadeUp}
              className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-primary)] mb-8"
            >
              Distribución directa · Colombia
            </motion.p>

            <motion.h1
              variants={heroSlide}
              className="text-balance text-5xl sm:text-6xl lg:text-[4.5rem] xl:text-[5.5rem] font-bold leading-[1.04] tracking-[-0.02em] mb-8 text-[var(--color-text)]"
            >
              Tu bienestar,<br />
              respaldado por<br />
              <span className="text-[var(--color-primary)]">la naturaleza</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg text-[var(--color-text-light)] mb-10 max-w-[42ch] leading-relaxed"
            >
              Suplementos naturales, colágeno y vitaminas con registro INVIMA.
              Envío a toda Colombia.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              className="flex gap-8 py-7 border-y border-[var(--color-border)] mb-10"
            >
              {[
                { value: "200+", label: "clientes" },
                { value: "16", label: "productos" },
                { value: "100%", label: "certificados" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-bold tracking-tight text-[var(--color-text)]">{s.value}</p>
                  <p className="text-sm text-[var(--color-text-light)] mt-0.5">{s.label}</p>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/catalogo"
                  className="flex items-center justify-center gap-2 bg-[var(--color-primary)] text-white font-bold px-7 py-4 rounded-xl text-base shadow-[0_4px_20px_rgba(45,90,61,0.25)] hover:bg-[var(--color-primary-light)] transition-colors duration-200 w-full sm:w-auto"
                >
                  Ver catálogo
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <a
                  href="https://wa.me/573218804374?text=Hola%2C%20quiero%20información%20sobre%20sus%20productos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border border-[var(--color-border)] bg-white text-[var(--color-text)] font-semibold px-7 py-4 rounded-xl text-base hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors duration-200 w-full sm:w-auto"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-500 shrink-0">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  </svg>
                  Escríbenos
                </a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* ── Right: Visual ── */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="relative hidden lg:flex items-center justify-center h-full min-h-[500px]"
          >
            {/* Ambient blob */}
            <div
              className="absolute w-[520px] h-[520px] rounded-full"
              style={{
                background: "radial-gradient(circle at 40% 50%, #d4ede0 0%, #e8f4ed 45%, transparent 70%)",
              }}
            />

            {/* Main product card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 bg-white rounded-2xl shadow-[0_8px_40px_rgba(45,90,61,0.12)] p-6 w-64"
            >
              <div className="w-full aspect-square rounded-xl bg-[#f0f8f3] mb-4 overflow-hidden relative">
                <Image
                  src="/productos/colagyn-10/colagyn-10-1.png"
                  alt="Colagyn 10"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <p className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider mb-1">Más vendido</p>
              <p className="font-bold text-[var(--color-text)] mb-1">Colagyn 10</p>
              <p className="text-sm text-[var(--color-text-light)] mb-3">Colágeno hidrolizado premium</p>
              <p className="text-xl font-bold text-[var(--color-text)]">
                $89.900 <span className="text-sm font-normal text-[var(--color-text-light)]">COP</span>
              </p>
            </motion.div>

            {/* Chip — INVIMA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-[18%] right-[4%] z-20 bg-white rounded-xl px-4 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex items-center gap-2.5 border border-[var(--color-border)]"
            >
              <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-[var(--color-primary)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold text-[var(--color-text)] leading-none">INVIMA</p>
                <p className="text-[10px] text-[var(--color-text-light)] mt-0.5">Certificado</p>
              </div>
            </motion.div>

            {/* Chip — Envío gratis */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-[22%] left-[2%] z-20 bg-[var(--color-primary)] rounded-xl px-4 py-3 shadow-[0_4px_20px_rgba(45,90,61,0.3)] flex items-center gap-2.5"
            >
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V11.25" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold text-white leading-none">Envío gratis</p>
                <p className="text-[10px] text-white/70 mt-0.5">A toda Colombia</p>
              </div>
            </motion.div>

            {/* Chip — Nequi */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-[42%] right-[0%] z-20 bg-white rounded-xl px-3 py-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-[var(--color-border)]"
            >
              <p className="text-xs font-bold text-[var(--color-text)]">Pago Nequi</p>
              <p className="text-[10px] text-[var(--color-text-light)]">Fácil y seguro</p>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* ── Beneficios ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {beneficios.map((b) => (
              <motion.div
                key={b.titulo}
                variants={fadeUp}
                className="text-center p-6"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-50 text-[var(--color-primary)] mb-4"
                >
                  {b.icono}
                </motion.div>
                <h3 className="font-bold text-lg mb-2">{b.titulo}</h3>
                <p className="text-[var(--color-text-light)] text-sm">{b.descripcion}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Categorías ── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
              Nuestras Categorías
            </h2>
            <p className="text-[var(--color-text-light)] max-w-2xl mx-auto">
              Encuentra el suplemento ideal para ti entre nuestras categorías especializadas.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
            variants={stagger(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {categoriasUnicas.map((cat) => (
              <motion.div
                key={cat}
                variants={fadeUp}
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <Link
                  href={`/catalogo?categoria=${encodeURIComponent(cat)}`}
                  className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300 border border-[var(--color-border)] hover:border-[var(--color-primary)] group flex flex-col items-center"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-green-50 group-hover:bg-[var(--color-primary)] transition-colors flex items-center justify-center">
                    {iconoCategoria(cat)}
                  </div>
                  <h3 className="font-semibold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
                    {cat}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Productos Destacados ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex items-center justify-between mb-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
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
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {productosDestacados.map((producto) => (
              <motion.div key={producto.id} variants={fadeUp}>
                <ProductoCard producto={producto} />
              </motion.div>
            ))}
          </motion.div>

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
      <motion.section
        className="py-16 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Necesitas asesoría personalizada?
          </h2>
          <p className="text-green-100 text-lg mb-8">
            Escríbenos por WhatsApp y te ayudamos a encontrar los productos ideales para tu bienestar.
          </p>
          <motion.a
            href="https://wa.me/573218804374?text=Hola%2C%20quiero%20asesor%C3%ADa%20sobre%20sus%20productos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-[var(--color-primary)] font-bold px-8 py-4 rounded-xl transition-colors text-lg shadow-lg hover:bg-green-50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            </svg>
            Chatea con nosotros
          </motion.a>
        </div>
      </motion.section>
    </>
  );
}
