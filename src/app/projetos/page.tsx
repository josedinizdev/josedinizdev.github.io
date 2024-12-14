import { CardProjeto, Projeto } from "@/components/cards/CardProjeto";

const projetos: Projeto[] = [
  {
    titulo: "DevMonk",
    imagem: "/assets/images/devmonk.png",
    descricao: "Plataforma online de cursos de programacao com video aulas, quiz e atividades. Essa plataforma possui mais de 100 alunos ativos.",
    ano: "2023",
    tecnologias: ["JavaScript", "React", "MongoDB", "Nodejs"],
    site: "https://devmonk.com.br/"
  }
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
