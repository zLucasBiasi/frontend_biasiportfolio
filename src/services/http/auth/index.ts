import { getApiData } from "../../api";

type Login = {
    email: string;
    password: string;
};

export const dataAuth = {
    login: async ({ email, password }: Login) => {
        try {
            const request = await getApiData.post("/login", {
                email,
                password,
            });
            return request;
        } catch (error) {
            return error.response.data.message;
        }
    },
};
