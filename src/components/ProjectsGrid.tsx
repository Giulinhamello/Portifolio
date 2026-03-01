import React, { useEffect, useMemo, useState } from "react";
import "../assets/styles/ProjectsGrid.scss";
import { imageMap } from "../data/sections";

type ProjectItem =
  | string
  | {
      title: string;
      image?: string; // fallback antigo (local)
      imageKey?: string; // novo (Supabase)
      alt?: string;
      extra?: string | string[]; // texto do modal
    };

type Props = {
  id: string;
  title: string;
  items: ProjectItem[];
};

export default function ProjectsGrid({ id, title, items }: Props) {
  const normalized = useMemo(
    () =>
      items.map((item) =>
        typeof item === "string"
          ? { title: item }
          : {
              title: item.title,
              image: item.imageKey ? imageMap[item.imageKey] ?? item.image : item.image,
              alt: item.alt ?? item.title,
              extra: item.extra,
            }
      ),
    [items]
  );

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const openItem = openIndex !== null ? normalized[openIndex] : null;

  // ESC para fechar
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenIndex(null);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // trava scroll do fundo enquanto modal está aberto
  useEffect(() => {
    if (openIndex !== null) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [openIndex]);

  return (
    <section className="projects-grid" id={id}>
      <div className="projects-title">{title}</div>

      <div className="projects-cards">
        {normalized.map((item, idx) => {
          const hasExtra = Boolean(item.extra);
          const isOpen = openIndex === idx;

          return (
            <article
              className={`project-card ${hasExtra ? "is-clickable" : ""} ${
                isOpen ? "is-open" : ""
              }`}
              key={`${id}-${idx}`}
              tabIndex={hasExtra ? 0 : -1}
              role={hasExtra ? "button" : undefined}
              aria-label={hasExtra ? `Abrir detalhes de ${item.title}` : undefined}
              onClick={() => hasExtra && setOpenIndex(idx)}
              onKeyDown={(e) => {
                if (!hasExtra) return;
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setOpenIndex(idx);
                }
              }}
            >
              {/* IMAGEM (só projetos tem) */}
              <div className="project-image-box">
                {item.image ? (
                  <img className="project-image" src={item.image} alt={item.alt} />
                ) : (
                  <div className="project-image-placeholder">Imagem</div>
                )}
              </div>

              {/* CARD verde (título) */}
              <div className="project-text-card">
                <h3 className="project-text">{item.title}</h3>
              </div>
            </article>
          );
        })}
      </div>

      {/* MODAL central */}
      {openItem ? (
        <div className="project-modal-overlay" onClick={() => setOpenIndex(null)}>
          <div
            className="project-modal"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={`Detalhes: ${openItem.title}`}
          >
            <button
              className="project-modal-close"
              onClick={() => setOpenIndex(null)}
              aria-label="Fechar"
              type="button"
            >
              ×
            </button>

            <h3 className="project-modal-title">{openItem.title}</h3>

            <div className="project-modal-content">
              {Array.isArray(openItem.extra) ? (
                <ul>
                  {openItem.extra.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              ) : (
                <p>{openItem.extra}</p>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}