import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { CarritoProvider } from "@/context/CarritoContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://marthac-distribuciones.com"),
  title: {
    default: "Martha C Distribuciones | Suplementos Naturales y Bienestar en Colombia",
    template: "%s | Martha C Distribuciones",
  },
  description:
    "Tienda de suplementos naturales, colágeno, vitaminas y productos para la salud y el bienestar. Envíos a toda Colombia. Productos certificados de la mejor calidad.",
  keywords: [
    "suplementos naturales Colombia",
    "colágeno hidrolizado",
    "vitaminas y minerales",
    "productos naturistas",
    "salud y bienestar",
    "tienda naturista Colombia",
    "suplementos deportivos",
    "colágeno con magnesio",
    "Martha C Distribuciones",
    "productos para la salud",
    "tienda de suplementos",
    "nutrición natural",
  ],
  authors: [{ name: "Martha C Distribuciones" }],
  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName: "Martha C Distribuciones",
    title: "Martha C Distribuciones | Suplementos Naturales y Bienestar",
    description:
      "Tu tienda de confianza en suplementos naturales, colágeno y productos para la salud. Envíos a toda Colombia.",
    images: [{ url: "/logo.png", width: 500, height: 500, alt: "Martha C Distribuciones Logo" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: "Martha C Distribuciones",
    description: "Tienda de suplementos naturales, colágeno, vitaminas y productos para la salud y el bienestar en Colombia.",
    url: "https://marthac-distribuciones.com",
    telephone: "+573218804374",
    address: {
      "@type": "PostalAddress",
      addressCountry: "CO",
    },
    priceRange: "$$",
    image: "/logo.png",
  };

  return (
    <html lang="es" className={poppins.variable} data-scroll-behavior="smooth">
      <head>
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <CarritoProvider>
          {/* Bloque superior sticky: banner + nav */}
          <div className="sticky top-0 z-50">
            {/* Banner envío gratis */}
            <div className="bg-[var(--color-primary)] text-white text-sm py-2 px-4 text-center">
              <span className="inline-flex items-center gap-2 font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
                  <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V4.5h-10.125zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875H4.5a3 3 0 1 0 6 0h3.75a.75.75 0 0 0 .75-.75V15zM8.25 19.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM15.75 6.75a.75.75 0 0 0-.75.75v11.25c0 .087.015.17.042.248a3 3 0 0 0 5.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 0 0-3.732-10.104 1.837 1.837 0 0 0-1.47-.725H15.75zM19.5 19.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                </svg>
                Envío gratis a toda Colombia en todos tus pedidos
              </span>
            </div>
            <Header />
          </div>
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppFloat />
        </CarritoProvider>
      </body>
    </html>
  );
}
