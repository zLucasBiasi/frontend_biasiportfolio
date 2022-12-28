interface ButtonProps {
    type?: "button" | "submit" | "reset";
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    children?: React.ReactNode;
    Locals?: "Button_Edit";
}

import * as S from "./styles";

export const Button = ({ children, type, Locals }: ButtonProps) => {
    return (
        <>
            <S.Button Locals={Locals} type={type}>
                {children}
            </S.Button>
        </>
    );
};
