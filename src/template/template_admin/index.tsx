import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";

import * as S from "./styles";
export const TemplateAdmin = ({ children }: { children: ReactNode }) => {
    return (
        <S.Wrapper>
            <Sidebar />
            {children}
        </S.Wrapper>
    );
};
