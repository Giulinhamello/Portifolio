import React from "react";
import "../assets/styles/SectionGrid.scss";

type Props = {
  id: string;
  title: string;
  items: string[];
};

export default function SectionGrid({ id, title, items }: Props) {
  return (
    <section className="section-grid" id={id}>
      <div className="section-inner">
        <h2 className="section-title">{title}</h2>

        <div className="cards-grid">
          {items.map((text, idx) => (
            <div className="card" key={`${id}-${idx}`}>
              {text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}