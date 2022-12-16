import Link from "next/link";
import { Container } from "../../styles/global";
import { TitleSections } from "../TitleSections";
import { Project } from "./projectsPost";

import * as S from "./style";

export const Projects = () => {
    return (
        <Container>
            <S.ContentProjects id="projects">
                <TitleSections title="Projetos" />

                {Project?.map((item) => (
                    <S.ContainerImage key={item.name}>
                        <a href={item.link} target="_blank" rel="noreferrer">
                            <S.ImageStyle
                                src={item.poster}
                                alt={item.name}
                                priority
                            />
                        </a>
                    </S.ContainerImage>
                ))}

                <S.ContainerGitHub>
                    <S.LinkSeeMore
                        href="https://github.com/zLucasBiasi"
                        target="_blank"
                    >
                        Veja mais no meu github<span>{" >"}</span>
                    </S.LinkSeeMore>
                </S.ContainerGitHub>
            </S.ContentProjects>
        </Container>
    );
};
