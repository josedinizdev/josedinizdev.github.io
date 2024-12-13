import { Avatar } from "@mui/material";
import { BiSolidMessageDots } from "react-icons/bi";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

export default function Home() {
  return (
    <>
      <main className="flex flex-col w-full h-full items-center justify-center">
        <section className="flex flex-col gap-8 w-full h-fit">
          <div className="flex flex-col gap-3 w-full">
            <div className="flex flex-row gap-3 items-center bg-cyan-800 w-fit px-1 py-1 pr-4 rounded-full">
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
              <h2 className="tex-xl font-semibold text-white">
                Olá, prazer, sou José!
              </h2>
            </div>
            <h1 className="text-5xl font-bold">Fullstack Developer</h1>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-base">
              Atuo no mercado como Desenvolvedor Fullstack, criando soluções
              para problemas todos os dias. Tenho experiência em plataformas
              web, desktop e mobile, onde utilizei tecnologias como TypeScript,
              Next.js, React Native, C#, ASP.NET e WinForms.
            </p>
            <p className="text-base">
              Já fui responsável pelo desenvolvimento de automações comerciais
              para varejos e restaurantes, emissores de documentos fiscais,
              plataformas web de vendas e plataformas de cursos.
            </p>
            <div className="flex flex-row gap-4">
              <a
                className="flex items-center justify-center w-10 h-10 border-principal border-3 rounded-full"
                href="https://github.com/josedinizdev"
              >
                <FiGithub size={24} color="var(--cor-principal)" />
              </a>
              <a
                className="flex items-center justify-center w-10 h-10 border-principal border-3 rounded-full"
                href="https://www.linkedin.com/in/idiogodiniz"
              >
                <FaLinkedin size={24} color="var(--cor-principal)" />
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
          </div>

          <div className="flex flex-row gap-2">
            <a className="px-5 py-2 border-principal border-3 bg-principal rounded-full text-white font-bold">
              Baixar curriculo
            </a>
            <a className="px-5 py-2 border-principal border-3 rounded-full text-principal font-bold">
              Projetos
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
