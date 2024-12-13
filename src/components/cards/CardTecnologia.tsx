interface Conteudo {
  descricao: string,
  itens: string[]
}

export interface ICardTecnologia {
  titulo: string,
  conteudo: Conteudo[]
}

export function CardTecnologia({ titulo, conteudo }: ICardTecnologia) {
  return <div className="w-full flex flex-col bg-slate-100 rounded-xl p-3 gap-2">
    <h3 className="text-principal font-bold text-lg">{titulo}</h3>
    <div className="flex flex-col w-full gap-1">
      {conteudo.map(c => <p>
        <span className="font-bold text-base">{c.descricao}: </span>
        {c.itens.join(', ')}
      </p>)}
    </div>
  </div>
}