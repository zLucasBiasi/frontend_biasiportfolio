import { ReactNode, useContext } from "react";

import { NextShield } from "next-shield";
import { useRouter } from "next/router";
import { AuthLoginContext } from "../../context/login";

export function Shield({ children }: { children: ReactNode }) {
    const { isLogged } = useContext(AuthLoginContext);
    const router = useRouter();

    return (
        <NextShield
            isAuth={isLogged}
            isLoading={false}
            router={router}
            privateRoutes={["/admin", "/admin/editar-perfil"]}
            publicRoutes={["/login"]}
            accessRoute="/admin"
            loginRoute="/login"
            LoadingComponent={"redirect.."}
        >
            {children}
        </NextShield>
    );
}
