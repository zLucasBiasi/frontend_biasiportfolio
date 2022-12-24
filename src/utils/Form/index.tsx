import { FormEvent, ReactNode } from "react";

export const Form = ({ children }: { children: ReactNode }) => {
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
    };

    return (
        <>
            <form onSubmit={handleSubmit}>{children}</form>
        </>
    );
};
