interface ICardProjeto {
  titulo: string,
  imagem: string,
  descricao: string,
  ano: string,
  plataformas: ['web' | 'package'],
  tecnologias: ['react' | 'javascript' | 'typescript' | 'nodejs' | 'mongodb' | 'mysql'],
  site?: string,
  github?: string,
}

export function CardProjeto() {
  return <>
    <div className="flex flex-col">

    </div>
  </>
}