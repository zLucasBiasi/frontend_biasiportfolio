import Link from "next/link";
import { Container } from "../../styles/global";
import { TitleSections } from "../TitleSections";
import { Project } from "./projectsPost";

import * as S from "./style";

export const Projects = () => {
  return (
    <Container>
      <S.ContentProjects>
        <TitleSections title="Projetos" />

        {Project?.map((item) => (
          <S.Teste key={item.name}>
            <a href={item.link} target="_blank" rel="noreferrer">
              <S.ImageStyle src={item.poster} alt={item.name} priority />
            </a>
          </S.Teste>
        ))}

        <S.ContainerGitHub>
          <S.LinkSeeMore href="https://github.com/zLucasBiasi" target="_blank">
            VEJA MAIS<span>{" >"}</span>
          </S.LinkSeeMore>
        </S.ContainerGitHub>
      </S.ContentProjects>
    </Container>
  );
};