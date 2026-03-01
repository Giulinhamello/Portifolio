import React, { useEffect, useState } from "react";
import "../assets/styles/Navigation.scss";

const navItems: Array<[string, string]> = [
  ["FORMAÇÃO", "formacao"],
  ["SOBRE MIM", "sobre"],
  ["PROJETOS", "projetos"],
  ["EXTRAS", "extras"],
];

export default function Navigation() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const hero = document.getElementById("main");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // visible = true enquanto o Main aparece na tela
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.15, // quando menos de ~15% do Main estiver visível, some
      }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`side-nav ${visible ? "" : "side-nav--hidden"}`} aria-label="Navegação">
      <ul className="side-nav-list">
        {navItems.map(([label, id]) => (
          <li key={id}>
            <button className="side-nav-item" onClick={() => scrollToSection(id)}>
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}