import React from "react";
import "../assets/styles/ProjectsGrid.scss";

type ProjectItem =
  | string
  | {
      title: string;
      image?: string; // opcional
      alt?: string;
    };

type Props = {
  id: string;
  title: string;
  items: ProjectItem[];
};

export default function ProjectsGrid({ id, title, items }: Props) {
  return (
    <section className="projects-grid" id={id}>
      <div className="projects-title">{title}</div>

      <div className="projects-cards">
        {items.map((item, idx) => {
          const isObj = typeof item === "object";
          const text = isObj ? item.title : item;
          const image = isObj ? item.image : undefined;
          const alt = isObj ? item.alt ?? text : text;

          return (
            <article className="project-card" key={idx}>
              {/* IMAGEM fora do card verde (em cima) */}
              <div className="project-image-box">
                {image ? (
                  <img className="project-image" src={image} alt={alt} />
                ) : (
                  <div className="project-image-placeholder">Imagem</div>
                )}
              </div>

              {/* CARD verde (texto) */}
              <div className="project-text-card">
                <h3 className="project-text">{text}</h3>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}