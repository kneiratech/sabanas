"use client";

import { useEffect, useRef, useState } from "react";
import ProductCard from "./ProductCard";
import { categories, products } from "../data/products";

const TABS = [{ id: "todos", name: "Todo" }, ...categories];

export default function Collection() {
  const [cat, setCat] = useState("todos");
  const sectionRef = useRef(null);
  const railRef = useRef(null);

  // Los enlaces "#cat-<id>" (categorías, barra de anuncios) filtran la colección
  useEffect(() => {
    function fromHash() {
      const id = window.location.hash.replace("#cat-", "");
      if (!window.location.hash.startsWith("#cat-") || !TABS.some((t) => t.id === id)) return;
      setCat(id);
      railRef.current?.scrollTo({ left: 0 });
      sectionRef.current?.scrollIntoView({ behavior: "smooth" });
      // Limpia el hash para que volver a pulsar la misma categoría funcione
      history.replaceState(null, "", "#coleccion");
    }
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, []);

  const visible = cat === "todos" ? products : products.filter((p) => p.category === cat);

  function select(id) {
    setCat(id);
    railRef.current?.scrollTo({ left: 0, behavior: "smooth" });
  }

  function scrollRail(dir) {
    const rail = railRef.current;
    rail?.scrollBy({ left: dir * rail.clientWidth * 0.8, behavior: "smooth" });
  }

  return (
    <section id="coleccion" ref={sectionRef} className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 lg:px-8">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-leaf-dark">La colección</p>
          <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
            Elige tu textura favorita
          </h2>
        </div>
        <p className="max-w-md text-moss">
          Sábanas, edredones y fundas con una promesa: la mejor noche de tu vida. Los juegos de
          sábanas incluyen sábana ajustable, plana y fundas.
        </p>
      </div>

      <div className="mt-10 flex items-center justify-between gap-4">
        <div className="flex gap-2 overflow-x-auto" role="tablist" aria-label="Categorías">
          {TABS.map((t) => {
            const count = t.id === "todos" ? products.length : products.filter((p) => p.category === t.id).length;
            return (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={cat === t.id}
                onClick={() => select(t.id)}
                className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-medium transition ${
                  cat === t.id ? "bg-forest text-mint" : "bg-white text-forest ring-1 ring-forest/10 hover:ring-forest/30"
                }`}
              >
                {t.name} <span className="opacity-60">{count}</span>
              </button>
            );
          })}
        </div>
        <div className="hidden shrink-0 gap-2 sm:flex">
          {[-1, 1].map((dir) => (
            <button
              key={dir}
              type="button"
              onClick={() => scrollRail(dir)}
              aria-label={dir < 0 ? "Anterior" : "Siguiente"}
              className="flex h-11 w-11 items-center justify-center rounded-full ring-1 ring-forest/15 transition hover:bg-forest hover:text-mint"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round">
                <path d={dir < 0 ? "m15 18-6-6 6-6" : "m9 18 6-6-6-6"} />
              </svg>
            </button>
          ))}
        </div>
      </div>

      <div
        ref={railRef}
        className="-mx-5 mt-8 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-px-5 px-5 pb-4 [scrollbar-width:none] lg:-mx-8 lg:scroll-px-8 lg:px-8 [&::-webkit-scrollbar]:hidden"
      >
        {visible.map((p) => (
          <div key={p.name} className="w-[82%] shrink-0 snap-start sm:w-[45%] lg:w-[calc(25%-18px)]">
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </section>
  );
}
