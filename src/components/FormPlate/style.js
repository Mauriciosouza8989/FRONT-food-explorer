import { styled } from "styled-components"

export const Form = styled.form`
    max-width: 100%;
    height: 100% ;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    padding: 1rem 3.2rem 5rem;
    overflow: hidden;

    >a{
        font-size: 1.7rem;
        display: flex;
        align-items: center;
        >svg{
            font-size: 2rem;
        }
    }

    >h2{
        font-family: Poppins, sans-serif;
        font-size: 3rem;
    }

    >.ingredients>div{
        background-color: ${({ theme })=> theme.COLORS.DARK_900};
        height: auto;
        padding: 1rem;
        border-radius: 0.8rem;
        display: flex;
        align-items: center;
        gap: 1.6rem;
        
    }
    >.categoria{
        max-width: 100%;
        height: auto;
        display: flex;
        gap: .8rem;
        flex-direction: column;
        
        
        >div{
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            position: relative;

            >svg{
                font-size: 2rem;
                position: absolute;
                right: 1.6rem;
            }
            >select{
            font-size: 1%.4;
            padding: 1.3rem 1.6rem;
            width: 100%;
            height: 4.8rem;
            border-radius: 0.8rem;
            border: none;
            background-color: ${({ theme })=> theme.COLORS.DARK_900};
            color: ${({ theme })=> theme.COLORS.LIGHT_400};
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            
            
        }
        } 
        >p{
            max-width: 100%;
            font-family: Poppins, sans-serif;
            color: ${({ theme })=> theme.COLORS.LIGHT_400};
            font-size: 1.6rem;
        }
    }
    >.ingredients{
        display: flex;
        flex-direction: column;
        gap: .8rem;

        >p{
            max-width: 100%;
            font-family: Poppins, sans-serif;
            color: ${({ theme })=> theme.COLORS.LIGHT_400};
            font-size: 1.6rem;

        }
        
    }
`