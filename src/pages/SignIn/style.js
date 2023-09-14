import { styled } from "styled-components"

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 4rem;
    display: flex;
    padding-top: 10rem;
    gap: 7rem;
    flex-direction: column;
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

    @media(min-width: 820px) {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    
`