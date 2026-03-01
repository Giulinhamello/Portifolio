import React, { useEffect, useState } from "react";

import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Contact from "./components/Contact";

import SectionGrid from "./components/SectionGrid";
import ProjectsGrid from "./components/ProjectsGrid";

// fallback local (se o supabase falhar)
import {
  formacao as formacaoLocal,
  sobre as sobreLocal,
  projetos as projetosLocal,
  extras as extrasLocal,
} from "./data/sections";

import { fetchProfile, type ProfileData } from "./data/profile";

function App() {
  const [profile, setProfile] = useState<ProfileData>({
    formacao: formacaoLocal,
    sobre: sobreLocal,
    projetos: projetosLocal as any, // projetosLocal tem imageKey agora (se você colou meu sections.ts)
    extras: extrasLocal,
  });

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchProfile("giulia");
        setProfile(data);
      } catch (err) {
        console.error("Falha ao carregar dados do Supabase. Usando fallback local.", err);
      }
    })();
  }, []);

  return (
    <div>
      <Navigation />
      <Main />

      <SectionGrid id="formacao" title="FORMAÇÃO ACADÊMICA" items={profile.formacao} />
      <SectionGrid id="sobre" title="SOBRE MIM" items={profile.sobre} />

      <ProjectsGrid
        id="projetos"
        title="SELEÇÃO DE PROJETOS RECENTES"
        items={profile.projetos}
      />

      <SectionGrid id="extras" title="ATIVIDADES EXTRACURRICULARES" items={profile.extras} />

      <Contact />
    </div>
  );
}

export default App;