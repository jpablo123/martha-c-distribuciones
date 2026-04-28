import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | Atención Personalizada por WhatsApp en Colombia",
  description:
    "Contáctanos por WhatsApp al +57 321 880 4374. Asesoría personalizada en suplementos naturales y productos de bienestar. Martha C Distribuciones, Colombia.",
  alternates: {
    canonical: "https://www.marthacdistribuciones.com/contacto",
  },
};

export default function ContactoPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)]">
          Contáctanos
        </h1>
        <p className="text-[var(--color-text-light)] mt-2 max-w-2xl mx-auto">
          Estamos aquí para ayudarte. Escríbenos o llámanos y te atenderemos con gusto.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Info de contacto */}
        <div className="space-y-6">
          {/* WhatsApp */}
          <a
            href="https://wa.me/573218804374?text=Hola%2C%20quiero%20información%20sobre%20sus%20productos"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-[var(--color-border)] hover:shadow-md hover:border-green-300 transition-all group"
          >
            <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-[var(--color-text)] text-lg">
                WhatsApp
              </h3>
              <p className="text-[var(--color-primary)] font-medium">+57 321 880 4374</p>
              <p className="text-sm text-[var(--color-text-light)] mt-1">
                Escríbenos y te respondemos al instante. Atención personalizada.
              </p>
            </div>
          </a>

          {/* Teléfono */}
          <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-[var(--color-border)]">
            <div className="w-14 h-14 rounded-full bg-[var(--color-primary)] flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-[var(--color-text)] text-lg">
                Teléfono
              </h3>
              <p className="text-[var(--color-primary)] font-medium">+57 321 880 4374</p>
              <p className="text-sm text-[var(--color-text-light)] mt-1">
                Llámanos en horario de atención.
              </p>
            </div>
          </div>

          {/* Ubicación */}
          <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-[var(--color-border)]">
            <div className="w-14 h-14 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-[var(--color-text)] text-lg">
                Ubicación
              </h3>
              <p className="text-[var(--color-primary)] font-medium">Colombia</p>
              <p className="text-sm text-[var(--color-text-light)] mt-1">
                Envíos a todo el territorio nacional.
              </p>
            </div>
          </div>

          {/* Horario */}
          <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-[var(--color-border)]">
            <div className="w-14 h-14 rounded-full bg-[var(--color-secondary)] flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-[var(--color-text)] text-lg">
                Horario de Atención
              </h3>
              <p className="text-sm text-[var(--color-text-light)] mt-1">
                Lunes a Viernes: 8:00 AM - 6:00 PM<br />
                Sábados: 8:00 AM - 1:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* CTA grande */}
        <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-2xl p-8 md:p-10 text-white flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            ¿Tienes preguntas sobre nuestros productos?
          </h2>
          <p className="text-green-100 mb-8 leading-relaxed">
            Nuestro equipo está listo para asesorarte y ayudarte a encontrar los suplementos ideales para mejorar tu salud y bienestar.
          </p>
          <a
            href="https://wa.me/573218804374?text=Hola%2C%20tengo%20una%20consulta%20sobre%20sus%20productos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-white text-[var(--color-primary)] font-bold px-8 py-4 rounded-xl hover:bg-green-50 transition-colors text-lg shadow-lg"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            </svg>
            Escríbenos por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
