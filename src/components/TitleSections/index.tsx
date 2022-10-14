import * as S from "./styles";

interface TitleProps {
  title: string;
}

export const TitleSections = ({ title }: TitleProps) => {
  return (
    <>
      <S.TitleStyle>{title}</S.TitleStyle>
    </>
  );
};
