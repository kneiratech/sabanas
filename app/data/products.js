// Catálogo compartido por el banner del hero y la sección de colección.
// compareAt: precio antes de la oferta de la semana. deal: promoción por volumen.
export const categories = [
  { id: "sabanas", name: "Sábanas", image: "/images/percale.jpg" },
  { id: "edredones", name: "Edredones", image: "/images/sage-bedroom.jpg" },
  { id: "fundas", name: "Fundas", image: "/images/hero.jpg" },
];

export const products = [
  {
    name: "Juego Percal Hotel",
    category: "sabanas",
    tagline: "Fresco, crujiente y mate, como en un hotel cinco estrellas.",
    fabric: "100% algodón egipcio · 400 hilos",
    price: 189,
    compareAt: 239,
    deal: "2 juegos x S/ 349",
    image: "/images/percale.jpg",
    badge: "Más vendido",
    colors: [
      { name: "Blanco nube", hex: "#fbfaf7" },
      { name: "Gris piedra", hex: "#a8a29a" },
      { name: "Salvia", hex: "#8a9a82" },
    ],
  },
  {
    name: "Lino Lavado Rayas",
    category: "sabanas",
    tagline: "Textura relajada que se vuelve más suave con cada lavado.",
    fabric: "100% lino francés · lavado a la piedra",
    price: 259,
    image: "/images/linen-stripe.jpg",
    badge: "Nuevo",
    colors: [
      { name: "Canela", hex: "#b8643e" },
      { name: "Arena", hex: "#d8c8b4" },
      { name: "Oliva", hex: "#6f7a5a" },
    ],
  },
  {
    name: "Satén Seda Suave",
    category: "sabanas",
    tagline: "Brillo sutil y caída sedosa para noches de lujo.",
    fabric: "Algodón Supima · 600 hilos",
    price: 229,
    compareAt: 289,
    image: "/images/sateen.jpg",
    colors: [
      { name: "Marfil", hex: "#f1e9dc" },
      { name: "Taupe", hex: "#8c7b6b" },
      { name: "Carbón", hex: "#3a3734" },
    ],
  },
  {
    name: "Algodón Esencial",
    category: "sabanas",
    tagline: "Nuestro básico de todos los días, suave y fácil de cuidar.",
    fabric: "100% algodón peinado · 300 hilos",
    price: 149,
    deal: "3 juegos x S/ 399",
    image: "/images/cotton-white.jpg",
    colors: [
      { name: "Blanco", hex: "#ffffff" },
      { name: "Menta", hex: "#cfe8d0" },
      { name: "Azul noche", hex: "#2c3e57" },
    ],
  },
  {
    name: "Edredón Bosque",
    category: "edredones",
    tagline: "Relleno ligero y funda de algodón en tonos naturales.",
    fabric: "Funda de algodón · relleno hipoalergénico",
    price: 299,
    compareAt: 379,
    image: "/images/sage-bedroom.jpg",
    badge: "Edición limitada",
    colors: [
      { name: "Bosque", hex: "#5f7a63" },
      { name: "Hoja", hex: "#2f9e44" },
      { name: "Avena", hex: "#e4dccb" },
    ],
  },
  {
    name: "Percal Noche",
    category: "sabanas",
    tagline: "Tonos profundos que esconden el uso y combinan con todo.",
    fabric: "100% algodón egipcio · 400 hilos",
    price: 199,
    image: "/images/charcoal.jpg",
    colors: [
      { name: "Carbón", hex: "#2f2f2f" },
      { name: "Bosque", hex: "#1b4332" },
      { name: "Grafito", hex: "#5a5a5a" },
    ],
  },
  {
    name: "Fundas de Lino (par)",
    category: "fundas",
    tagline: "Renueva tu cama sin cambiar todo: mezcla tonos y texturas.",
    fabric: "100% lino lavado · cierre de sobre",
    price: 79,
    deal: "3 pares x S/ 199",
    image: "/images/hero.jpg",
    sizes: ["Estándar", "Queen", "King"],
    colors: [
      { name: "Arena", hex: "#d8c8b4" },
      { name: "Gris perla", hex: "#b9bcbf" },
      { name: "Rosa té", hex: "#e8cfc4" },
    ],
  },
];

export const savings = (p) =>
  p.compareAt ? Math.round((1 - p.price / p.compareAt) * 100) : 0;
