import { CardProjeto, Projeto } from "@/components/cards/CardProjeto";

const projetos: Projeto[] = [
  {
    titulo: "ts-devutils",
    imagem: "/assets/images/ts-devutils.png",
    descricao: "Projeto com diversos métodos que fui acumulando e utilizei com bastante frequência em meus projetos, os quais também estão presentes em outras linguagens.",
    ano: "2024",
    tecnologias: ["TypeScript", "Nodejs"],
    github: "https://github.com/josedinizdev/ts-devutils"
  },
  {
    titulo: "ts-integra",
    imagem: "/assets/images/ts-integra.png",
    descricao: "Projeto com diversas integrações utilizadas em diferentes projetos, centralizadas em um único pacote que pode ser instalado via npm.",
    ano: "2024",
    tecnologias: ["TypeScript", "Nodejs"],
    github: "https://github.com/josedinizdev/ts-integra"
  },
  {
    titulo: "DevMonk",
    imagem: "/assets/images/devmonk.png",
    descricao: "Plataforma online de cursos de programação com videoaulas, quizzes e atividades. Atualmente, conta com mais de 100 alunos ativos.",
    ano: "2023",
    tecnologias: ["JavaScript", "React", "MongoDB", "Nodejs"],
    site: "https://devmonk.com.br/"
  },
]

export default function Projetos() {
  return (
    <>
      <main className="w-full grid gap-6 grid-cols-1 md:grid-cols-2">
        {projetos.map((p, i) => <CardProjeto {...p} key={i} />)}
      </main>
    </>
  );
}
