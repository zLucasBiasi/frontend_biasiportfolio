import { forwardRef, InputHTMLAttributes, memo, RefObject } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

import * as S from "./styles";

export const Input = memo(
    forwardRef<HTMLInputElement, InputProps>((props, ref) => {
        const { type, id, label, ...rest } = props;
        return (
            <S.ContainerInput>
                <S.Label htmlFor={id}>{label}</S.Label>
                <S.Input type={type} id={id} {...rest} ref={ref} />
            </S.ContainerInput>
        );
    })
);
