import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { productos } from "@/data/productos";
import ProductoDetalle from "./ProductoDetalle";

const baseUrl = "https://www.marthacdistribuciones.com";

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
  const rawDesc = producto.descripcion.replace(/\n/g, " ").trim();
  const description = rawDesc.length > 155 ? rawDesc.slice(0, 152) + "..." : rawDesc;
  const imageUrl = `${baseUrl}${producto.imagen}`;
  const pageUrl = `${baseUrl}/catalogo/${producto.id}`;

  return {
    title,
    description,
    keywords: [
      producto.nombre,
      producto.categoria,
      producto.marca ?? "Martha C Distribuciones",
      "suplementos Colombia",
      "comprar Colombia",
      "envío Colombia",
    ],
    openGraph: {
      title,
      description,
      url: pageUrl,
      type: "website",
      locale: "es_CO",
      siteName: "Martha C Distribuciones",
      images: [{ url: imageUrl, width: 800, height: 800, alt: producto.nombre }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    alternates: {
      canonical: pageUrl,
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

  const pageUrl = `${baseUrl}/catalogo/${producto.id}`;

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: producto.nombre,
    description: producto.descripcion,
    sku: producto.id,
    url: pageUrl,
    image: producto.imagenes
      ? producto.imagenes.map((img) => `${baseUrl}${img}`)
      : [`${baseUrl}${producto.imagen}`],
    brand: producto.marca
      ? { "@type": "Brand", name: producto.marca }
      : { "@type": "Brand", name: "Martha C Distribuciones" },
    offers: {
      "@type": "Offer",
      priceCurrency: "COP",
      price: producto.precio,
      priceValidUntil: "2026-12-31",
      availability: producto.activo
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      itemCondition: "https://schema.org/NewCondition",
      url: pageUrl,
      seller: {
        "@type": "Organization",
        name: "Martha C Distribuciones",
        url: baseUrl,
      },
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Catálogo",
        item: `${baseUrl}/catalogo`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: producto.nombre,
        item: pageUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ProductoDetalle producto={producto} />
    </>
  );
}
