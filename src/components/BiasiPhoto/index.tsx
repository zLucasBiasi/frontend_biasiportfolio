import biasi from "/public/assets/photoBiasi.png";

import * as S from "./styles";

interface PhotoProps {
    Locals?: "Photo_Edit" | "Admin";
}

export const BiasiPhoto = ({ Locals }: PhotoProps) => (
    <S.ImageStyle
        Locals={Locals}
        src={biasi}
        alt="Logo do portfólio"
        priority
    />
);
