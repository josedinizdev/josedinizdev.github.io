import { CardTecnologia, Tecnologia } from "@/components/cards/CardTecnologia";

const tecnologias: Tecnologia[] = [
  {
    titulo: "Front-end",
    conteudo: [
      {
        descricao: "Linguagens",
        itens: ["JavaScript", "TypeScript", "C#"]
      },
      {
        descricao: "Frameworks e bibliotecas",
        itens: ["React", "Next.js", "ASP.NET", "Vite"],
      }
    ]
  },
  {
    titulo: "Back-end",
    conteudo: [
      {
        descricao: "Linguagens",
        itens: ["JavaScript", "TypeScript", "C#"]
      },
      {
        descricao: "Frameworks e bibliotecas",
        itens: ["Express.js", "Next.js", "ASP.NET"]
      },
      {
        descricao: "Banco de dados",
        itens: ["MySQL", "Firebird", "MongoDB", "SQL Server"]
      }
    ]
  },
  {
    titulo: "Ferramentas",
    conteudo: [
      {
        descricao: "Hospedagem",
        itens: ["SaveInCloud", "Hostinger", "Localweb"]
      },
      {
        descricao: "Versionamento",
        itens: ["Git", "GitHub"]
      },
      {
        descricao: "Testes unitarios",
        itens: ["Jest"]
      }
    ]
  }
];

export default function Sobre() {
  return (
    <>
      <main className="w-full flex flex-col gap-6">
        <h1 className="text-principal font-bold text-2xl">Sobre mim</h1>
        <article className="w-full flex flex-col gap-2">
          <p>
            Sou um Desenvolvedor Fullstack comprometido
            em entregar soluções web em um curto período
            de tempo com qualidade excepcional. Estou estudando
            programação desde 2018 e entrei no mercado pela
            primeira vez em 2022. Iniciei na programação aprendendo
            a desenvolver modificações em jogos, que adicionavam novas mecânicas
            e funcionalidades.
          </p>
        </article>
        <article className="w-full flex flex-col gap-2">
          <h2 className="text-principal font-bold text-2xl">Minha rotina</h2>
          <p>
            Meu dia geralmente começa cedo, organizando minhas
            tarefas e metas do dia, de acordo com a prioridade
            de cada uma. Durante a manhã, foco em programar,
            resolver problemas e implementar novas funcionalidades
            em projetos em andamento.
          </p>
          <p>
            Sempre que possível, dedico um tempo à prática de hobbies e
            ao aprendizado de algo novo, equilibrando minha rotina para
            manter a produtividade e o bem-estar.
          </p>
        </article>
        <article className="w-full flex flex-col gap-2">
          <h2 className="text-principal font-bold text-2xl">Estudos</h2>
          <p>
            Atualmente, estou cursando Gestão de Tecnologia, o que tem ampliado minha visão sobre
            o papel estratégico da tecnologia nas empresas. Além disso, tenho explorado novas
            linguagens de programação como Lua e Ruby, buscando diversificar minhas
            habilidades e me aprofundar em suas aplicações.
          </p>
        </article>
        <article className="w-full flex flex-col gap-2">
          <h2 className="text-principal font-bold text-2xl">Tecnologias</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-4">
            {tecnologias.map((tec, i) => <CardTecnologia key={i} titulo={tec.titulo} conteudo={tec.conteudo}  />)}
          </div>
        </article>
      </main>
    </>
  );
}
