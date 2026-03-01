import React from "react";
import "../assets/styles/Main.scss";
import giulia from "../assets/images/giulia.png";

function Main() {
  return (
    <section className="main-hero" id="main">
      <div className="hero-inner">
        <div className="hero-text">
          <h1 className="hero-title">Giulia Santana de Mello</h1>
          <p className="hero-subtitle">Engenharia Biomédica</p>
          <p className="hero-subtitle">Faculdade Israelita Albert Einstein</p>

          <div className="hero-actions">
            <a
              className="hero-btn"
              href={`${process.env.PUBLIC_URL}/curriculo.pdf`}
              target="_blank"
              rel="noopener noreferrer"
            >
              CURRÍCULO
            </a>

            <a
              className="hero-btn"
              href="https://www.linkedin.com/in/SEU-LINK-AQUI"
              target="_blank"
              rel="noopener noreferrer"
            >
              LINKEDIN
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src={giulia} alt="Foto da Giulia" />
        </div>
      </div>
    </section>
  );
}

export default Main;