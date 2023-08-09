import { styled } from "styled-components";

export const Container = styled.button`
    border: none;
    border-radius: .8rem;
    width: 100%;
    padding: 12px;
    font-size: 1.4rem;
    background-color: ${({ theme })=> theme.COLORS.THINTS.TOMATO_100};
    color: ${({ theme })=> theme.COLORS.LIGHT_100};
    &:disabled{
        background-color: ${({ theme })=> theme.COLORS.THINTS.TOMATO_400};
    }
`