import Link from "next/link";
import { useRouter } from "next/router";

import Logo from "/public/assets/logo.svg";
import Star from "/public/assets/star.svg";

import * as S from "./styles";

import { items } from "./items";

export function Sidebar() {
    const router = useRouter();

    return (
        <S.Sidebar>
            <S.Logo src={Logo} alt="Logo" priority={true} />
            <S.List>
                {items?.map((item, index) => (
                    <>
                        {console.log(item.link, router.asPath)}
                        <S.Item
                            key={index}
                            selected={router.asPath == item.link}
                        >
                            <Link href={item.link}>
                                <S.Span>
                                    <S.Icon src={Star} alt="Icone de estrela" />
                                    {item.name}
                                </S.Span>
                            </Link>
                        </S.Item>
                    </>
                ))}
            </S.List>
        </S.Sidebar>
    );
}
