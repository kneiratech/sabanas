"use client";

import Image from "next/image";
import { useState } from "react";
import { savings } from "../data/products";

const SIZES = ["1 plaza", "1.5 plazas", "2 plazas", "Queen", "King"];
const SIZE_MARKUP = [0, 20, 40, 60, 90];

export default function ProductCard({ product }) {
  const sizes = product.sizes ?? SIZES;
  const [size, setSize] = useState(Math.min(2, sizes.length - 1));
  const [color, setColor] = useState(0);
  const [added, setAdded] = useState(false);

  // Productos con tallas propias (p. ej. fundas) suben de precio en pasos de S/ 10
  const markup = product.sizes ? size * 10 : SIZE_MARKUP[size];
  const price = product.price + markup;
  const compareAt = product.compareAt && product.compareAt + markup;
  const off = savings({ price, compareAt });

  function addToCart() {
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-forest/5 transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 85vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-mint px-3 py-1 text-xs font-semibold tracking-wide text-forest">
            {product.badge}
          </span>
        )}
        {off > 0 && (
          <span className="absolute right-4 top-4 rounded-full bg-peach px-3 py-1 text-xs font-semibold text-forest">
            −{off}%
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <h3 className="font-serif text-xl">{product.name}</h3>
          <p className="mt-1 text-sm text-moss">{product.fabric}</p>
          <p className="mt-3 flex flex-wrap items-baseline gap-x-2">
            <span className="font-serif text-2xl">S/ {price}</span>
            {compareAt && (
              <>
                <s className="text-sm text-moss">S/ {compareAt}</s>
                <span className="text-sm font-semibold text-leaf-dark">Ahorras S/ {compareAt - price}</span>
              </>
            )}
          </p>
          {product.deal && (
            <p className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-lime/60 px-3 py-1 text-xs font-semibold text-forest">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8Z" /><circle cx="7.5" cy="7.5" r="1.5" /></svg>
              {product.deal}
            </p>
          )}
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
              className={`h-6 w-6 rounded-full ring-1 ring-forest/15 transition ${
                color === i ? "ring-2 ring-forest ring-offset-2" : ""
              }`}
              style={{ backgroundColor: c.hex }}
            />
          ))}
          <span className="ml-2 text-sm text-moss">
            {product.colors[color].name}
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {sizes.map((s, i) => (
            <button
              key={s}
              type="button"
              onClick={() => setSize(i)}
              className={`rounded-full border px-3 py-1 text-xs transition ${
                size === i
                  ? "border-forest bg-forest text-mint"
                  : "border-forest/15 text-forest hover:border-forest/40"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={addToCart}
          className="mt-auto rounded-full bg-leaf px-6 py-3 text-sm font-medium text-white transition hover:bg-leaf-dark"
        >
          {added ? "✓ Agregado al carrito" : "Agregar al carrito"}
        </button>
      </div>
    </article>
  );
}
