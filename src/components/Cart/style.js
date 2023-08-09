import { styled } from "styled-components";

export const Container = styled.button`
    background-color: transparent;
    border: none;
    font-size: 3.2rem;
    position: relative;

    >span{
        width: 2rem;
        position: absolute;
        top: 0;
        right: -0.4rem;
        font-size: 1.3rem;
        border-radius: 50%;
        background-color: ${({theme})=> theme.COLORS.THINTS.TOMATO_200};
    }
`