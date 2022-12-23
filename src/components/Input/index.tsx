import { ChangeEventHandler } from "react";

interface InputProps {
    id: string;
    label: string;
    type: string;
    value: string;
    setValue: ChangeEventHandler<HTMLInputElement>;
}
export const Input = ({
    type,
    id,
    label,
    value,
    setValue,
    ...props
}: InputProps) => {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                id={id}
                value={value}
                onChange={setValue}
                {...props}
            />
        </>
    );
};
