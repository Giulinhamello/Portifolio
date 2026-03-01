import React, { useEffect, useMemo, useState } from "react";
import "../assets/styles/SectionGrid.scss";

type SectionItem =
  | string
  | {
      title: string;
      extra?: string | string[]; // texto ou lista
    };

type Props = {
  id: string;
  title: string;
  items: SectionItem[];
};

export default function SectionGrid({ id, title, items }: Props) {
  const normalized = useMemo(() => {
    return items.map((item) => {
      if (typeof item === "string") {
        return { title: item, extra: undefined as undefined | string | string[] };
      }
      return { title: item.title, extra: item.extra };
    });
  }, [items]);

  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const openItem = (idx: number) => {
    if (!normalized[idx]?.extra) return; // só abre modal se tiver extra
    setOpenIdx(idx);
  };

  const close = () => setOpenIdx(null);

  // ESC fecha modal
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const active = openIdx !== null ? normalized[openIdx] : null;

  return (
    <section className="section-grid" id={id}>
      <div className="section-inner">
        <h2 className="section-title">{title}</h2>

        <div className="cards-grid">
          {normalized.map((item, idx) => {
            const clickable = !!item.extra;
            const isOpen = openIdx === idx;

            return (
              <article
                key={`${id}-${idx}`}
                className={[
                  "card",
                  clickable ? "is-clickable" : "",
                  isOpen ? "is-open" : "",
                ].join(" ")}
                onClick={() => openItem(idx)}
                role={clickable ? "button" : undefined}
                tabIndex={clickable ? 0 : undefined}
                onKeyDown={(e) => {
                  if (!clickable) return;
                  if (e.key === "Enter" || e.key === " ") openItem(idx);
                }}
              >
                {/* IMPORTANTE: só o título aqui (centralizado). Nada “do lado”. */}
                <h3 className="card-title">{item.title}</h3>
              </article>
            );
          })}
        </div>
      </div>

      {/* MODAL */}
      {active && (
        <div className="section-modal-overlay" onClick={close}>
          <div className="section-modal" onClick={(e) => e.stopPropagation()}>
            <button className="section-modal-close" onClick={close} aria-label="Fechar">
              ×
            </button>

            {/* se você quiser esconder o título SEMPRE, deixa display:none no CSS */}
            <h3 className="section-modal-title">{active.title}</h3>

            <div className="section-modal-content">
              {Array.isArray(active.extra) ? (
                <ul>
                  {active.extra.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              ) : (
                <p>{active.extra}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}