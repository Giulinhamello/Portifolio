import React from "react";

import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Contact from "./components/Contact";

import SectionGrid from "./components/SectionGrid";
import ProjectsGrid from "./components/ProjectsGrid";

import { formacao, sobre, projetos, extras } from "./data/sections";

function App() {
  return (
    <div>
      <Navigation />
      <Main />

      <SectionGrid id="formacao" title="FORMAÇÃO ACADÊMICA" items={formacao} />
      <SectionGrid id="sobre" title="SOBRE MIM" items={sobre} />

      <ProjectsGrid id="projetos" title="SELEÇÃO DE PROJETOS RECENTES" items={projetos} />

      <SectionGrid id="extras" title="ATIVIDADES EXTRACURRICULARES" items={extras} />

      <Contact />
    </div>
  );
}

export default App;