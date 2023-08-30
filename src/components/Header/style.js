import { styled } from "styled-components";

export const Container = styled.header`
    max-width: 100vw;
    padding: 5.6rem 2.8rem 2.4rem;
    display:flex ;
    justify-content: space-between;
    background-color: ${({ theme })=> theme.COLORS.DARK_700};
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 9;

    >div h1{
        font-size: 2.1rem;
    }

    
`
export const Button = styled.button`
    border: none;
    background-color: transparent;
    >svg{
        font-size: 3rem;
    }
`