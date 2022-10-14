import { useState } from "react";

import { Logo } from "../Logo";
import hamb from "/public/assets/hamburguer.svg";

import * as S from "./styles";

export const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <S.Nav>
      <Logo />

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
          <S.ListItems>Contato</S.ListItems>
          <S.ListItems>X</S.ListItems>
        </S.ContentList>
      </S.ContainerList>
    </S.Nav>
  );
};
