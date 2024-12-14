"use client";
import Link from "next/link";
import { Button } from "../actions/Button";
import { useState } from "react";
import { Box, Drawer, List, ListItem } from "@mui/material";
import { HiMenu } from "react-icons/hi";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

export function Cabecalho() {
  const [menu, setMenu] = useState(false);
  return (
    <header className="flex flex-col w-full justify-center items-center">
      <div className="flex flex-row w-full justify-between px-10 py-6 items-center">
        <Link className="text-xl font-bold" href="/">
          José <span className="text-cyan-800">Diniz</span>
        </Link>

        <div className="flex sm:hidden">
          <Button onClick={() => setMenu(true)} sx={{ p: 0 }}>
            <HiMenu size={32} />
          </Button>
          <Drawer anchor="right" open={menu} onClose={() => setMenu(false)}>
            <Box
              sx={{ width: 250 }}
              role="presentation"
              onClick={() => setMenu(false)}
            >
              <List>
                <ListItem>
                  <Link href="/">inicio</Link>
                </ListItem>
                <ListItem>
                  <Link href="/sobre">sobre</Link>
                </ListItem>
                <ListItem>
                  <Link href="/projetos">projetos</Link>
                </ListItem>
              </List>
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
            </Box>
          </Drawer>
        </div>

        <nav className="hidden sm:flex">
          <ul className="flex flex-row gap-7">
            <li>
              <Link href="/">inicio</Link>
            </li>
            <li>
              <Link href="/sobre">sobre</Link>
            </li>
            <li>
              <Link href="/projetos">projetos</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
