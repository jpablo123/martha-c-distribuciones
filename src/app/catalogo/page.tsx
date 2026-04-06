import { Suspense } from "react";
import type { Metadata } from "next";
import CatalogoContent from "@/components/CatalogoContent";

export const metadata: Metadata = {
  title: "Catálogo",
  description: "Explora nuestro catálogo completo de suplementos naturales, colágeno, vitaminas y productos para la salud. Envíos a toda Colombia.",
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
