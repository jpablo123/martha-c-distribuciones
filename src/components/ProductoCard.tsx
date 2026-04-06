"use client";

import { type Producto } from "@/data/productos";
import { useCarrito } from "@/context/CarritoContext";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProductoCard({ producto }: { producto: Producto }) {
  const { agregarProducto } = useCarrito();
  const [agregado, setAgregado] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);

  const imagenes = producto.imagenes ?? (producto.imagen ? [producto.imagen] : []);
  const tieneImagenes = imagenes.length > 0;

  useEffect(() => {
    if (imagenes.length <= 1) return;
    const interval = setInterval(() => {
      setImgIndex((i) => (i + 1) % imagenes.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [imagenes.length]);

  const formatearPrecio = (precio: number) =>
    new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(precio);

  const handleAgregar = () => {
    agregarProducto(producto);
    setAgregado(true);
    setTimeout(() => setAgregado(false), 1500);
  };

  return (
    <motion.div
      className="bg-white rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-sm flex flex-col group"
      whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(45,90,61,0.12)" }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 250, damping: 22 }}
    >
      {/* ── Zona imagen ── */}
      <Link href={`/catalogo/${producto.id}`} className="relative bg-white overflow-hidden block aspect-square">
        {tieneImagenes ? (
          <Image
            src={imagenes[imgIndex]}
            alt={producto.nombre}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-14 h-14 text-[var(--color-secondary)] opacity-30">
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
            </svg>
            <span className="text-xs text-[var(--color-text-light)]">{producto.categoria}</span>
          </div>
        )}

        {producto.destacado && (
          <span className="absolute top-3 left-3 bg-[var(--color-accent)] text-white text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-sm tracking-wide">
            Destacado
          </span>
        )}

        {producto.contenido && (
          <span className="absolute top-3 right-3 bg-white text-[var(--color-primary)] text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-sm border border-[var(--color-border)]">
            {producto.contenido}
          </span>
        )}
      </Link>

      {/* ── Info ── */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-medium text-[var(--color-secondary)] uppercase tracking-wider">
            {producto.categoria}
          </span>
          {producto.marca && (
            <span className="text-[11px] text-[var(--color-text-light)] truncate max-w-[120px]">
              {producto.marca}
            </span>
          )}
        </div>

        <h3 className="font-bold text-[var(--color-text)] text-base leading-snug line-clamp-2">
          {producto.nombre}
        </h3>

        <p className="text-[var(--color-text-light)] text-sm leading-relaxed line-clamp-2 flex-1">
          {producto.descripcion}
        </p>

        <div className="flex items-center justify-between pt-2 border-t border-[var(--color-border)]">
          <div>
            <p className="text-[11px] text-[var(--color-text-light)]">Envío gratis</p>
            <p className="text-xl font-bold text-[var(--color-primary)]">
              {formatearPrecio(producto.precio)}
            </p>
          </div>
          <motion.button
            onClick={handleAgregar}
            className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors duration-300 cursor-pointer min-w-[100px] ${
              agregado
                ? "bg-green-500 text-white"
                : "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-light)]"
            }`}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.93 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {agregado ? "¡Agregado!" : "Agregar"}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
