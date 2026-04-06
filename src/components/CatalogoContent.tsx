"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import ProductoCard from "@/components/ProductoCard";
import { productos, categorias } from "@/data/productos";
import { motion, AnimatePresence } from "framer-motion";

export default function CatalogoContent() {
  const searchParams = useSearchParams();
  const categoriaInicial = searchParams.get("categoria") || "Todos";

  const [categoriaActiva, setCategoriaActiva] = useState(categoriaInicial);
  const [busqueda, setBusqueda] = useState("");
  const [ordenar, setOrdenar] = useState("relevancia");

  const productosFiltrados = useMemo(() => {
    let resultado = productos.filter((p) => p.activo);

    if (categoriaActiva !== "Todos") {
      resultado = resultado.filter((p) => p.categoria === categoriaActiva);
    }

    if (busqueda.trim()) {
      const query = busqueda.toLowerCase();
      resultado = resultado.filter(
        (p) =>
          p.nombre.toLowerCase().includes(query) ||
          p.descripcion.toLowerCase().includes(query) ||
          p.categoria.toLowerCase().includes(query)
      );
    }

    switch (ordenar) {
      case "precio-asc":
        resultado = [...resultado].sort((a, b) => a.precio - b.precio);
        break;
      case "precio-desc":
        resultado = [...resultado].sort((a, b) => b.precio - a.precio);
        break;
      case "nombre":
        resultado = [...resultado].sort((a, b) => a.nombre.localeCompare(b.nombre));
        break;
      default:
        resultado = [...resultado].sort((a, b) => (b.destacado ? 1 : 0) - (a.destacado ? 1 : 0));
    }

    return resultado;
  }, [categoriaActiva, busqueda, ordenar]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 18 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)]">
          Nuestro Catálogo
        </h1>
        <p className="text-[var(--color-text-light)] mt-2">
          Encuentra los mejores suplementos naturales para tu bienestar.
        </p>
      </motion.div>

      <motion.div
        className="mb-8 space-y-4"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.1 }}
      >
        {/* Buscador */}
        <div className="relative max-w-md">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-light)]">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          <input
            type="text"
            placeholder="Buscar productos..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all bg-white"
          />
        </div>

        {/* Filtros */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex flex-wrap gap-2">
            {categorias.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setCategoriaActiva(cat)}
                whileTap={{ scale: 0.92 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 cursor-pointer ${
                  categoriaActiva === cat
                    ? "bg-[var(--color-primary)] text-white shadow-md"
                    : "bg-white text-[var(--color-text)] border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          <select
            value={ordenar}
            onChange={(e) => setOrdenar(e.target.value)}
            className="px-4 py-2 rounded-xl border border-[var(--color-border)] bg-white text-sm focus:border-[var(--color-primary)] outline-none cursor-pointer"
          >
            <option value="relevancia">Relevancia</option>
            <option value="precio-asc">Menor precio</option>
            <option value="precio-desc">Mayor precio</option>
            <option value="nombre">Nombre A-Z</option>
          </select>
        </div>
      </motion.div>

      <p className="text-sm text-[var(--color-text-light)] mb-4">
        {productosFiltrados.length} producto{productosFiltrados.length !== 1 ? "s" : ""} encontrado{productosFiltrados.length !== 1 ? "s" : ""}
      </p>

      {productosFiltrados.length > 0 ? (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          layout
        >
          <AnimatePresence mode="popLayout">
            {productosFiltrados.map((producto, i) => (
              <motion.div
                key={producto.id}
                layout
                initial={{ opacity: 0, scale: 0.88, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.88, y: -10 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 22,
                  delay: i * 0.04,
                }}
              >
                <ProductoCard producto={producto} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <motion.div
          className="text-center py-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 150, damping: 20 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-16 h-16 mx-auto text-[var(--color-text-light)] opacity-40 mb-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          <p className="text-[var(--color-text-light)] text-lg">No se encontraron productos.</p>
          <motion.button
            onClick={() => { setBusqueda(""); setCategoriaActiva("Todos"); }}
            className="mt-4 text-[var(--color-primary)] hover:underline font-medium cursor-pointer"
            whileTap={{ scale: 0.95 }}
          >
            Limpiar filtros
          </motion.button>
        </motion.div>
      )}
    </div>
  );
}
