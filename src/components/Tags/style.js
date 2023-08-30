import styled from "styled-components";

export const Container = styled.div`
    object-fit: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    height:3.2rem;
    padding-left: .8rem;
    margin-left: 1rem;
    margin-bottom: 1rem;

    background-color: ${({theme, isNew})=> isNew ? 'transparent' : theme.COLORS.LIGHT_700};
    color: ${({theme })=> theme.COLORS.LIGHT_200};
    border: ${({theme, isNew})=> isNew ? `2px dashed ${theme.COLORS.LIGHT_600} ` : 'none'};
    border-radius:.5rem;
    padding-right: 1rem;

    >button{
        border:none;
        background: none;
    }
    .button-remove{
        color: red;
        font-size:1.6rem;
        display: flex;
        justify-content: center;
        
    }
    .button-add{
        color: orange;
        font-size: 1.6rem;
        display: flex;
        justify-content: center;
        &:hover{
            color: green;
        }
    }
    >input{
        width: 8rem;
        margin-right:.5rem;
        font-size: 1.6rem;
        display: flex;
        align-self: center;
        color: ${({theme})=> theme.COLORS.LIGHT_200};
        background: transparent;
        border: none;
        &::placeholder{
            color: ${({theme})=> theme.COLORS.GRAY_300};
        }

    }

`