interface ButtonProps {
    type?: "button" | "submit" | "reset";
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    children?: React.ReactNode;
}

import * as S from "./styles";

export const Button = ({ children, type }: ButtonProps) => {
    return (
        <>
            <S.Button type={type}>{children}</S.Button>
        </>
    );
};
