import { styled } from "styled-components"

export const Container = styled.footer`
    width: 100vw;
    padding: 3.2rem 2.7rem;
    background-color: ${({theme})=> theme.COLORS.DARK_600};
    position: relative;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    >div{
        color: ${({theme})=> theme.COLORS.LIGHT_700};
        display: flex;
        align-items: center;
        gap: 0.5em;
        >h1{
            font-size: 2rem;
        }
        svg{
            width: 2rem;
            height: 2rem;

        }
    }
    p{
        font-size: 1.2rem;
        font-weight: 400;
        font-family:Roboto, sans-serif;
        color: ${({theme})=> theme.COLORS.LIGHT_500};
    }

`