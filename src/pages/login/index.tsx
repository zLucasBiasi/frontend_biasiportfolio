import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import onEye from "/public/assets/onEye.svg";
import offEye from "/public/assets/offEye.svg";

import { Button } from "../../components/Button";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";

import * as S from "./styles";

const schema = z.object({
    email: z.string().email(),
    password: z.string(),
});

const Login = () => {
    const [seePassword, setSeePassword] = useState(false);
    const { register, handleSubmit, formState } = useForm({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: any) => {
        console.log(data);
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
                        <Button type="submit">Login</Button>
                    </Form>
                </S.CardLogin>
            </S.Wrapper>
        </>
    );
};

export default Login;
