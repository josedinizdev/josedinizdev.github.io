interface Conteudo {
  descricao: string,
  itens: string[]
}

export interface Tecnologia {
  titulo: string,
  conteudo: Conteudo[]
}

export function CardTecnologia({ titulo, conteudo }: Tecnologia) {
  return <div className="w-full flex flex-col bg-slate-100 rounded-xl p-3 gap-2">
    <h3 className="text-principal font-bold text-lg">{titulo}</h3>
    <div className="flex flex-col w-full gap-1">
      {conteudo.map((c, i) => <p key={i}>
        <span className="font-bold text-base">{c.descricao}: </span>
        {c.itens.join(', ')}
      </p>)}
    </div>
  </div>
}