"use client";

import { useEffect, useState } from "react";

const MESSAGES = [
  { text: "Envío gratis desde S/ 199", href: "#coleccion" },
  { text: "2 juegos de Percal Hotel x S/ 349", href: "#cat-sabanas" },
  { text: "100 noches de prueba · devolución gratis", href: "#faq" },
];

export default function AnnouncementBar() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((i) => (i + 1) % MESSAGES.length), 4000);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <div
      className="bg-forest text-xs tracking-wide text-mint"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Escritorio: las tres ofertas a la vez */}
      <ul className="mx-auto hidden max-w-7xl justify-between px-8 py-2.5 md:flex">
        {MESSAGES.map((m) => (
          <li key={m.text}>
            <a href={m.href} className="underline-offset-4 hover:text-lime hover:underline">
              {m.text}
            </a>
          </li>
        ))}
      </ul>

      {/* Móvil: rotan de una en una */}
      <div className="relative h-9 overflow-hidden md:hidden">
        {MESSAGES.map((m, i) => (
          <a
            key={m.text}
            href={m.href}
            aria-hidden={i !== active}
            tabIndex={i === active ? 0 : -1}
            className={`absolute inset-0 flex items-center justify-center px-4 transition duration-500 ${
              i === active ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
            }`}
          >
            {m.text}
          </a>
        ))}
      </div>
    </div>
  );
}
