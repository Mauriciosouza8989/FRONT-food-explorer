import { styled } from "styled-components";

export const Container = styled.form`
    width: 100%;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 3.2rem;
    font-family: Poppins, sans-serif;
    >h2{
        display: none;
    }

    @media(min-width: 500px) {
        max-width: 80%;
    }

    @media(min-width: 620px) {
        max-width: 70%;
    }
    

    @media(min-width:820px){
        display: flex;
        width: 45rem;
        height: fit-content;
        padding: 3rem 6rem;
        background-color: ${({ theme }) => theme.COLORS.DARK_700};
        border-radius: .8rem;
        align-items: center;

        >h2{
            display: initial;
            font-weight: 400;
            font-size: 3.2rem;
        }
    } 

`