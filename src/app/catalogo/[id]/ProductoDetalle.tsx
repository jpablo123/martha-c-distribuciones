"use client";

import { type Producto } from "@/data/productos";
import { useCarrito } from "@/context/CarritoContext";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProductoDetalle({ producto }: { producto: Producto }) {
  const { agregarProducto, items } = useCarrito();
  const [cantidad, setCantidad] = useState(1);
  const [imgIndex, setImgIndex] = useState(0);
  const [agregado, setAgregado] = useState(false);

  const imagenes = producto.imagenes ?? (producto.imagen ? [producto.imagen] : []);
  const itemEnCarrito = items.find((i) => i.producto.id === producto.id);

  const formatearPrecio = (precio: number) =>
    new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(precio);

  const handleAgregar = () => {
    for (let i = 0; i < cantidad; i++) agregarProducto(producto);
    setAgregado(true);
    setTimeout(() => setAgregado(false), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-[var(--color-text-light)] mb-8">
        <Link href="/" className="hover:text-[var(--color-primary)] transition-colors">Inicio</Link>
        <span>/</span>
        <Link href="/catalogo" className="hover:text-[var(--color-primary)] transition-colors">Catálogo</Link>
        <span>/</span>
        <span className="text-[var(--color-text)] font-medium line-clamp-1">{producto.nombre}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

        {/* ── Galería ── */}
        <div className="flex flex-col gap-4">
          {/* Imagen principal */}
          <div className="relative bg-white rounded-2xl overflow-hidden aspect-square">
            {imagenes.length > 0 ? (
              <Image
                src={imagenes[imgIndex]}
                alt={`${producto.nombre} - imagen ${imgIndex + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[var(--color-text-light)] text-sm">Sin imagen</span>
              </div>
            )}

            {imagenes.length > 1 && (
              <>
                <button
                  onClick={() => setImgIndex((i) => (i - 1 + imagenes.length) % imagenes.length)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[var(--color-text)]">
                    <path fillRule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                  </svg>
                </button>
                <button
                  onClick={() => setImgIndex((i) => (i + 1) % imagenes.length)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[var(--color-text)]">
                    <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                  </svg>
                </button>
              </>
            )}
          </div>

          {/* Miniaturas */}
          {imagenes.length > 1 && (
            <div className="flex gap-3">
              {imagenes.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setImgIndex(i)}
                  className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all bg-[#f8f8f6] flex-shrink-0 cursor-pointer ${
                    i === imgIndex
                      ? "border-[var(--color-primary)] shadow-md"
                      : "border-[var(--color-border)] hover:border-[var(--color-secondary)]"
                  }`}
                >
                  <Image src={src} alt={`Vista ${i + 1}`} fill className="object-contain p-1.5" sizes="80px" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ── Info del producto ── */}
        <div className="flex flex-col gap-5">

          <div className="flex items-center gap-3 flex-wrap">
            <span className="bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
              {producto.categoria}
            </span>
            {producto.contenido && (
              <span className="bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-xs font-semibold px-3 py-1 rounded-full">
                {producto.contenido}
              </span>
            )}
          </div>

          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-[var(--color-text)] leading-tight">
              {producto.nombre}
            </h1>
            {producto.marca && (
              <p className="text-sm text-[var(--color-text-light)] mt-1">por {producto.marca}</p>
            )}
          </div>

          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-bold text-[var(--color-primary)]">
              {formatearPrecio(producto.precio)}
            </span>
            <span className="text-sm text-[var(--color-text-light)]">COP · envío incluido</span>
          </div>

          <p className="text-[var(--color-text-light)] leading-relaxed">
            {producto.descripcion}
          </p>

          {/* Selector de cantidad */}
          <div>
            <label className="block text-sm font-semibold text-[var(--color-text)] mb-2">Cantidad</label>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setCantidad((c) => Math.max(1, c - 1))}
                className="w-10 h-10 rounded-xl border border-[var(--color-border)] flex items-center justify-center hover:bg-gray-50 transition-colors text-lg font-bold cursor-pointer"
              >
                −
              </button>
              <span className="w-12 text-center font-bold text-lg">{cantidad}</span>
              <button
                onClick={() => setCantidad((c) => c + 1)}
                className="w-10 h-10 rounded-xl border border-[var(--color-border)] flex items-center justify-center hover:bg-gray-50 transition-colors text-lg font-bold cursor-pointer"
              >
                +
              </button>
              {itemEnCarrito && (
                <span className="text-sm text-[var(--color-text-light)] ml-2">
                  ({itemEnCarrito.cantidad} en carrito)
                </span>
              )}
            </div>
          </div>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleAgregar}
              className={`flex-1 py-3.5 rounded-xl font-bold text-base transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 ${
                agregado
                  ? "bg-green-500 text-white scale-95"
                  : "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-light)] hover:scale-[1.02]"
              }`}
            >
              {agregado ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                  </svg>
                  ¡Agregado al carrito!
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                  </svg>
                  Agregar al carrito
                </>
              )}
            </button>
            <Link
              href="/carrito"
              className="px-6 py-3.5 rounded-xl border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-bold hover:bg-[var(--color-primary)]/5 transition-colors flex items-center justify-center gap-2"
            >
              Ver carrito
            </Link>
          </div>

          {/* Banner Nequi */}
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 flex gap-3 items-start">
            <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                <path d="M20 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
              </svg>
            </div>
            <div>
              <p className="text-sm font-bold text-purple-900">Pago fácil por Nequi</p>
              <p className="text-sm text-purple-700 mt-0.5">
                Consigna al número <span className="font-semibold">321 880 4374</span> y envíanos el comprobante por WhatsApp. Confirmamos el envío de inmediato.
              </p>
            </div>
          </div>

          {/* Garantías */}
          <div className="grid grid-cols-3 gap-3 pt-2 border-t border-[var(--color-border)]">
            {[
              { icon: "🚚", text: "Envío a toda Colombia" },
              { icon: "✅", text: "Producto certificado" },
              { icon: "💬", text: "Soporte por WhatsApp" },
            ].map((g) => (
              <div key={g.text} className="text-center">
                <div className="text-xl mb-1">{g.icon}</div>
                <p className="text-[11px] text-[var(--color-text-light)] leading-tight">{g.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Volver */}
      <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
        <Link
          href="/catalogo"
          className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold hover:underline"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
          </svg>
          Volver al catálogo
        </Link>
      </div>
    </div>
  );
}
