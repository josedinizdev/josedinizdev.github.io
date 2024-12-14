import { Avatar } from "@mui/material";
import Link from "next/link";
import { BiSolidMessageDots } from "react-icons/bi";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

export default function Home() {
  return (
    <>
      <main className="flex flex-col w-full items-center">
        <section className="flex flex-col gap-8 w-full pb-10">
          <div className="flex flex-col w-full gap-8 sm:gap-3 items-center sm:items-start">
            <div className="flex sm:hidden flex-col items-center">
              <Avatar
                className="z-0"
                alt="José Diniz"
                src="/assets/images/perfil.jpg"
                sx={{
                  border: "var(--cor-principal) 6px solid",
                  width: "65%",
                  height: "auto",
                }}
              />
            </div>

            <div className="hidden sm:flex flex-row gap-3 items-center bg-cyan-800 w-fit px-1 py-1 pr-4 rounded-full">
              <div className="w-fit h-fit relative">
                <BiSolidMessageDots
                  size={16}
                  color="#fff"
                  className="absolute -top-1 -right-2 z-20"
                />
                <Avatar
                  className="z-0"
                  alt="José Diniz"
                  src="/assets/images/perfil.jpg"
                  sx={{
                    border: "#fff 2px solid",
                    width: 28,
                    height: 28,
                  }}
                />
              </div>
              <h2 className="text-base font-semibold text-white">
                Olá, prazer, sou José!
              </h2>
            </div>

            <h1 className="text-5xl font-bold text-center">
              Fullstack Developer
            </h1>
          </div>

          <div className="flex flex-col-reverse sm:flex-col gap-4">
            <div className="flex flex-col w-full gap-4">
              <p className="text-base text-center sm:text-left">
                Atuo no mercado como Desenvolvedor Fullstack, criando soluções
                para problemas todos os dias. Tenho experiência em plataformas
                web, desktop e mobile, onde utilizei tecnologias como
                TypeScript, Next.js, React Native, C#, ASP.NET e WinForms.
              </p>
              <p className="text-base text-center sm:text-left">
                Já fui responsável pelo desenvolvimento de automações comerciais
                para varejos e restaurantes, emissores de documentos fiscais,
                plataformas web de vendas e plataformas de cursos.
              </p>
            </div>

            <div className="flex flex-col w-full gap-4">
              <div className="w-full flex flex-row gap-4 justify-center sm:justify-start">
                <a
                  className="flex items-center justify-center w-10 h-10 border-principal border-3 rounded-full"
                  href="https://github.com/josedinizdev"
                >
                  <FiGithub size={24} color="var(--cor-principal)" />
                </a>
                <a
                  className="flex items-center justify-center w-10 h-10 border-principal border-3 rounded-full"
                  href="https://www.instagram.com/diniz.dev/"
                >
                  <FaInstagram size={24} color="var(--cor-principal)" />
                </a>
                <a
                  className="flex items-center justify-center w-10 h-10 border-principal border-3 rounded-full"
                  href="https://api.whatsapp.com/send?phone=5511940646725"
                >
                  <FaWhatsapp size={24} color="var(--cor-principal)" />
                </a>
              </div>
              <div className="w-full flex flex-row gap-2 justify-center sm:justify-start">
                <a
                  href=""
                  className="px-5 py-2 border-principal border-3 bg-principal rounded-full text-white font-bold"
                >
                  Baixar curriculo
                </a>
                <Link
                  href="/projetos"
                  className="px-5 py-2 border-principal border-3 rounded-full text-principal font-bold"
                >
                  Projetos
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
