export interface Producto {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  categoria: string;
  imagen: string;
  imagenes?: string[];
  destacado?: boolean;
  activo: boolean;
  contenido?: string;
  marca?: string;
}

export const categorias = [
  "Todos",
  "Colágeno",
  "Suplementos",
  "Naturales",
  "Bienestar",
  "Deportes",
];

export const productos: Producto[] = [
  {
    id: "vital-sport",
    nombre: "Vital Sport - Energía Natural y Rendimiento",
    descripcion:
      "Suplemento en polvo 800g con Maca, Chontaduro y Borojó. Vitaminas B1, B2, B6, B12 y K. Endulzado con Stevia. Sabor Kiwi. Ideal para deportistas y personas activas.",
    precio: 59000,
    categoria: "Deportes",
    imagen: "/productos/vital-sport/vital-sport-1.png",
    imagenes: [
      "/productos/vital-sport/vital-sport-1.png",
      "/productos/vital-sport/vital-sport-2.png",
      "/productos/vital-sport/vital-sport-3.png",
    ],
    contenido: "800g",
    marca: "Vitalnip Marketing S.A.S.",
    activo: true,
    destacado: true,
  },
  {
    id: "aliflus-vita-c",
    nombre: "Aliflus Vita C - Caja x 24 Sobres",
    descripcion:
      "Vitamina C liposomal de alta absorción con bioflavonoides naturales. Potente antioxidante que refuerza el sistema inmunológico, mejora la producción de colágeno y combate el estrés oxidativo. Protección diaria para toda la familia.",
    precio: 77700,
    categoria: "Suplementos",
    imagen: "/productos/aliflus-vita-c/aliflus-vita-c-1.png",
    imagenes: [
      "/productos/aliflus-vita-c/aliflus-vita-c-1.png",
    ],
    activo: true,
    destacado: false,
  },
  {
    id: "multigrw",
    nombre: "Multigrow - Alimento en Polvo Proteico 400g",
    descripcion:
      "Alimento en polvo a base de proteína aislada de suero, con proteína de caseína, maltodextrina, dextrosa, colágeno, omega 3, vitaminas y minerales. Previene el desgaste muscular, aumenta la fuerza y reduce la degradación muscular y el tiempo de recuperación en adultos convalecientes de diferentes enfermedades, por contener en su fórmula HMB y GLUTATIÓN.\n\nModo de uso: En un vaso de leche, jugo o agua adicione 2 cucharadas (30g) y disuelva hasta obtener un producto homogéneo. Consúmase una vez preparado.\n\nEste producto es un suplemento dietario, no es un medicamento y no suple una alimentación equilibrada. No consumir en estado de embarazo y lactancia.",
    precio: 62700,
    categoria: "Bienestar",
    imagen: "/productos/multigrw/multigrw-1.png",
    imagenes: [
      "/productos/multigrw/multigrw-1.png",
    ],
    contenido: "400g",
    activo: true,
    destacado: false,
  },
  {
    id: "inmufactor",
    nombre: "Inmufactor - Fortalece tu Sistema Inmune",
    descripcion:
      "Suplemento inmunoestimulante con activos naturales que refuerzan las defensas del organismo, reducen la fatiga y protegen frente a infecciones. Ideal para épocas de alta exposición viral o desgaste físico.",
    precio: 77200,
    categoria: "Suplementos",
    imagen: "/productos/inmufactor/inmufactor-1.png",
    imagenes: [
      "/productos/inmufactor/inmufactor-1.png",
    ],
    contenido: "800g",
    activo: true,
    destacado: false,
  },
  {
    id: "colagyn-10",
    nombre: "Colagyn 10 - Colágeno Hidrolizado Premium 800g",
    descripcion:
      "Colágeno hidrolizado de alta biodisponibilidad para recuperar la firmeza de la piel, fortalecer articulaciones, cabello y uñas. Fórmula avanzada con péptidos de colágeno de rápida absorción. Resultados visibles desde las primeras semanas.",
    precio: 69500,
    categoria: "Colágeno",
    imagen: "/productos/colagyn-10/colagyn-10-1.png",
    imagenes: [
      "/productos/colagyn-10/colagyn-10-1.png",
    ],
    activo: true,
    destacado: true,
  },
  {
    id: "sales-de-magnesio",
    nombre: "IQ Sales de Magnesio Mg²⁺ - Triple Complejo",
    descripcion:
      "Triple complejo avanzado: Citrato, Bisglicinato y Treonato de Magnesio. Recuperación muscular, relajación profunda y claridad mental. El único magnesio que cruza la barrera hematoencefálica para potenciar tu mente y tu cuerpo.",
    precio: 69000,
    categoria: "Suplementos",
    imagen: "/productos/sales-de-magnesio/sales-de-magnesio-1.png",
    imagenes: [
      "/productos/sales-de-magnesio/sales-de-magnesio-1.png",
    ],
    marca: "IQ Intelligent Quality",
    activo: true,
    destacado: true,
  },
  {
    id: "aceite-para-masajes",
    nombre: "Aceite para Masajes Natural Sofi",
    descripcion:
      "Fórmula natural de textura ligera con atomizador. Deslizamiento fluido para masajes relajantes y terapéuticos. Alivia tensiones musculares, hidrata la piel y promueve el bienestar integral. 60 ml.",
    precio: 42000,
    categoria: "Bienestar",
    imagen: "/productos/aceite-para-masajes/aceite-para-masajes-1.png",
    imagenes: [
      "/productos/aceite-para-masajes/aceite-para-masajes-1.png",
      "/productos/aceite-para-masajes/aceite-para-masajes-2.png",
    ],
    contenido: "60 ml",
    activo: true,
    destacado: false,
  },
  {
    id: "champu-capilsan",
    nombre: "Champú Capilsan Natural",
    descripcion:
      "Champú de fórmula natural que fortalece el cabello desde la raíz, controla la caída y nutre el cuero cabelludo. Sin sulfatos agresivos. Apto para uso diario en todo tipo de cabello.",
    precio: 52000,
    categoria: "Bienestar",
    imagen: "/productos/champu-capilsan/champu-capilsan-1.png",
    imagenes: [
      "/productos/champu-capilsan/champu-capilsan-1.png",
    ],
    activo: true,
    destacado: false,
  },
  {
    id: "extractos-flores",
    nombre: "Extractos de Flores Naturales",
    descripcion:
      "Extracto floral de alta concentración con propiedades antioxidantes, relajantes y reguladoras del organismo. Ideal para el bienestar emocional y el equilibrio natural del cuerpo.",
    precio: 72000,
    categoria: "Naturales",
    imagen: "/productos/extractos-flores/extractos-flores-1.png",
    imagenes: [
      "/productos/extractos-flores/extractos-flores-1.png",
    ],
    activo: true,
    destacado: false,
  },
];
