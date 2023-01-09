import { useContext, useState } from "react";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import onEye from "/public/assets/onEye.svg";
import offEye from "/public/assets/offEye.svg";

import { Button } from "../../components/Button";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";

import { AuthLoginContext } from "../../context/login";

import * as S from "./styles";

export type FieldValues = Record<string, any>;
interface SubmitLoginProps {
    email: string;
    password: string;
}

const schema = z.object({
    email: z.string().email(),
    password: z.string(),
});

const Login = () => {
    const [seePassword, setSeePassword] = useState(false);
    const { register, handleSubmit } = useForm<SubmitLoginProps>({
        resolver: zodResolver(schema),
    });

    const { authLogin, error } = useContext(AuthLoginContext);

    const onSubmit: SubmitHandler<SubmitLoginProps> = ({ email, password }) => {
        authLogin({ email, password });
    };

    return (
        <>
            <S.Wrapper>
                <S.CardLogin>
                    <Form handleSubmit={handleSubmit(onSubmit)}>
                        <Input
                            {...register("email")}
                            id="email"
                            label="EMAIL"
                            type="text"
                            placeholder="Digite seu email"
                        />

                        <Input
                            {...register("password")}
                            id="Password"
                            label="SENHA"
                            type={!seePassword ? "password" : "text"}
                            placeholder="Digite sua senha"
                        />

                        <S.StyleImage
                            onClick={() => setSeePassword((prev) => !prev)}
                            src={seePassword ? onEye : offEye}
                            alt="Icone de modo noturno"
                        />
                        <S.Error>{error}</S.Error>
                        <Button type="submit">Login</Button>
                    </Form>
                </S.CardLogin>
            </S.Wrapper>
        </>
    );
};

export default Login;
