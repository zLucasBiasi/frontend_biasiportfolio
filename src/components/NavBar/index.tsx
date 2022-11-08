import { useContext, useState } from "react";

import { Logo } from "../Logo";
import hamb from "/public/assets/hamburguer.svg";
import sun from "/public/assets/light.svg";
import moon from "/public/assets/dark.svg";

import * as S from "./styles";
import { DarkMode } from "../../context/darkMode";
import { LogoDark } from "../LogoDark";

export const NavBar = () => {
  const { toggleTheme } = useContext(DarkMode);

  const [openNav, setOpenNav] = useState(false);

  const [mode, setMode] = useState(true);

  return (
    <S.Nav>
      {mode ? <Logo /> : <LogoDark />}

      <S.ImageHamb
        onClick={() => setOpenNav(!openNav)}
        src={hamb}
        alt="icone que representa o menu mobile"
      />

      <S.ContainerList openNav={openNav}>
        <S.ContentList>
          <S.ListItems>Sobre</S.ListItems>
          <S.ListItems>Habilidades</S.ListItems>
          <S.ListItems>Projetos</S.ListItems>
          <S.ListItems>Contatos</S.ListItems>
          <S.DarkMode>
            <S.StyleImage
              onClick={() => {
                setMode((prev) => !prev);
                toggleTheme();
              }}
              src={mode ? sun : moon}
              alt="Icone de modo noturno"
            />
          </S.DarkMode>
        </S.ContentList>
      </S.ContainerList>
    </S.Nav>
  );
};
