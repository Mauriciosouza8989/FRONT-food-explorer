import { styled } from "styled-components"


export const Container = styled.div`

    width: 21rem;
    height: 29.2rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_100};
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
    padding: 2.4rem ;
    gap: 1.2rem;
    position: relative;
   
    >.details{
        background-color: transparent;
        border:none;

        >p{
            font-size: 1.8rem;
            display: flex;
            align-items: center;
            justify-content: center;

            svg{
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }
    >button:nth-child(1){
        position: absolute;
        right: 1.6rem;
        top: 1.6rem;
        border: none;
        background-color: transparent;
        display: flex;
        align-items: center;
        >svg{
            font-size: 2rem;
        }
        svg:hover{
            color: ${({ theme }) => theme.COLORS.THINTS.TOMATO_300};
            
        }
    }


    >span{
        font-size: 1.6rem;
        font-weight: 400;
    }

    >img{
        width: 60%;
        height: auto;
    }
    >div{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1.4rem;

        span{
            font-size: 1.6rem;
            font-weight: 400;
        }
        svg{
            font-size: 2rem;
        }
        button{
            border: none;
            background-color: transparent;
            display: flex;
            align-items: center;
        }
    }

    >button{
        font-size: 1.4rem;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    @media (min-width:513px){
        width: 30.4rem;
        height: 46.2rem;
        padding: 2.4rem;
        gap: 1.5rem;
        >p{
            font-size: 2.4rem;
        }
        >span{
            font-size: 3.2rem;
        }
    }
`