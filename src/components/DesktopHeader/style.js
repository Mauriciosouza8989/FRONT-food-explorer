import { styled } from "styled-components";

export const Container = styled.header`
    max-width: 100vw;
    padding: 2.8rem 2.4rem;
    display:flex;
    justify-content: space-around;
    background-color: ${({ theme })=> theme.COLORS.DARK_600};
    align-items: center;
    

    >div h1{
        font-size: 2.1rem;
    }

    >a{
        svg{
            font-size: 3rem;
        }
    }

    
`
export const Search = styled.div`
    width: 58rem;
    display: flex;
    gap: 1.4rem;
    padding: 1.2rem 0 1.2rem 8rem;
    background-color: ${({ theme })=> theme.COLORS.DARK_900};
    border-radius: 0.8rem;
    >input{
        width: 100%;
        font-family: Roboto, sans-serif;
        background-color: transparent;
        border: none;
        font-size: 1.6rem;
        color: ${({ theme })=> theme.COLORS.LIGHT_100};
    }
    >svg{
        position: relative;
        font-size: 1.9rem;
        color: ${({ theme })=> theme.COLORS.LIGHT_400};
        left: 0;
        top: 0;
        bottom: 0;
    }
`
export const Button = styled.button`
    background-color: ${({ theme })=> theme.COLORS.THINTS.TOMATO_100};
    color: ${({ theme })=> theme.COLORS.LIGHT_100};
    border-radius: 0.8rem;
    border: none;
    display: flex;
    gap: .8rem;
    flex-wrap: nowrap;
    align-items: center;
    padding: 1.2rem 4.6rem;

    >img{
        width: 2.6rem;

    }

`