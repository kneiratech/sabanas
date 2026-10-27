"use client";

import Image from "next/image";
import { useState } from "react";

const SIZES = ["1 plaza", "1.5 plazas", "2 plazas", "Queen", "King"];
const SIZE_MARKUP = [0, 20, 40, 60, 90];

export default function ProductCard({ product }) {
  const [size, setSize] = useState(2);
  const [color, setColor] = useState(0);
  const [added, setAdded] = useState(false);

  const price = product.price + SIZE_MARKUP[size];

  function addToCart() {
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-ink/5 transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-1 text-xs font-medium tracking-wide text-ink backdrop-blur">
            {product.badge}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-serif text-xl">{product.name}</h3>
            <p className="mt-1 text-sm text-muted">{product.fabric}</p>
          </div>
          <p className="font-serif text-xl whitespace-nowrap">S/ {price}</p>
        </div>

        <div className="flex items-center gap-2" aria-label="Colores">
          {product.colors.map((c, i) => (
            <button
              key={c.name}
              type="button"
              title={c.name}
              aria-label={c.name}
              aria-pressed={color === i}
              onClick={() => setColor(i)}
              className={`h-6 w-6 rounded-full ring-1 ring-ink/15 transition ${
                color === i ? "ring-2 ring-ink ring-offset-2" : ""
              }`}
              style={{ backgroundColor: c.hex }}
            />
          ))}
          <span className="ml-2 text-sm text-muted">
            {product.colors[color].name}
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {SIZES.map((s, i) => (
            <button
              key={s}
              type="button"
              onClick={() => setSize(i)}
              className={`rounded-full border px-3 py-1 text-xs transition ${
                size === i
                  ? "border-ink bg-ink text-cream"
                  : "border-ink/15 text-ink hover:border-ink/40"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={addToCart}
          className="mt-auto rounded-full bg-clay px-6 py-3 text-sm font-medium text-white transition hover:bg-clay-dark"
        >
          {added ? "✓ Agregado al carrito" : "Agregar al carrito"}
        </button>
      </div>
    </article>
  );
}
