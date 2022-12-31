import { Link } from "react-scroll";

import { Container } from "../../styles/global";
import { TitleSections } from "../TitleSections";

import * as S from "./styles";

export const About = () => {
    return (
        <Container>
            <S.ContentAbout id="about">
                <TitleSections title="Sobre" />
                <S.Paragraph>
                    Sou um desenvolvedor Front-end que busca sempre fazer
                    códigos legíveis a outros desenvolvedores, com foco na
                    criação de sites com interfaces limpas, modernas e
                    acessíveis para todo tipo de usuário. Meus hobbies incluem
                    jogos, música e tocar alguns instrumentos que gosto como
                    saxophone e um bom e velho violão. Caso queira conversar
                    comigo e falar sobre algo do tipo estou disponível em meu
                    discord “ Olha o Biasi#0419 ” ou pode me chamar em meu
                    linkedin na aba de{" "}
                    <S.Span>
                        <Link
                            to="contact"
                            spy={false}
                            smooth="easeInOutQuart"
                            duration={1000}
                        >
                            Contatos!
                        </Link>
                    </S.Span>
                </S.Paragraph>
            </S.ContentAbout>
        </Container>
    );
};
