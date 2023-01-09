import { createContext, ReactNode, useState } from "react";
import { dataAuth } from "../services/http/auth";

interface ILogin {
    email: string;
    password: string;
}
interface authLoginContextType {
    authLogin: ({ email, password }: ILogin) => Promise<void>;
    dataUser: {
        message: string;
        token: string;
        user: { email: string; name: string };
    } | null;
    error: string | null;
    isLogged: boolean;
}

export const AuthLoginContext = createContext<authLoginContextType>(
    {} as authLoginContextType
);

export const AuthLoginProvider = ({ children }: { children: ReactNode }) => {
    const [dataUser, setDataUser] = useState(null);
    const [error, setError] = useState(null);
    const [isLogged, setIsLogged] = useState(false);

    const authLogin = async ({ email, password }: ILogin) => {
        const request = await dataAuth.login({ email, password });

        if (request.status == 200) {
            setIsLogged(true);
            setDataUser(request.data);
        } else {
            setError(request);
            setIsLogged(false);
        }
    };

    return (
        <AuthLoginContext.Provider
            value={{ authLogin, dataUser, error, isLogged }}
        >
            {children}
        </AuthLoginContext.Provider>
    );
};
