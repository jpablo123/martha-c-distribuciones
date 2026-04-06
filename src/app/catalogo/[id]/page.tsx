import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { productos } from "@/data/productos";
import ProductoDetalle from "./ProductoDetalle";

const baseUrl = "https://marthac-distribuciones.com";

export function generateStaticParams() {
  return productos.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const producto = productos.find((p) => p.id === id);
  if (!producto) return {};

  const title = producto.nombre;
  const description = producto.descripcion;
  const imageUrl = `${baseUrl}${producto.imagen}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${baseUrl}/catalogo/${producto.id}`,
      images: [{ url: imageUrl, width: 800, height: 800, alt: producto.nombre }],
    },
    alternates: {
      canonical: `${baseUrl}/catalogo/${producto.id}`,
    },
  };
}

export default async function ProductoDetallePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const producto = productos.find((p) => p.id === id);
  if (!producto) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: producto.nombre,
    description: producto.descripcion,
    image: `${baseUrl}${producto.imagen}`,
    brand: producto.marca
      ? { "@type": "Brand", name: producto.marca }
      : { "@type": "Brand", name: "Martha C Distribuciones" },
    offers: {
      "@type": "Offer",
      priceCurrency: "COP",
      price: producto.precio,
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: "Martha C Distribuciones" },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductoDetalle producto={producto} />
    </>
  );
}
