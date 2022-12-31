import Image from "next/future/image";

import iconEdit from "/public/assets/editIcon.png";
import { BiasiPhoto } from "../../components/BiasiPhoto";

import { CardAdmin } from "../../components/CardAdmin";
import { TemplateAdmin } from "../../template/template_admin";
import { Button } from "../../utils/Button/styles";
import { Input } from "../../utils/Input";

import * as S from "./styles";
const Admin = () => {
    return (
        <>
            <TemplateAdmin>
                <S.WrapperContainer>
                    <S.ProfileIconWrapper>
                        <BiasiPhoto Locals="Admin" />
                        <S.ProfileName>Lucas Biasi</S.ProfileName>
                    </S.ProfileIconWrapper>
                    <S.TitleInputWrapper>
                        <S.Title>PROJETOS</S.Title>
                        <Input placeholder="Pesquisar" Locals="Dashboard" />
                    </S.TitleInputWrapper>
                    <CardAdmin />
                    <S.TitleInputWrapper>
                        <S.Title>LISTA DE PROJETOS</S.Title>
                        <Button Locals="Button_Dashboard">
                            Cadastrar projetos
                        </Button>
                    </S.TitleInputWrapper>

                    <S.Table>
                        <thead>
                            <tr>
                                <S.Th>Nome</S.Th>
                                <S.Th>Linguagens</S.Th>
                                <S.Th>Imagem</S.Th>
                                <S.Th>Link</S.Th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <S.Td>Serpens</S.Td>
                                <S.Td>Next JS</S.Td>
                                <S.Td>Posterdaimagem.serpens.com.br</S.Td>
                                <S.Td>www.serpens.com.br</S.Td>
                                <S.Th>
                                    <Image
                                        src={iconEdit}
                                        alt="icone de um lapis para editar"
                                        width={20}
                                        height={20}
                                    />
                                </S.Th>
                            </tr>

                            <tr>
                                <S.Td>Trampo de casa</S.Td>
                                <S.Td>Next JS </S.Td>
                                <S.Td>Posterdaimagem.trampodecasa.com.br</S.Td>
                                <S.Td>www.trampodecasa.com.br</S.Td>
                                <S.Th>
                                    <Image
                                        src={iconEdit}
                                        alt="icone de um lapis para editar"
                                        width={20}
                                        height={20}
                                    />
                                </S.Th>
                            </tr>
                        </tbody>
                    </S.Table>
                </S.WrapperContainer>
            </TemplateAdmin>
        </>
    );
};

export default Admin;
