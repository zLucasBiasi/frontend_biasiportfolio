import { Container } from "../../styles/global";
import { BiasiPhoto } from "../BiasiPhoto";

import * as S from "./styles";

export const Hero = () => {
    return (
        <Container>
            <S.ContentHero id="hero">
                <S.Wrapper>
                    <div>
                        <S.Title>
                            Olá, me chamo <br /> <S.Span>Lucas Biasi.</S.Span>
                        </S.Title>
                        <S.Paragraph>Desenvolvedor Web Front-End.</S.Paragraph>
                    </div>

                    <BiasiPhoto />
                </S.Wrapper>
            </S.ContentHero>
        </Container>
    );
};
