import { styled } from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;

    form {
        button{
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
            
        }

    }
    
   
`
export const Loading = styled.span`
    width: 24px;
    height: 24px;
    display: block;
    border: 5px solid #fff;
    background-color: transparent;
    border-right: 5px solid transparent;
    margin: auto;
    border-radius: 50%;
    animation: loading 1s ease-in-out infinite;

    @keyframes loading {
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
`
