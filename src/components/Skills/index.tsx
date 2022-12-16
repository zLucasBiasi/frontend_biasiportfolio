import { useContext } from "react";

import { DarkModeContext } from "../../context/darkMode";
import { Container } from "../../styles/global";
import { TitleSections } from "../TitleSections";
import { hardSkills } from "./hardSkills";

import * as S from "./styles";

export const Skills = () => {
    const { theme } = useContext(DarkModeContext);
    return (
        <Container>
            <S.ContentSkills id="skills">
                <TitleSections title="Habilidades" />
                <S.WrapperJustify>
                    <S.WrapperCollum>
                        <S.Title>
                            Quais minhas habilidades de <br /> programação?
                        </S.Title>
                        <S.Paragraph>
                            Procuro sempre por meio dessas tecnologias estar
                            trazendo um código legível e escalável com foco na
                            performance e na baixa manutenção.
                        </S.Paragraph>
                    </S.WrapperCollum>

                    <div>
                        {hardSkills[theme.title].map(
                            (item: any, index: any) => (
                                <S.ImageStyle
                                    key={index}
                                    src={item.icon}
                                    alt={item.alt}
                                />
                            )
                        )}
                    </div>
                </S.WrapperJustify>
            </S.ContentSkills>
        </Container>
    );
};
