import biasi from "/public/assets/photoBiasi.png";

import * as S from "./styles";
import { css, DefaultTheme } from "styled-components";

interface PhotoProps {
    Locals?: "Photo_Edit";
}

export const BiasiPhoto = ({ Locals }: PhotoProps) => (
    <S.ImageStyle
        Locals={Locals}
        src={biasi}
        alt="Logo do portfólio"
        priority
    />
);
