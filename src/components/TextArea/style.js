import { styled } from "styled-components"


export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`
export const Label = styled.label`
    color: ${({ theme })=> theme.COLORS.LIGHT_400};
    font-size: 1.6rem;
`

export const Input = styled.textarea`
    width: 100%;
    height: 17rem;
    background-color: ${({ theme })=> theme.COLORS.DARK_900};
    border-radius: 0.8rem;
    border:none;
    color: ${({ theme })=> theme.COLORS.LIGHT_100};
    padding: 1.4rem;
    font-size: 1.8rem;
    cursor: pointer;
    resize: none;


    :placeholder{
        color: ${({ theme })=> theme.COLORS.LIGHT_500};
        font-size: 1.6rem;
    }
`