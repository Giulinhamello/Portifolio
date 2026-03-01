import eegImg from "../assets/images/grafos.png";
import respImg from "../assets/images/respscore.png";
import fisioImg from "../assets/images/fisio.png";

export const imageMap: Record<string, string> = {
  grafos: eegImg,
  respscore: respImg,
  fisio: fisioImg,
};

// fallback local (se o supabase falhar)
export const formacao = [
  {
    title: "Graduanda de Engenharia Biomédica, Albert Einstein",
    extra:
      "Sou graduanda em Engenharia Biomédica na Faculdade Israelita de Ciências da Saúde Albert Einstein (FICSAE), com início em janeiro de 2023 e previsão de conclusão em dezembro de 2027.",
  },
  {
    title: "Aluna de Iniciação Científica - Instituto do Cérebro, Albert Einstein",
    extra:
      "Estudo a modelagem de dados de EEG como redes complexas no Instituto do Cérebro do Hospital Israelita Albert Einstein, sob orientação da pesquisadora Dra. Elisa Kozasa.",
  },
  {
    title: "Estágio de verão, Technion, Israel",
    extra:
      "Passei dois meses no Instituto de Tecnologia de Israel (Technion), no laboratório da professora Shenhav Cohen, voltado ao estudo de tecido muscular. Durante esse período, acompanhei um pós-doutorando em um projeto sobre vesículas extracelulares como estratégia de drug delivery para doenças musculares.",
  },
];

export const sobre = [
  {
    title: "Me interesso por processamento digital de sinais e estatística",
    extra:
      "Descobri essa área de interesse durante a disciplina de Processamento Digital de Sinais. Atualmente, aprofundo esse tema na minha iniciação científica e estou cursando a disciplina na Escola Politécnica (USP), lecionada pelo Prof. Dr. Márcio Einsencraft.",
  },
  {
    title: "Gosto de trabalhar em projetos e desenvolver interfaces frontend",
    extra:
      "Exploro esse interesse na HealthTech Júnior Einstein, onde desenvolvemos soluções e produtos sob demanda para clientes externos.",
  },
  {
    title: "Estudo russo há 5 anos",
    extra:
      "Comecei a estudar russo durante a pandemia e, em 2026, pretendo prestar a prova de proficiência.",
  },
];

export const projetos = [
  {
    title: "Modelagem de grafos com dados de EEG",
    imageKey: "grafos",
    extra:
      "Análise de EEG em Santos para avaliar diferenças de conectividade cerebral entre mar e trânsito, modelando os dados como redes complexas e quantificando o impacto de áreas azuis.",
  },
  {
    title: "Cálculo de score respiratório para pacientes pós-extubação",
    imageKey: "respscore",
    extra:
      "Desenvolvimento de um modelo de score respiratório para pacientes pós-extubação a partir de variáveis fisiológicas, com visualização em dashboard.",
  },
  {
    title: "Tecnologia para cálculo de ângulos em reabilitação",
    imageKey: "fisio",
    extra:
      "Desenvolvimento de tecnologia para cálculo de ângulos articulares em reabilitação fisioterapêutica, como alternativa ao goniômetro tradicional.",
  },
];

export const extras = [
  {
    title: "Fundadora e presidente do Centro Acadêmico por um ano e meio",
    extra:
      "Fui fundadora e presidente do Centro Acadêmico de Engenharia, liderando a formação da diretoria e a organização de processos internos, comunicação e planejamento de ações voltadas ao desenvolvimento acadêmico dos alunos.",
  },
  {
    title: "Professora voluntária de Python para alunos do ensino médio",
    extra:
      "Sou professora voluntária de Python no Código Social, iniciativa vinculada à HealthTech Júnior Einstein.",
  },
  {
    title: "Disciplinas optativas de C++ e Bioinformática",
    extra:
      "Cursei as disciplinas optativas de Bioinformática e C++ pela instituição Albert Einstein, totalizando 40 horas.",
  },
];