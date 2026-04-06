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
    id: "bidens-pilosa",
    nombre: "Bidens Pilosa - Jarabe Natural 360ml",
    descripcion:
      "Jarabe a base de Bidens Pilosa (amor seco), planta medicinal utilizada como tratamiento natural para combatir la gastritis crónica y la bacteria Helicobacter Pylori. Sus propiedades antibacterianas, antiinflamatorias e inmunoestimuladoras ayudan a reducir la inflamación gástrica, aliviar el ardor y proteger la mucosa estomacal. También apoya la salud digestiva, respiratoria y fortalece las defensas del organismo. Fórmula natural de alta concentración.",
    precio: 62000,
    categoria: "Naturales",
    imagen: "/productos/bidens-pilosa/bidens-pilosa-1.png",
    imagenes: [
      "/productos/bidens-pilosa/bidens-pilosa-1.png",
    ],
    contenido: "360ml",
    marca: "Pilobide",
    activo: true,
    destacado: false,
  },
  {
    id: "oximax",
    nombre: "Oximax con Clorofila - Antioxidante Natural Sabor Menta",
    descripcion:
      "Suplemento líquido con clorofila natural sabor menta. La clorofila actúa como potente antioxidante: oxigena la sangre, favorece la desintoxicación del organismo, alcaliniza el pH corporal y contribuye a la eliminación de toxinas. Ideal para mejorar la vitalidad, la digestión y el bienestar general.",
    precio: 49600,
    categoria: "Naturales",
    imagen: "/productos/oximax/oximax-1.png",
    imagenes: [
      "/productos/oximax/oximax-1.png",
    ],
    activo: true,
    destacado: false,
  },
  {
    id: "danolenty",
    nombre: "Danolenty - Bebida para Fortalecer el Sistema Inmune 960ml",
    descripcion:
      "Bebida natural a base de Sirope de Yacón, Colágeno, Hongo Shiitake (Lentinula Edodes), Betaglucanos de Avena y Lentinán. Enriquecida con vitaminas B1 y B2, Magnesio y Zinc. Potente inmunoestimulante que refuerza las defensas del organismo, combate el cansancio y protege frente a infecciones. Sabor Champiñón. 8 porciones por envase.",
    precio: 107000,
    categoria: "Suplementos",
    imagen: "/productos/danolenty/danolenty-1.png",
    imagenes: [
      "/productos/danolenty/danolenty-1.png",
    ],
    contenido: "960ml",
    activo: true,
    destacado: false,
  },
  {
    id: "fibruela",
    nombre: "Fibruela - Fibra Natural con Linaza y Fibra de Manzana 300g",
    descripcion:
      "Alimento en polvo a base de pulpa de fruta con malta, fibra de manzana, psyllium y linaza molida. Sabor artificial a ciruela. Fortificado con vitaminas y minerales. Favorece el tránsito intestinal, mejora la digestión y contribuye al bienestar digestivo diario. Fácil de disolver en agua o jugos.",
    precio: 62500,
    categoria: "Naturales",
    imagen: "/productos/fibruela/fibruela-1.png",
    imagenes: [
      "/productos/fibruela/fibruela-1.png",
    ],
    contenido: "300g",
    activo: true,
    destacado: false,
  },
  {
    id: "actipen",
    nombre: "Actipen - Termogénico Líquido de Alta Concentración",
    descripcion:
      "Suplemento termogénico líquido de alta concentración al 8%. Formulado para potenciar el metabolismo, aumentar la energía y favorecer la quema de grasa de forma natural. Ideal para personas activas que buscan optimizar su rendimiento y composición corporal. Fácil de consumir y de rápida absorción.",
    precio: 59000,
    categoria: "Deportes",
    imagen: "/productos/actipen/actipen-1.png",
    imagenes: [
      "/productos/actipen/actipen-1.png",
    ],
    activo: true,
    destacado: false,
  },
  {
    id: "colagyn-500ml-uva",
    nombre: "Colagyn 10 Líquido - Colágeno Hidrolizado Sabor Uva 500ml",
    descripcion:
      "Colágeno hidrolizado en formato líquido con vitaminas E, C y D. Sabor uva. Mezcla con frutas naturales (uva, mora y fresa) para una absorción óptima. Favorece la firmeza de la piel, la salud articular y el fortalecimiento de cabello y uñas. 17 porciones por envase.",
    precio: 49600,
    categoria: "Colágeno",
    imagen: "/productos/colagyn-500ml-uva/colagyn-500ml-uva-1.png",
    imagenes: [
      "/productos/colagyn-500ml-uva/colagyn-500ml-uva-1.png",
    ],
    contenido: "500ml",
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
