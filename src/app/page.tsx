import { Avatar } from "@mui/material";
import { BiSolidMessageDots } from "react-icons/bi";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

export default function Home() {
  return (
    <>
      <main className="flex flex-col w-full h-full items-center justify-center p-10">
        <section className="flex flex-col gap-8 w-full h-fit">
          <div className="flex flex-col gap-3 w-full">
            <div className="flex flex-row gap-3 items-center bg-cyan-800 w-fit px-4 py-3 rounded-full">
              <div className="w-fit h-fit relative">
                <BiSolidMessageDots size={16} color="#fff" className="absolute -top-1 -right-2 z-20" />
                <Avatar
                  className="z-0"
                  alt="José Diniz"
                  src="/assets/images/perfil.jpg"
                  sx={{
                    border: '#fff 2px solid',
                    width: 32,
                    height: 32,
                  }}
                />
              </div>
              <h2 className="text-xl font-semibold text-white">Olá, prazer, sou José!</h2>
            </div>
            <h1 className="text-6xl font-bold">Fullstack Developer</h1>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-base">
              Atuo no mercado como desenvolvedor fullstack, criando soluções
              para problemas todos os dias.
            </p>
            <p className="text-base">
              Já fui responsável pelo desenvolvimento de automações comerciais
              para varejo e restaurantes, emissores de documentos fiscais,
              plataformas web de vendas e plataformas de cursos.
            </p>
            <p className="text-base">
              Tenho experiência em plataformas web, desktop e mobile, onde
              utilizei tecnologias como TypeScript, Next.js, React Native, C#,
              ASP.NET, WinForms, entre outras.
            </p>
          </div>
          <div className="flex flex-row gap-2">
            <a href="https://github.com/josedinizdev">
              <FiGithub size={32} />
            </a>
            <a href="https://www.linkedin.com/in/idiogodiniz">
              <FaLinkedin size={32} />
            </a>
            <a href="https://www.instagram.com/diniz.dev/">
              <FaInstagram size={32} />
            </a>
            <a href="https://api.whatsapp.com/send?phone=5511978592522">
              <FaWhatsapp size={32} />
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
