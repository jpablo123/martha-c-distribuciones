import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Quiénes Somos | Distribuidora de Suplementos Naturales en Colombia",
  description:
    "Conoce Martha C Distribuciones: empresa colombiana especializada en suplementos naturales, colágeno y productos de bienestar certificados. Atención personalizada y envíos a toda Colombia.",
  alternates: {
    canonical: "https://www.marthacdistribuciones.com/nosotros",
  },
};

const valores = [
  {
    titulo: "Calidad",
    descripcion: "Seleccionamos cuidadosamente cada producto para garantizar los más altos estándares de calidad y efectividad.",
  },
  {
    titulo: "Confianza",
    descripcion: "Construimos relaciones duraderas con nuestros clientes basadas en la transparencia y la honestidad.",
  },
  {
    titulo: "Bienestar",
    descripcion: "Nuestro propósito es contribuir al bienestar integral de cada persona que confía en nosotros.",
  },
  {
    titulo: "Servicio",
    descripcion: "Brindamos atención personalizada para ayudarte a encontrar los productos ideales para tus necesidades.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Image src="/logo.png" alt="Martha C Distribuciones" width={80} height={80} className="mx-auto mb-6 rounded-xl bg-white p-2" />
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Sobre Nosotros
            </h1>
            <p className="text-lg text-green-100 leading-relaxed">
              Somos una empresa colombiana dedicada a la distribución de suplementos naturales y productos para la salud y el bienestar.
            </p>
          </div>
        </div>
      </section>

      {/* Historia */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-[var(--color-border)]">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-6">
              Nuestra Historia
            </h2>
            <div className="space-y-4 text-[var(--color-text-light)] leading-relaxed">
              <p>
                <strong className="text-[var(--color-text)]">Martha C Distribuciones</strong> nació de la pasión por el bienestar natural y la convicción de que todos merecen acceso a productos de calidad para cuidar su salud.
              </p>
              <p>
                Con años de experiencia en el sector naturista, nos hemos consolidado como una distribuidora de confianza en Colombia, ofreciendo una cuidadosa selección de suplementos, vitaminas, colágeno y productos naturales que cumplen con los más altos estándares de calidad.
              </p>
              <p>
                Nuestro compromiso va más allá de la venta: brindamos asesoría personalizada para que cada cliente encuentre exactamente lo que necesita para mejorar su calidad de vida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text)] text-center mb-12">
            Nuestros Valores
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((valor) => (
              <div key={valor.titulo} className="text-center p-6 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)]">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[var(--color-primary)] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg text-[var(--color-text)] mb-2">
                  {valor.titulo}
                </h3>
                <p className="text-sm text-[var(--color-text-light)]">{valor.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-4">
            ¿Lista para mejorar tu bienestar?
          </h2>
          <p className="text-[var(--color-text-light)] mb-8">
            Explora nuestro catálogo y encuentra los productos perfectos para ti.
          </p>
          <Link
            href="/catalogo"
            className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-white font-bold px-8 py-4 rounded-xl hover:bg-[var(--color-primary-light)] transition-colors text-lg"
          >
            Ver Catálogo
          </Link>
        </div>
      </section>
    </>
  );
}
