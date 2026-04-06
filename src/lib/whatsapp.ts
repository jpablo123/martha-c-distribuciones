import { type ItemCarrito } from "@/context/CarritoContext";

export interface DatosEnvio {
  nombre: string;
  cedula: string;
  telefono: string;
  email: string;
  direccion: string;
  ciudad: string;
  departamento: string;
  notas: string;
}

const WHATSAPP_NUMBER = "573218804374";

function formatearPrecio(precio: number): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  }).format(precio);
}

export function generarMensajeWhatsApp(
  items: ItemCarrito[],
  datos: DatosEnvio,
  total: number
): string {
  const lineasProductos = items
    .map(
      (item) =>
        `• ${item.producto.nombre} x${item.cantidad} — ${formatearPrecio(item.producto.precio * item.cantidad)}`
    )
    .join("\n");

  const mensaje = `🛒 *NUEVO PEDIDO - Martha C Distribuciones*

━━━━━━━━━━━━━━━━━━━━━

📦 *PRODUCTOS:*
${lineasProductos}

💰 *TOTAL: ${formatearPrecio(total)}*

━━━━━━━━━━━━━━━━━━━━━

👤 *DATOS DEL CLIENTE:*
• Nombre: ${datos.nombre}
• Cédula: ${datos.cedula}
• Teléfono: ${datos.telefono}
${datos.email ? `• Email: ${datos.email}` : ""}

━━━━━━━━━━━━━━━━━━━━━

🚚 *DATOS DE ENVÍO:*
• Dirección: ${datos.direccion}
• Ciudad: ${datos.ciudad}
• Departamento: ${datos.departamento}
${datos.notas ? `• Notas: ${datos.notas}` : ""}

━━━━━━━━━━━━━━━━━━━━━

💜 *MÉTODO DE PAGO:*
Nequi al número *321 880 4374*
Por favor envíe el comprobante de pago aquí mismo.

━━━━━━━━━━━━━━━━━━━━━

¡Muchas gracias por su compra! 🌿`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;
}
