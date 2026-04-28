import { Suspense } from "react";
import type { Metadata } from "next";
import CatalogoContent from "@/components/CatalogoContent";

export const metadata: Metadata = {
  title: "Catálogo de Suplementos Naturales | Colágeno, Vitaminas y Bienestar",
  description:
    "Explora colágeno hidrolizado, vitaminas, suplementos deportivos, productos naturales y de bienestar. Precios justos y envíos a toda Colombia. Martha C Distribuciones.",
  alternates: {
    canonical: "https://www.marthacdistribuciones.com/catalogo",
  },
};

export default function CatalogoPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto px-4 py-12 text-center text-[var(--color-text-light)]">
          Cargando catálogo...
        </div>
      }
    >
      <CatalogoContent />
    </Suspense>
  );
}
