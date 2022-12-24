import { ReactNode } from "react";

export const Form = ({
    children,
    handleSubmit,
}: {
    children: ReactNode;
    handleSubmit: () => void;
}) => {
    return (
        <>
            <form onSubmit={handleSubmit}>{children}</form>
        </>
    );
};
