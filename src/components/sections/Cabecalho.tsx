import Link from "next/link";

export function Cabecalho() {
  return (
    <header className="flex flex-row w-full justify-between px-10 py-6">
      <Link className="text-xl font-bold" href="/">
        José <span className="text-cyan-800">Diniz</span>
      </Link>
      <nav>
        <ul className="flex flex-row gap-7">
          <li>
            <Link href="/sobre">sobre</Link>
          </li>
          <li>
            <Link href="/projetos">projetos</Link>
          </li>
          <li>
            <Link href="/curriculo">curriculo</Link>
          </li>
          <li>
            <Link href="/contato">contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
