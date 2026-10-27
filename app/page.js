import Image from "next/image";
import AnnouncementBar from "./components/AnnouncementBar";
import Collection from "./components/Collection";
import ProductBanner from "./components/ProductBanner";
import { categories, products } from "./data/products";

// Reemplazar por el número real del negocio (código de país + número, sin espacios)
const WHATSAPP_URL = `https://wa.me/51999999999?text=${encodeURIComponent(
  "Hola, quiero información sobre sus sábanas"
)}`;

const fabrics = [
  {
    name: "Percal",
    image: "/images/percale.jpg",
    feel: "Fresco, crujiente y mate",
    bestFor: "Quienes duermen con calor y aman la cama de hotel.",
    stats: { Frescura: 4, Suavidad: 3, Brillo: 1 },
  },
  {
    name: "Lino lavado",
    image: "/images/linen-stripe.jpg",
    feel: "Relajado y con textura",
    bestFor: "Climas húmedos y un look natural, sin planchar.",
    stats: { Frescura: 5, Suavidad: 3, Brillo: 1 },
  },
  {
    name: "Satén",
    image: "/images/sateen.jpg",
    feel: "Sedoso y con caída",
    bestFor: "Noches frías y quien busca un toque de lujo.",
    stats: { Frescura: 2, Suavidad: 5, Brillo: 4 },
  },
  {
    name: "Algodón peinado",
    image: "/images/cotton-white.jpg",
    feel: "Suave y versátil",
    bestFor: "El día a día: fácil de lavar y de combinar.",
    stats: { Frescura: 3, Suavidad: 4, Brillo: 2 },
  },
];

const guides = [
  {
    tag: "Comparativa",
    title: "¿Percal o satén? Cómo elegir según tu forma de dormir",
    minutes: 3,
    body: [
      "Ambos son 100% algodón; lo que cambia es el tejido. El percal cruza los hilos uno sobre uno: queda mate, fresco y crujiente. El satén deja más hilo en la superficie: es más suave, cae mejor y tiene un brillo sutil.",
      "Si te despiertas con calor o vives en un clima húmedo, elige percal o lino. Si tienes frío o quieres una sensación sedosa, el satén es para ti.",
    ],
  },
  {
    tag: "Cuidado",
    title: "Cómo lavar tus sábanas para que duren años",
    minutes: 2,
    body: [
      "Lava en agua fría o tibia con ciclo delicado y poco detergente; el exceso deja residuos que endurecen la tela. Evita la lejía y el suavizante, que debilitan las fibras.",
      "Seca a baja temperatura o al aire y retira las sábanas apenas terminen para evitar arrugas. Ten al menos dos juegos y alterna: duran mucho más.",
    ],
  },
  {
    tag: "Descanso",
    title: "Las mejores sábanas si duermes con calor",
    minutes: 3,
    body: [
      "Busca tejidos que respiren: el lino es el más fresco, seguido del percal. Un número de hilos entre 300 y 400 es ideal; más alto no siempre significa mejor, porque la tela se vuelve más densa y retiene calor.",
      "Los tonos claros y un edredón ligero también ayudan. Y recuerda: ¡el algodón y el lino absorben la humedad, el poliéster no!",
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

function WhatsAppIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={`fill-current ${className}`} aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.4-.3Z" />
    </svg>
  );
}

function Stars() {
  return (
    <div className="flex gap-0.5 text-leaf" aria-label="5 de 5 estrellas">
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
      <AnnouncementBar />

      {/* Navegación */}
      <header className="sticky top-0 z-40 border-b border-forest/5 bg-mint/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#" className="font-serif text-2xl tracking-tight">
            Lino <span className="text-leaf">&amp;</span> Luna
          </a>
          <ul className="hidden items-center gap-8 text-sm text-moss md:flex">
            <li><a href="#coleccion" className="hover:text-forest">Colección</a></li>
            <li><a href="#tejidos" className="hover:text-forest">Tejidos</a></li>
            <li><a href="#opiniones" className="hover:text-forest">Opiniones</a></li>
            <li><a href="#guias" className="hover:text-forest">Guías</a></li>
            <li><a href="#faq" className="hover:text-forest">Preguntas</a></li>
          </ul>
          <a
            href="#coleccion"
            className="rounded-full bg-forest px-5 py-2.5 text-sm font-medium text-mint transition hover:bg-forest/85"
          >
            Comprar
          </a>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-12 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pt-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-mist px-4 py-1.5 text-xs font-medium tracking-wide text-leaf-dark">
              <span className="h-1.5 w-1.5 rounded-full bg-leaf" />
              Nueva colección Otoño 2026
            </span>
            <h1 className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Duerme como en un <em className="relative z-0 text-leaf after:absolute after:inset-x-0 after:bottom-1 after:-z-10 after:h-3 after:rounded-full after:bg-lime/70">hotel</em>, todas las noches.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-moss">
              Sábanas de algodón egipcio y lino lavado, tejidas para durar y
              volverse más suaves con cada lavado. Diseño atemporal, precio honesto.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#coleccion"
                className="rounded-full bg-leaf px-8 py-4 text-center font-medium text-white shadow-lg shadow-leaf/25 transition hover:bg-leaf-dark"
              >
                Ver colección
              </a>
              <a
                href="#beneficios"
                className="rounded-full border border-forest/15 px-8 py-4 text-center font-medium transition hover:border-forest/40"
              >
                ¿Por qué Lino &amp; Luna?
              </a>
            </div>
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                {["/images/sage-bedroom.jpg", "/images/cotton-white.jpg", "/images/charcoal.jpg"].map((src) => (
                  <div key={src} className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-mint">
                    <Image src={src} alt="" fill sizes="40px" className="object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <Stars />
                <p className="mt-1 text-sm text-moss">
                  <strong className="text-forest">4.9/5</strong> de más de 12 000 clientes
                </p>
              </div>
            </div>
          </div>

          <ProductBanner products={products} />
        </section>

        {/* Comprar por categoría */}
        <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
          <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">Compra por categoría</h2>
          <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {[...categories, { id: "todos", name: "Ver todo", image: "/images/lifestyle.jpg" }].map((c) => {
              const count = c.id === "todos" ? products.length : products.filter((p) => p.category === c.id).length;
              return (
                <a
                  key={c.id}
                  href={`#cat-${c.id}`}
                  className="group relative aspect-[4/5] overflow-hidden rounded-3xl sm:aspect-square"
                >
                  <Image
                    src={c.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-4 text-mint sm:p-5">
                    <div>
                      <p className="font-serif text-xl sm:text-2xl">{c.name}</p>
                      <p className="text-xs text-mint/75">{count} productos</p>
                    </div>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-lime text-forest transition group-hover:translate-x-1">
                      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="2.2" strokeLinecap="round"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        {/* Logos / prensa */}
        <section className="border-y border-forest/5 bg-mist/50">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-4 px-5 py-8 font-serif text-xl text-moss/70 lg:justify-between lg:px-8">
            <span>Casa &amp; Estilo</span>
            <span className="italic">Vivir Bien</span>
            <span>DECORA</span>
            <span className="italic">El Hogar Hoy</span>
            <span>Revista Nido</span>
          </div>
        </section>

        <Collection />

        {/* Guía de tejidos */}
        <section id="tejidos" className="scroll-mt-24 bg-mist/60">
          <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-widest text-leaf-dark">Tócala, siéntela, vívela</p>
              <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">Cada tejido se siente distinto</h2>
              <p className="mt-4 text-moss">
                Antes del color o del estampado está el tacto. Compara nuestros tejidos y encuentra el que va con tu forma de dormir.
              </p>
            </div>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {fabrics.map((f) => (
                <article key={f.name} className="flex flex-col overflow-hidden rounded-3xl bg-mint ring-1 ring-forest/5">
                  <div className="relative aspect-[4/3]">
                    <Image src={f.image} alt={`Tejido ${f.name}`} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-serif text-2xl">{f.name}</h3>
                    <p className="mt-1 text-sm font-medium text-leaf-dark">{f.feel}</p>
                    <dl className="mt-5 space-y-2.5">
                      {Object.entries(f.stats).map(([label, value]) => (
                        <div key={label} className="flex items-center justify-between gap-3 text-sm">
                          <dt className="text-moss">{label}</dt>
                          <dd className="flex gap-1" aria-label={`${value} de 5`}>
                            {Array.from({ length: 5 }).map((_, i) => (
                              <span key={i} className={`h-1.5 w-5 rounded-full ${i < value ? "bg-leaf" : "bg-forest/10"}`} />
                            ))}
                          </dd>
                        </div>
                      ))}
                    </dl>
                    <p className="mt-5 flex-1 text-sm leading-relaxed text-moss">
                      <span className="font-medium text-forest">Ideal para: </span>
                      {f.bestFor}
                    </p>
                    <a href="#cat-sabanas" className="mt-5 text-sm font-semibold text-leaf-dark underline-offset-4 hover:underline">
                      Ver sábanas de {f.name.toLowerCase()} →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Beneficios */}
        <section id="beneficios" className="scroll-mt-24 bg-forest text-mint">
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
              <p className="text-sm font-medium uppercase tracking-widest text-lime">Hecho diferente</p>
              <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
                Calidad que se siente desde la primera noche
              </h2>
              <div className="mt-12 grid gap-8 sm:grid-cols-2">
                {features.map((f) => (
                  <div key={f.title}>
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-mint/10">
                      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-lime" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        {f.icon}
                      </svg>
                    </div>
                    <h3 className="mt-4 font-serif text-lg">{f.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-mint/65">{f.text}</p>
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
                src="/images/hero.jpg"
                alt="Cama con sábanas de lino y cojines en tonos naturales"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-forest/75 via-forest/35 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-8 text-mint sm:justify-center sm:p-14">
              <h2 className="max-w-md font-serif text-4xl tracking-tight sm:text-5xl">
                Combina, mezcla, haz tuya la cama.
              </h2>
              <p className="mt-4 max-w-sm text-mint/80">
                12 tonos inspirados en la naturaleza que combinan entre sí. Llévate
                2 juegos de Percal Hotel por S/ 349 y mezcla los colores que quieras.
              </p>
              <a
                href="#cat-sabanas"
                className="mt-8 w-fit rounded-full bg-lime px-7 py-3.5 text-sm font-semibold text-forest transition hover:bg-white"
              >
                Arma tu set
              </a>
            </div>
          </div>
        </section>

        {/* Opiniones */}
        <section id="opiniones" className="scroll-mt-24 bg-mist/60">
          <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-medium uppercase tracking-widest text-leaf-dark">Opiniones</p>
              <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
                Más de 12 000 noches felices
              </h2>
            </div>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {testimonials.map((t) => (
                <figure key={t.name} className="flex flex-col rounded-3xl bg-mint p-8 ring-1 ring-forest/5">
                  <Stars />
                  <blockquote className="mt-5 flex-1 font-serif text-lg leading-relaxed">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-6 text-sm">
                    <span className="font-medium">{t.name}</span>
                    <span className="text-moss"> · {t.city}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto grid max-w-7xl scroll-mt-24 gap-12 px-5 py-24 lg:grid-cols-[1fr_1.4fr] lg:px-8">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-leaf-dark">Preguntas frecuentes</p>
            <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">¿Tienes dudas?</h2>
            <p className="mt-4 text-moss">
              Escríbenos por WhatsApp y te respondemos en minutos.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25d366] px-6 py-3 font-medium text-forest transition hover:brightness-95"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Chatea con nosotros
            </a>
          </div>
          <div className="divide-y divide-forest/10 border-y border-forest/10">
            {faqs.map((f) => (
              <details key={f.q} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-xl">
                  {f.q}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-forest/15 text-lg transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 leading-relaxed text-moss">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Guías */}
        <section id="guias" className="mx-auto max-w-7xl scroll-mt-24 px-5 pb-24 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-widest text-leaf-dark">Guías Lino &amp; Luna</p>
          <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">Aprende a dormir mejor</h2>
          <div className="mt-12 grid items-start gap-6 md:grid-cols-3">
            {guides.map((g) => (
              <details key={g.title} className="group rounded-3xl bg-white p-7 ring-1 ring-forest/5 open:ring-leaf/30">
                <summary className="cursor-pointer list-none">
                  <div className="flex items-center justify-between text-xs">
                    <span className="rounded-full bg-mist px-3 py-1 font-semibold text-leaf-dark">{g.tag}</span>
                    <span className="text-moss">{g.minutes} min de lectura</span>
                  </div>
                  <h3 className="mt-5 font-serif text-xl leading-snug">{g.title}</h3>
                  <span className="mt-5 inline-block text-sm font-semibold text-leaf-dark group-open:hidden">Leer guía →</span>
                </summary>
                <div className="mt-4 space-y-3 text-sm leading-relaxed text-moss">
                  {g.body.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Newsletter / CTA */}
        <section className="px-5 pb-24 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-lime px-6 py-16 text-center text-forest sm:px-16">
            <h2 className="font-serif text-4xl tracking-tight sm:text-5xl">10% de descuento en tu primer juego</h2>
            <p className="mx-auto mt-4 max-w-md text-forest/75">
              Suscríbete y recibe tu cupón, lanzamientos de colores y consejos para dormir mejor.
            </p>
            <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
              <label htmlFor="email" className="sr-only">Correo electrónico</label>
              <input
                id="email"
                type="email"
                required
                placeholder="tu@correo.com"
                className="flex-1 rounded-full bg-white px-6 py-3.5 text-forest placeholder:text-moss focus:outline-none focus:ring-2 focus:ring-forest"
              />
              <button
                type="submit"
                className="rounded-full bg-forest px-7 py-3.5 font-medium text-mint transition hover:bg-forest/85"
              >
                Quiero mi cupón
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-forest/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          <div>
            <p className="font-serif text-2xl">
              Lino <span className="text-leaf">&amp;</span> Luna
            </p>
            <p className="mt-3 max-w-xs text-sm text-moss">
              Ropa de cama consciente, diseñada para dormir mejor.
            </p>
          </div>
          {[
            ["Tienda", [["Sábanas", "#cat-sabanas"], ["Edredones", "#cat-edredones"], ["Fundas", "#cat-fundas"], ["Guía de tejidos", "#tejidos"]]],
            ["Ayuda", [["Envíos", "#faq"], ["Devoluciones", "#faq"], ["Cuidado de tus sábanas", "#guias"], ["WhatsApp", WHATSAPP_URL]]],
            ["Nosotros", [["Nuestra historia", "#beneficios"], ["Opiniones", "#opiniones"], ["Guías", "#guias"]]],
          ].map(([title, links]) => (
            <div key={title}>
              <p className="text-sm font-medium">{title}</p>
              <ul className="mt-4 space-y-2 text-sm text-moss">
                {links.map(([l, href]) => (
                  <li key={l}><a href={href} className="hover:text-forest">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-forest/10 px-5 py-6 text-center text-xs text-moss">
          © 2026 Lino &amp; Luna. Todos los derechos reservados. Fotos: Unsplash.
        </div>
      </footer>

      {/* WhatsApp flotante */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escríbenos por WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-xl shadow-forest/20 transition hover:scale-105"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </>
  );
}
