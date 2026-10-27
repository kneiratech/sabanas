"use client";

import Image from "next/image";
import { useState } from "react";
import { categories } from "../data/products";

export default function ProductBanner({ products }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = (i) => setActive((i + products.length) % products.length);
  const current = products[active];

  return (
    <div
      className="relative min-w-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-forest sm:aspect-[5/4] lg:aspect-[5/6]"
        role="region"
        aria-roledescription="carrusel"
        aria-label="Nuestros productos"
      >
        {products.map((p, i) => (
          <div
            key={p.name}
            aria-hidden={i !== active}
            className={`absolute inset-0 transition duration-700 ease-out ${
              i === active ? "scale-100 opacity-100" : "scale-105 opacity-0"
            }`}
          >
            <Image
              src={p.image}
              alt={p.name}
              fill
              priority={i === 0}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/25 to-transparent" />

        {/* Barras de progreso: al terminar la animación pasa al siguiente producto */}
        <div className="absolute inset-x-6 top-6 flex gap-1.5">
          {products.map((p, i) => (
            <button
              key={p.name}
              type="button"
              onClick={() => go(i)}
              aria-label={`Ver ${p.name}`}
              className="h-1 flex-1 overflow-hidden rounded-full bg-white/30"
            >
              <span
                key={i === active ? `on-${active}` : "off"}
                onAnimationEnd={() => go(active + 1)}
                className={`block h-full rounded-full bg-lime ${
                  i < active ? "w-full" : i === active ? "w-0 animate-banner-progress motion-reduce:w-full motion-reduce:animate-none" : "w-0"
                }`}
                style={{ animationPlayState: paused ? "paused" : "running" }}
              />
            </button>
          ))}
        </div>

        <span className="absolute left-6 top-12 rounded-full bg-peach px-4 py-2 text-sm font-medium text-forest shadow-lg">
          −20% esta semana
        </span>

        <div className="absolute inset-x-0 bottom-0 p-6 text-mint sm:p-8" aria-live="polite">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-lime px-3 py-1 text-xs font-semibold text-forest">
              {categories.find((c) => c.id === current.category)?.name}
            </span>
            {current.badge && (
              <span className="rounded-full bg-mint/15 px-3 py-1 text-xs font-medium backdrop-blur">
                {current.badge}
              </span>
            )}
          </div>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl">{current.name}</h2>
          <p className="mt-2 max-w-sm text-sm text-mint/80">{current.tagline}</p>

          <div className="mt-5 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-mint/70">Desde</p>
              <p className="flex items-baseline gap-2 whitespace-nowrap">
                <span className="font-serif text-3xl">S/ {current.price}</span>
                {current.compareAt && (
                  <s className="text-sm text-mint/60">S/ {current.compareAt}</s>
                )}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => go(active - 1)}
                aria-label="Producto anterior"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-mint/30 transition hover:bg-mint/15"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round"><path d="m15 18-6-6 6-6" /></svg>
              </button>
              <button
                type="button"
                onClick={() => go(active + 1)}
                aria-label="Producto siguiente"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-mint/30 transition hover:bg-mint/15"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round"><path d="m9 18 6-6-6-6" /></svg>
              </button>
              <a
                href="#coleccion"
                className="hidden whitespace-nowrap rounded-full bg-lime px-5 py-3 text-sm font-semibold text-forest transition hover:bg-white sm:block"
              >
                Ver producto
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Miniaturas de todos los productos */}
      <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
        {products.map((p, i) => (
          <button
            key={p.name}
            type="button"
            onClick={() => go(i)}
            aria-label={p.name}
            aria-current={i === active}
            className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl transition sm:h-20 sm:w-20 ${
              i === active ? "ring-2 ring-leaf ring-offset-2 ring-offset-mint" : "opacity-60 hover:opacity-100"
            }`}
          >
            <Image src={p.image} alt="" fill sizes="80px" className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
