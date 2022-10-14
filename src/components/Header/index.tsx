import { Container } from "../../styles/global";
import { BiasiPhoto } from "../BiasiPhoto";
import { NavBar } from "../NavBar";

import * as S from "./styles";
export const Header = () => {
  return (
    <>
      <Container>
        <S.Header>
          <NavBar />

          <S.Wrapper>
            <div>
              <S.Title>
                Olá, me chamo <br /> <S.Span>Lucas Biasi.</S.Span>
              </S.Title>
              <S.Paragraph>Desenvolvedor Web Front-End.</S.Paragraph>
            </div>

            <BiasiPhoto />
          </S.Wrapper>
        </S.Header>
      </Container>
    </>
  );
};
