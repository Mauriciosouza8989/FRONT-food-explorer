import { styled } from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    position: relative;
    >input[type="file"]{
        position: absolute;
        opacity: 0;
        z-index: -1;
        cursor: pointer;
    }
    >.imagem{
        width: 100%;
        height: 4.8rem;
        background-color: ${({ theme })=> theme.COLORS.DARK_900};
        display: flex;
        gap: 1rem;
        align-items: center;
        font-size: 2rem;
        padding: 1.2rem;
        border-radius: 0.8rem;
        >svg{
            font-size: 3rem;
        }
    }

`
export const Label = styled.label`
    color: ${({ theme })=> theme.COLORS.LIGHT_400};
    font-size: 1.6rem;
`

export const Inputs = styled.input`
    width: 100%;
    height: 4.8rem;
    background-color: ${({ theme })=> theme.COLORS.DARK_900};
    border-radius: 0.8rem;
    border:none;
    color: ${({ theme })=> theme.COLORS.LIGHT_100};
    padding: 1.4rem;
    font-size: 1.8rem;
   
    


    :placeholder{
        color: ${({ theme })=> theme.COLORS.LIGHT_500};
        font-size: 1.6rem;
    }
`