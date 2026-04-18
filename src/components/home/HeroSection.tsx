"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, stagger, heroSlide, fadeIn } from "@/lib/animations";

export default function HeroSection() {
  return (
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
  );
}
