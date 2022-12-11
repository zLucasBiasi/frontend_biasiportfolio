import { Container } from "../../styles/global";
import { TitleSections } from "../TitleSections";

import * as S from "./styles";

export const Contact = () => {
    return (
        <Container>
            <S.ContentContact id="contact">
                <TitleSections title="Contatos" />
                <S.TitleContact>LUCAS BIASI DOS ANJOS</S.TitleContact>
                <S.TitleContact>GUARULHOS - SP</S.TitleContact>
                <S.TitleEmail href="mailto:lucasbiasidev@gmail.com">
                    lucasbiasidev@gmail.com
                </S.TitleEmail>
                <S.TitleContact>
                    <S.Call href="callto:+5511959265463">
                        +55 11 95926-5463
                    </S.Call>
                </S.TitleContact>
            </S.ContentContact>
        </Container>
    );
};
