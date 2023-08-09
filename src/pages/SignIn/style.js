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

    @media(min-width: 820px) {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    
`