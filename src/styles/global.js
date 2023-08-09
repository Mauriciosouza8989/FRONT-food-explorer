import { createGlobalStyle } from 'styled-components';
export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :root{
        font-size: 62.5%;

    }
    #root{
        max-width: 100vw;
    }
    
    body{
        width: auto;
        overflow-x: hidden;
        background-color: ${({ theme }) => theme.COLORS.DARK_500};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        position: relative;
    }
    html{
        width: 100vw;
    }
    h1, input, label, textarea{
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        outline: none;
    }
    button, a{
        font-family: 'Poppins', sans-serif;
        font-size: 1.4rem;
        cursor: pointer;
        transition: filter 0.2s;
        text-align: center;
        text-decoration: none;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

     
    
    button:hover, a:hover{
        filter: brightness(0.9);
    }
`