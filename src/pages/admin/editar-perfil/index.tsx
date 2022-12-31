import onEye from "/public/assets/onEye.svg";
import offEye from "/public/assets/offEye.svg";
import { BiasiPhoto } from "../../../components/BiasiPhoto";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TemplateAdmin } from "../../../template/template_admin";
import { Form } from "../../../utils/Form";
import { Input } from "../../../utils/Input";
import { useState } from "react";
import { Button } from "../../../utils/Button";

import * as S from "./styles";

const schema = z.object({
    email: z.string().email(),
    password: z.string(),
});

const EditProfile = () => {
    const [seePassword, setSeePassword] = useState(false);
    const { register, handleSubmit, formState } = useForm({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: any) => {
        console.log(data);
    };
    return (
        <>
            <TemplateAdmin>
                <div>
                    <S.Title>Editar o perfil</S.Title>
                    <Form handleSubmit={handleSubmit(onSubmit)}>
                        <Input
                            Locals="Edit_profile"
                            {...register("email")}
                            id="email"
                            label="EMAIL"
                            type="text"
                            placeholder="Digite seu email"
                        />

                        <Input
                            Locals="Edit_profile"
                            {...register("password")}
                            id="Password"
                            label="SENHA"
                            type={!seePassword ? "password" : "text"}
                            placeholder="Digite sua senha"
                        />

                        <Input
                            Locals="Edit_profile"
                            {...register("password")}
                            id="Password"
                            label="SENHA"
                            type={!seePassword ? "password" : "text"}
                            placeholder="Repita sua senha"
                        />

                        {/* <S.StyleImage
                            onClick={() => setSeePassword((prev) => !prev)}
                            src={seePassword ? onEye : offEye}
                            alt="Icone de modo noturno"
                        /> */}
                        <Button Locals="Button_Edit" type="submit">
                            Atualizar Perfil
                        </Button>
                    </Form>
                </div>
                <S.EditProfilePhoto>
                    <h3>FOTO DE PERFIL</h3>
                    <BiasiPhoto Locals="Photo_Edit" />
                    <Button Locals="Button_Edit" type="submit">
                        Editar Perfil
                    </Button>
                </S.EditProfilePhoto>
            </TemplateAdmin>
        </>
    );
};

export default EditProfile;
