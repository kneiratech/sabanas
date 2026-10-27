import Image from "next/image";
import ProductCard from "./components/ProductCard";

const products = [
  {
    name: "Juego Percal Hotel",
    fabric: "100% algodón egipcio · 400 hilos",
    price: 189,
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
    fabric: "Algodón Supima · 600 hilos",
    price: 229,
    image: "/images/sateen.jpg",
    colors: [
      { name: "Marfil", hex: "#f1e9dc" },
      { name: "Taupe", hex: "#8c7b6b" },
      { name: "Carbón", hex: "#3a3734" },
    ],
  },
];

const features = [
  {
    title: "Algodón de fibra larga",
    text: "Seleccionamos fibras extralargas que no forman motas y se suavizan con cada lavado.",
    icon: (
      <path d="M12 3c-3 4-6 6.5-6 10a6 6 0 0 0 12 0c0-3.5-3-6-6-10Z" />
    ),
  },
  {
    title: "Frescura que respira",
    text: "Tejido transpirable que regula la temperatura: fresco en verano, acogedor en invierno.",
    icon: (
      <path d="M3 8h11a3 3 0 1 0-3-3M3 12h15a3 3 0 1 1-3 3M3 16h8" />
    ),
  },
  {
    title: "Certificado OEKO-TEX®",
    text: "Libre de químicos nocivos. Seguro para pieles sensibles y para toda la familia.",
    icon: <path d="M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6l-8-3Zm-3 9 2 2 4-4" />,
  },
  {
    title: "100 noches de prueba",
    text: "Duerme en ellas. Si no te enamoras, las recogemos gratis y te devolvemos tu dinero.",
    icon: <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z" />,
  },
];

const testimonials = [
  {
    quote:
      "Es como dormir en un hotel boutique todas las noches. Después de 20 lavadas siguen igual de suaves.",
    name: "Valeria M.",
    city: "Lima",
  },
  {
    quote:
      "Soy muy caluroso y el lino cambió mis noches. Además el color canela es precioso en persona.",
    name: "Diego R.",
    city: "Arequipa",
  },
  {
    quote:
      "Llegaron en dos días en una caja de tela reutilizable. Un detalle hermoso. Ya pedí otro juego.",
    name: "Camila T.",
    city: "Trujillo",
  },
];

const faqs = [
  {
    q: "¿Qué incluye cada juego de sábanas?",
    a: "Una sábana ajustable, una sábana plana y dos fundas de almohada (una en tamaño 1 plaza).",
  },
  {
    q: "¿Cuánto demora el envío?",
    a: "Lima en 24–48 horas y provincias en 3–5 días hábiles. Envío gratis en compras desde S/ 199.",
  },
  {
    q: "¿Cómo funcionan las 100 noches de prueba?",
    a: "Usa y lava tus sábanas con normalidad. Si dentro de 100 noches no te convencen, coordinamos el recojo sin costo y te reembolsamos el 100%.",
  },
  {
    q: "¿Cómo debo lavarlas?",
    a: "Lavado en agua fría o tibia con ciclo delicado, sin lejía. Secado a baja temperatura o al aire libre para mayor durabilidad.",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-clay" aria-label="5 de 5 estrellas">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-current">
          <path d="m10 1.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5Z" />
        </svg>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Barra de anuncio */}
      <div className="bg-ink px-4 py-2 text-center text-xs tracking-wide text-cream">
        Envío gratis desde S/ 199 · 100 noches de prueba · Hasta 3 cuotas sin intereses
      </div>

      {/* Navegación */}
      <header className="sticky top-0 z-40 border-b border-ink/5 bg-cream/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#" className="font-serif text-2xl tracking-tight">
            Lino <span className="text-clay">&amp;</span> Luna
          </a>
          <ul className="hidden items-center gap-8 text-sm text-muted md:flex">
            <li><a href="#coleccion" className="hover:text-ink">Colección</a></li>
            <li><a href="#beneficios" className="hover:text-ink">Beneficios</a></li>
            <li><a href="#opiniones" className="hover:text-ink">Opiniones</a></li>
            <li><a href="#faq" className="hover:text-ink">Preguntas</a></li>
          </ul>
          <a
            href="#coleccion"
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-cream transition hover:bg-ink/85"
          >
            Comprar
          </a>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-12 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pt-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-sand px-4 py-1.5 text-xs font-medium tracking-wide text-sage-dark">
              <span className="h-1.5 w-1.5 rounded-full bg-sage" />
              Nueva colección Otoño 2026
            </span>
            <h1 className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Duerme como en un <em className="text-clay">hotel</em>, todas las noches.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
              Sábanas de algodón egipcio y lino lavado, tejidas para durar y
              volverse más suaves con cada lavado. Diseño atemporal, precio honesto.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#coleccion"
                className="rounded-full bg-clay px-8 py-4 text-center font-medium text-white shadow-lg shadow-clay/25 transition hover:bg-clay-dark"
              >
                Ver colección
              </a>
              <a
                href="#beneficios"
                className="rounded-full border border-ink/15 px-8 py-4 text-center font-medium transition hover:border-ink/40"
              >
                ¿Por qué Lino &amp; Luna?
              </a>
            </div>
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                {["/images/sage-bedroom.jpg", "/images/cotton-white.jpg", "/images/charcoal.jpg"].map((src) => (
                  <div key={src} className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-cream">
                    <Image src={src} alt="" fill sizes="40px" className="object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <Stars />
                <p className="mt-1 text-sm text-muted">
                  <strong className="text-ink">4.9/5</strong> de más de 12 000 clientes
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src="/images/hero.jpg"
                alt="Cama con sábanas de lino en tonos neutros"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-4 rounded-2xl bg-white/95 p-4 shadow-xl backdrop-blur sm:-left-6 sm:p-5">
              <p className="text-xs uppercase tracking-widest text-muted">Desde</p>
              <p className="font-serif text-3xl">S/ 189</p>
              <p className="text-xs text-sage-dark">Juego completo · 4 piezas</p>
            </div>
            <div className="absolute -right-2 top-8 hidden rounded-full bg-sage px-5 py-3 text-sm font-medium text-white shadow-lg sm:block">
              −20% esta semana
            </div>
          </div>
        </section>

        {/* Logos / prensa */}
        <section className="border-y border-ink/5 bg-sand/50">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-4 px-5 py-8 font-serif text-xl text-muted/70 lg:justify-between lg:px-8">
            <span>Casa &amp; Estilo</span>
            <span className="italic">Vivir Bien</span>
            <span>DECORA</span>
            <span className="italic">El Hogar Hoy</span>
            <span>Revista Nido</span>
          </div>
        </section>

        {/* Colección */}
        <section id="coleccion" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-sage-dark">La colección</p>
              <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
                Elige tu textura favorita
              </h2>
            </div>
            <p className="max-w-md text-muted">
              Tres tejidos, una promesa: la mejor noche de tu vida. Todos los juegos
              incluyen sábana ajustable, plana y fundas.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <ProductCard key={p.name} product={p} />
            ))}
          </div>
        </section>

        {/* Beneficios */}
        <section id="beneficios" className="scroll-mt-24 bg-ink text-cream">
          <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 py-24 lg:grid-cols-2 lg:px-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
                <Image src="/images/cotton-white.jpg" alt="Sábanas blancas de algodón" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
              </div>
              <div className="relative mt-12 aspect-[3/4] overflow-hidden rounded-3xl">
                <Image src="/images/charcoal.jpg" alt="Ropa de cama en tono carbón" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
              </div>
            </div>

            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-oat">Hecho diferente</p>
              <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
                Calidad que se siente desde la primera noche
              </h2>
              <div className="mt-12 grid gap-8 sm:grid-cols-2">
                {features.map((f) => (
                  <div key={f.title}>
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cream/10">
                      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-oat" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        {f.icon}
                      </svg>
                    </div>
                    <h3 className="mt-4 font-serif text-lg">{f.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-cream/65">{f.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Banner lifestyle */}
        <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem]">
            <div className="relative aspect-[4/5] sm:aspect-[16/9] lg:aspect-[21/9]">
              <Image
                src="/images/sage-bedroom.jpg"
                alt="Dormitorio acogedor con ropa de cama en tono salvia"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-ink/75 via-ink/35 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-8 text-cream sm:justify-center sm:p-14">
              <h2 className="max-w-md font-serif text-4xl tracking-tight sm:text-5xl">
                Combina, mezcla, haz tuya la cama.
              </h2>
              <p className="mt-4 max-w-sm text-cream/80">
                12 tonos inspirados en la naturaleza que combinan entre sí. Arma tu
                set ideal y llévate 15% de descuento al comprar 2 juegos.
              </p>
              <a
                href="#coleccion"
                className="mt-8 w-fit rounded-full bg-cream px-7 py-3.5 text-sm font-medium text-ink transition hover:bg-white"
              >
                Arma tu set
              </a>
            </div>
          </div>
        </section>

        {/* Opiniones */}
        <section id="opiniones" className="scroll-mt-24 bg-sand/60">
          <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-medium uppercase tracking-widest text-sage-dark">Opiniones</p>
              <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
                Más de 12 000 noches felices
              </h2>
            </div>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {testimonials.map((t) => (
                <figure key={t.name} className="flex flex-col rounded-3xl bg-cream p-8 ring-1 ring-ink/5">
                  <Stars />
                  <blockquote className="mt-5 flex-1 font-serif text-lg leading-relaxed">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-6 text-sm">
                    <span className="font-medium">{t.name}</span>
                    <span className="text-muted"> · {t.city}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto grid max-w-7xl scroll-mt-24 gap-12 px-5 py-24 lg:grid-cols-[1fr_1.4fr] lg:px-8">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-sage-dark">Preguntas frecuentes</p>
            <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">¿Tienes dudas?</h2>
            <p className="mt-4 text-muted">
              Escríbenos por WhatsApp y te respondemos en minutos.
            </p>
            <div className="relative mt-8 hidden aspect-[4/3] overflow-hidden rounded-3xl lg:block">
              <Image src="/images/lifestyle.jpg" alt="Dormitorio luminoso con sábanas blancas" fill sizes="40vw" className="object-cover" />
            </div>
          </div>
          <div className="divide-y divide-ink/10 border-y border-ink/10">
            {faqs.map((f) => (
              <details key={f.q} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-xl">
                  {f.q}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink/15 text-lg transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Newsletter / CTA */}
        <section className="px-5 pb-24 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-sage px-6 py-16 text-center text-white sm:px-16">
            <h2 className="font-serif text-4xl tracking-tight sm:text-5xl">10% de descuento en tu primer juego</h2>
            <p className="mx-auto mt-4 max-w-md text-white/85">
              Suscríbete y recibe tu cupón, lanzamientos de colores y consejos para dormir mejor.
            </p>
            <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
              <label htmlFor="email" className="sr-only">Correo electrónico</label>
              <input
                id="email"
                type="email"
                required
                placeholder="tu@correo.com"
                className="flex-1 rounded-full bg-white px-6 py-3.5 text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-ink"
              />
              <button
                type="submit"
                className="rounded-full bg-ink px-7 py-3.5 font-medium text-cream transition hover:bg-ink/85"
              >
                Quiero mi cupón
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-ink/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          <div>
            <p className="font-serif text-2xl">
              Lino <span className="text-clay">&amp;</span> Luna
            </p>
            <p className="mt-3 max-w-xs text-sm text-muted">
              Ropa de cama consciente, diseñada para dormir mejor.
            </p>
          </div>
          {[
            ["Tienda", ["Sábanas", "Edredones", "Fundas", "Tarjetas de regalo"]],
            ["Ayuda", ["Envíos", "Devoluciones", "Guía de tallas", "Contacto"]],
            ["Nosotros", ["Nuestra historia", "Sostenibilidad", "Blog", "Trabaja con nosotros"]],
          ].map(([title, links]) => (
            <div key={title}>
              <p className="text-sm font-medium">{title}</p>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {links.map((l) => (
                  <li key={l}><a href="#" className="hover:text-ink">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-ink/10 px-5 py-6 text-center text-xs text-muted">
          © 2026 Lino &amp; Luna. Todos los derechos reservados. Fotos: Unsplash.
        </div>
      </footer>
    </>
  );
}
