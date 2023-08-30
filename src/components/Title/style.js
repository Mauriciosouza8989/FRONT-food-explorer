import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin: auto;
    cursor: pointer;
    >div{
        display: flex;
        align-items: center;
        gap: 1rem;
        
         h1{
            font-size: 2.4rem;
            display: inline;
        }
    }
    >span{
        font-family: Roboto sans-serif;
        font-weight: 400;
        font-size: 12px;
        color: ${({ theme })=> theme.COLORS.LIGHT_400};
    }

    @media(min-width: 1100px) {
        margin: 0;
    }
    
`