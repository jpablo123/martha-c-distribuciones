"use client";

import { useState } from "react";
import Link from "next/link";
import { useCarrito } from "@/context/CarritoContext";
import { generarMensajeWhatsApp, type DatosEnvio } from "@/lib/whatsapp";

const departamentos = [
  "Amazonas", "Antioquia", "Arauca", "Atlántico", "Bogotá D.C.", "Bolívar",
  "Boyacá", "Caldas", "Caquetá", "Casanare", "Cauca", "Cesar", "Chocó",
  "Córdoba", "Cundinamarca", "Guainía", "Guaviare", "Huila", "La Guajira",
  "Magdalena", "Meta", "Nariño", "Norte de Santander", "Putumayo", "Quindío",
  "Risaralda", "San Andrés", "Santander", "Sucre", "Tolima", "Valle del Cauca",
  "Vaupés", "Vichada",
];

export default function CarritoPage() {
  const { items, removerProducto, actualizarCantidad, totalPrecio, limpiarCarrito } = useCarrito();
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [datos, setDatos] = useState<DatosEnvio>({
    nombre: "",
    cedula: "",
    telefono: "",
    email: "",
    direccion: "",
    ciudad: "",
    departamento: "",
    notas: "",
  });

  const formatearPrecio = (precio: number) =>
    new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(precio);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const handleEnviar = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const url = generarMensajeWhatsApp(items, datos, totalPrecio);
    window.open(url, "_blank");
    limpiarCarrito();
    setMostrarFormulario(false);
  };

  if (items.length === 0 && !mostrarFormulario) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-20 h-20 mx-auto text-[var(--color-text-light)] opacity-30 mb-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>
        <h1 className="text-2xl font-bold text-[var(--color-text)] mb-4">
          Tu carrito está vacío
        </h1>
        <p className="text-[var(--color-text-light)] mb-8">
          Agrega productos desde nuestro catálogo para comenzar tu pedido.
        </p>
        <Link
          href="/catalogo"
          className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-white font-bold px-6 py-3 rounded-xl hover:bg-[var(--color-primary-light)] transition-colors"
        >
          Ir al Catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <h1 className="text-3xl font-bold text-[var(--color-text)] mb-8">
        Tu Carrito
      </h1>

      {!mostrarFormulario ? (
        <>
          {/* Lista de productos */}
          <div className="space-y-4 mb-8">
            {items.map((item) => (
              <div
                key={item.producto.id}
                className="bg-white rounded-xl p-4 sm:p-6 border border-[var(--color-border)] flex flex-col sm:flex-row sm:items-center gap-4"
              >
                {/* Info */}
                <div className="flex-1">
                  <h3 className="font-bold text-[var(--color-text)]">
                    {item.producto.nombre}
                  </h3>
                  <p className="text-sm text-[var(--color-text-light)]">
                    {item.producto.categoria}
                  </p>
                  <p className="text-[var(--color-primary)] font-bold mt-1">
                    {formatearPrecio(item.producto.precio)}
                  </p>
                </div>

                {/* Cantidad */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => actualizarCantidad(item.producto.id, item.cantidad - 1)}
                    className="w-8 h-8 rounded-lg border border-[var(--color-border)] flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    -
                  </button>
                  <span className="font-bold w-8 text-center">{item.cantidad}</span>
                  <button
                    onClick={() => actualizarCantidad(item.producto.id, item.cantidad + 1)}
                    className="w-8 h-8 rounded-lg border border-[var(--color-border)] flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    +
                  </button>
                </div>

                {/* Subtotal + Eliminar */}
                <div className="flex items-center gap-4">
                  <p className="font-bold text-lg text-[var(--color-text)] min-w-[100px] text-right">
                    {formatearPrecio(item.producto.precio * item.cantidad)}
                  </p>
                  <button
                    onClick={() => removerProducto(item.producto.id)}
                    className="text-red-400 hover:text-red-600 transition-colors cursor-pointer"
                    aria-label="Eliminar producto"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="bg-white rounded-xl p-6 border border-[var(--color-border)]">
            <div className="flex items-center justify-between mb-6">
              <span className="text-lg font-semibold text-[var(--color-text)]">Total:</span>
              <span className="text-2xl font-bold text-[var(--color-primary)]">
                {formatearPrecio(totalPrecio)}
              </span>
            </div>
            <button
              onClick={() => setMostrarFormulario(true)}
              className="w-full bg-[var(--color-primary)] text-white font-bold py-4 rounded-xl hover:bg-[var(--color-primary-light)] transition-colors text-lg flex items-center justify-center gap-3 cursor-pointer"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              </svg>
              Completar pedido por WhatsApp
            </button>
          </div>
        </>
      ) : (
        /* Formulario de envío */
        <form onSubmit={handleEnviar} className="bg-white rounded-xl p-6 md:p-8 border border-[var(--color-border)]">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">
            Datos de Envío
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-[var(--color-text)] mb-1">Nombre completo *</label>
              <input type="text" name="nombre" value={datos.nombre} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--color-text)] mb-1">Cédula *</label>
              <input type="text" name="cedula" value={datos.cedula} onChange={handleChange} required placeholder="Número de documento" className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--color-text)] mb-1">Teléfono *</label>
              <input type="tel" name="telefono" value={datos.telefono} onChange={handleChange} required placeholder="3XX XXX XXXX" className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--color-text)] mb-1">Email</label>
              <input type="email" name="email" value={datos.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-[var(--color-text)] mb-1">Dirección de envío *</label>
              <input type="text" name="direccion" value={datos.direccion} onChange={handleChange} required placeholder="Calle, número, barrio..." className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--color-text)] mb-1">Ciudad *</label>
              <input type="text" name="ciudad" value={datos.ciudad} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--color-text)] mb-1">Departamento *</label>
              <select name="departamento" value={datos.departamento} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none cursor-pointer bg-white">
                <option value="">Seleccionar...</option>
                {departamentos.map((dep) => (
                  <option key={dep} value={dep}>{dep}</option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-[var(--color-text)] mb-1">Notas adicionales</label>
              <textarea name="notas" value={datos.notas} onChange={handleChange} rows={3} placeholder="Instrucciones especiales de entrega, referencias..." className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none resize-none" />
            </div>
          </div>

          {/* Resumen */}
          <div className="bg-[var(--color-bg)] rounded-xl p-4 mb-6">
            <h3 className="font-bold text-sm text-[var(--color-text)] mb-2">Resumen del pedido:</h3>
            {items.map((item) => (
              <div key={item.producto.id} className="flex justify-between text-sm py-1">
                <span className="text-[var(--color-text-light)]">{item.producto.nombre} x{item.cantidad}</span>
                <span className="font-medium">{formatearPrecio(item.producto.precio * item.cantidad)}</span>
              </div>
            ))}
            <div className="border-t border-[var(--color-border)] mt-2 pt-2 flex justify-between font-bold">
              <span>Total</span>
              <span className="text-[var(--color-primary)]">{formatearPrecio(totalPrecio)}</span>
            </div>
          </div>

          {/* Pago Bancolombia */}
          <div className="rounded-xl border border-[#FFD700]/40 bg-[#FFFBEA] p-4 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#FFCD00]">
                <rect width="24" height="24" rx="4" fill="#FFCD00"/>
                <path d="M5 12h14M12 5l7 7-7 7" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h3 className="font-bold text-sm text-[var(--color-text)]">Pago por transferencia Bancolombia</h3>
            </div>
            <div className="space-y-1 text-sm text-[var(--color-text)]">
              <p><span className="text-[var(--color-text-light)]">Banco:</span> <span className="font-semibold">Bancolombia</span></p>
              <p><span className="text-[var(--color-text-light)]">Tipo de cuenta:</span> <span className="font-semibold">Ahorros</span></p>
              <p><span className="text-[var(--color-text-light)]">Número de cuenta:</span> <span className="font-mono font-semibold tracking-wide">205-709192-54</span></p>
              <p><span className="text-[var(--color-text-light)]">Titular:</span> <span className="font-semibold">Martha Moscoso</span></p>
            </div>
            <p className="text-xs text-[var(--color-text-light)] mt-3">
              Realiza la transferencia y envíanos el comprobante por WhatsApp al completar el pedido.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => setMostrarFormulario(false)}
              className="px-6 py-3 rounded-xl border border-[var(--color-border)] text-[var(--color-text)] hover:bg-gray-50 transition-colors font-medium cursor-pointer"
            >
              Volver al carrito
            </button>
            <button
              type="submit"
              className="flex-1 bg-green-500 text-white font-bold py-3 px-6 rounded-xl hover:bg-green-600 transition-colors flex items-center justify-center gap-3 text-lg cursor-pointer"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              </svg>
              Enviar pedido por WhatsApp
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
