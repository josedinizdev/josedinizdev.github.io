"use client";

import { Button } from "../actions/Button";
import { useState } from "react";
import { Box, Modal, Stack } from "@mui/material";
import { IoLogoJavascript, IoLogoReact } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandMysql } from "react-icons/tb";

type Tecnologias = "React" | "JavaScript" | "TypeScript" | "Nodejs" | "MongoDB" | "MySQL";

export interface Projeto {
  titulo: string;
  imagem: string;
  descricao: string;
  ano: string;
  tecnologias: Tecnologias[];
  site?: string;
  github?: string;
}

function IconeTecnologia({ tecnologia }: { tecnologia: Tecnologias }) {
  let Icone;
  if (tecnologia == 'JavaScript') Icone = () => <IoLogoJavascript size={48} color="#ffe100" />
  else if (tecnologia == 'TypeScript') Icone = () => <BiLogoTypescript size={48} color="#135897" />
  else if (tecnologia == 'React') Icone =  () => <IoLogoReact size={48} color="#013a6f" />
  else if (tecnologia == 'MongoDB') Icone =  () => <SiMongodb size={48} color="#4faa41" />
  else if (tecnologia == 'Nodejs') Icone =  () => <FaNodeJs size={48} color="#50914d" />
  else if (tecnologia == 'MySQL') Icone =  () => <TbBrandMysql size={48} color="#135897" />
  else Icone = () =>  <></>

  return <div className="flex flex-col h-fit w-fit items-center">
    <Icone />
    <p className="text-xs">{tecnologia}</p>
  </div>
}

export function CardProjeto(props: Projeto) {
  const [detalhe, setDetalhe] = useState<boolean>(false);

  return (
    <>
      <Button
        className="w-full h-fit overflow-hidden"
        onClick={() => setDetalhe(true)}
        sx={{
          display: "flex",
          flexDirection: "column",
          borderRadius: 3,
          padding: 0,
          boxShadow: 3,
          transition: "transform 0.2s",
          "&:hover": {
            transform: "scale(1.02)",
          },
        }}
      >
        <div className="relative overflow-hidden">
          <img
            src={props.imagem}
            alt={props.titulo}
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        </div>
        <div className="w-full flex flex-col p-4 justify-start items-start gap-2">
          <h3 className="text-lg font-semibold">
            {props.titulo}
          </h3>
          <p className="text-left">
            {props.descricao}
          </p>
        </div>
      </Button>

      <Modal open={detalhe} onClose={() => setDetalhe(false)}>
        <Box
          className="flex flex-col gap-2 overflow-hidden"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90%",
            maxWidth: 700,
            backgroundColor: "background.paper",
            borderRadius: 2,
            boxShadow: 24,
          }}
        >
          <img
            src={props.imagem}
            alt={props.titulo}
            style={{ width: "100%", height: "auto" }}
          />
          <div className="flex flex-col px-4 py-3 gap-3">
            <h2 className="text-2xl font-semibold">{props.titulo}</h2>
            <p>{props.descricao}</p>

            <div className="flex flex-col">
              <h3 className="text-lg font-semibold">Tecnologias</h3>
              <div className="grid gap-6 grid-cols-3 sm:grid-cols-4 md:grid-cols-5 px-8 py-3">
                {props.tecnologias.map((t, i) => (
                  <IconeTecnologia key={i} tecnologia={t} />
                ))}
              </div>
            </div>

            <Stack direction="row" spacing={2}>
              {props.site && (
                <Button
                  fullWidth
                  size="large"
                  href={props.site}
                  rel="noopener noreferrer"
                  sx={{ backgroundColor: "var(--cor-principal)", color: "#fff", fontWeight: "600" }}
                >
                  Visitar Site
                </Button>
              )}
              {props.github && (
                <Button
                  fullWidth
                  size="large"
                  href={props.github}
                  rel="noopener noreferrer"
                  sx={{ backgroundColor: "var(--cor-principal)", color: "#fff", fontWeight: "600" }}
                >
                  Ver no GitHub
                </Button>
              )}
            </Stack>
          </div>
        </Box>
      </Modal>
    </>
  );
}
