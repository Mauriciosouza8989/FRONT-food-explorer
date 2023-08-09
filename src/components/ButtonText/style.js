import { styled } from "styled-components";


export const Container = styled.button`
    background-color: transparent;
    border: none;
    color: ${({theme})=> theme.COLORS.LIGHT_400};
    font-size: 2.4rem;
    font-weight: 400;
    display: flex;
    justify-content: flex-start;
    padding: 1rem 0;

`