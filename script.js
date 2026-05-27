const equipes = [
  { nome: "Containers", cor: "#00d4ff" },
  { nome: "Dockerfiles", cor: "#00ff9d" },
  { nome: "Images", cor: "#ffd600" },
  { nome: "Volumes", cor: "#ff4d6d" }
];


const perguntas = [
  {
    pergunta: "Qual comando cria uma imagem Docker?",
    opcoes: [
      "docker run",
      "docker build",
      "docker start",
      "docker pull"
    ],
    correta: "docker build",
    feedback: "Correto! docker build cria uma imagem a partir do Dockerfile."
  },

  {
    pergunta: "Qual comando lista containers em execução?",
    opcoes: [
      "docker images",
      "docker list",
      "docker ps",
      "docker status"
    ],
    correta: "docker ps",
    feedback: "Isso mesmo! docker ps mostra os containers ativos."
  },

  {
    pergunta: "O que é um Dockerfile?",
    opcoes: [
      "Um container pronto",
      "Um servidor Docker",
      "Um arquivo com instruções para criar imagens",
      "Um banco de dados"
    ],
    correta: "Um arquivo com instruções para criar imagens",
    feedback: "Perfeito! O Dockerfile define como a imagem será construída."
  },

  {
    pergunta: "Qual comando baixa uma imagem do Docker Hub?",
    opcoes: [
      "docker pull",
      "docker download",
      "docker get",
      "docker install"
    ],
    correta: "docker pull",
    feedback: "Correto! docker pull baixa imagens do Docker Hub."
  },

  {
    pergunta: "Containers compartilham o quê?",
    opcoes: [
      "Hardware físico",
      "Kernel do sistema operacional",
      "Máquinas virtuais",
      "BIOS"
    ],
    correta: "Kernel do sistema operacional",
    feedback: "Exato! Containers compartilham o kernel do SO."
  }
];