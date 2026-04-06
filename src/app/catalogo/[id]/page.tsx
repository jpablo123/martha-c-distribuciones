import { notFound } from "next/navigation";
import { productos } from "@/data/productos";
import ProductoDetalle from "./ProductoDetalle";

export function generateStaticParams() {
  return productos.map((p) => ({ id: p.id }));
}

export default async function ProductoDetallePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const producto = productos.find((p) => p.id === id);
  if (!producto) notFound();
  return <ProductoDetalle producto={producto} />;
}
