import { styled } from 'styled-components'

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    z-index: 1;
    
    .active{
        animation: slideIn 0.5s ease-in-out ; 
        
    }
    @keyframes slideIn {
        0% {
            transform: translateX(-100%);
        }
        100% {
            transform: translateX(0);
        }
    }

    .disabled {
        animation: slideOut 0.5s ease-in-out ; 
        display: none;
    }
    @keyframes slideOut {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-100%);
        }
    }
    
`

export const Header = styled.header`
    width: 100%;
    padding: 5.6rem 2.8rem 2.4rem;
    background-color: ${({theme})=> theme.COLORS.DARK_700};
    >button{
        >svg{
            font-size: 3rem;
        }
    }
`
export const Main = styled.main`
    width: 100%;
    height: 100%;
    padding: 3.6rem 2.8rem 0;
    background-color: ${({theme})=> theme.COLORS.DARK_400};
    display: flex;
    flex-direction: column;
    gap: 2rem;

    >div{
        max-width: 100% !important;
    }

    a, button{
        background-color: transparent;
        border: none;
        color: ${({theme})=> theme.COLORS.LIGHT_400};
        font-size: 2.4rem;
        font-weight: 400;
        display: flex;
        justify-content: flex-start;
        padding: 1rem 0;
        border-bottom: 3px solid ${({theme})=> theme.COLORS.DARK_900};
    }
    
`
export const Input = styled.div`
    width: 100vw;
    display:flex;
    align-items: center;
    background-color: ${({ theme })=> theme.COLORS.DARK_900};
    margin-bottom: 8px;
    border-radius:1rem;

    >input{
        width:100vw;
        height:56px;
        padding:12px;
        color: white;
        background: transparent;
        border: 0;
        font-size: 1.8rem;
    }
    >svg{
        margin-left: 1.6rem;
        color: ${({ theme })=> theme.COLORS.LIGHT_400};
        font-size: 2rem;
    }
`
