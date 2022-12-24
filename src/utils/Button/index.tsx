interface ButtonProps {
    type?: "button" | "submit" | "reset";
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    children?: React.ReactNode;
}
export const Button = ({ children, type }: ButtonProps) => {
    return (
        <>
            <button type={type}>{children}</button>
        </>
    );
};
