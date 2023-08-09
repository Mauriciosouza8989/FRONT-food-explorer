import { styled } from "styled-components"

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    >.DesktopHeader{
            display: none;
    }

    @media (min-width:1100px){
        >.DesktopHeader{
            display: flex;
        }
        >.MobileHeader{
            display: none;
        }
    }
`
export const Main = styled.main`
    width: 100%;
    height: 100%;
    padding: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;
    font-family: 'Poppins', sans-serif;
    position: relative;

    >a{
        position: absolute;
        top: 3rem;
        left: 3rem;
        max-width: 100%;
        font-size: 2rem;
        display: flex;
        align-items: center;
        justify-content: flex-start;

        >svg{
            font-size: 3rem;
        }
    }

    img{
        width: 80%;
    }
    >div{
        margin-top: 1.6rem;
        display: flex;
        align-items: center;
        gap: 2.4rem;
        flex-direction: column;
        h2{
            font-size: 2.7rem;
            font-weight: 400;
        }
    
        p{
            text-align: center;
            font-size: 1.6rem;
            color: ${({theme})=> theme.COLORS.LIGHT_400}
        }
        >div{
            max-width: 100%;
            display: flex;
            flex-wrap: wrap;
            gap: 2.4rem;
            justify-content: space-around;
        }
    }

    @media(min-width:500px ){
        img{
            width: 40%;
        }
        >div{
            >div{
                justify-content: center;
                align-items: center;
            }
        }
    }
    @media(min-width:980px ){
        flex-direction: row;
        padding: 0 9rem;
        gap: 4.7rem;

        img{
            width: 30%;
        }
        >div{
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            >h2{
                font-size: 4rem;
            }
            p{
                font-size: 2.4rem;
                text-align: left;
            }
            

        }



    }


`

export const Ingredient = styled.span`
    padding: .8rem 1rem;
    background-color: ${({theme})=> theme.COLORS.DARK_1000};
    border-radius: .6rem;
    font-size: 1.4rem;
    font-weight: 300;

`
export const Order = styled.section`
    width: 100%;
    display: flex;
    padding: 4rem 0 0 0;
    justify-content: space-around;
    >div{
        display: flex;
        >span{
            font-size: 2.4rem;
            padding: 0 1.5rem;
        }
        button:nth-child(1),
        button:nth-child(3){
            display: flex;
            align-items: center;
            background-color: transparent;
            border: none;
            >svg{
                font-size:2.4rem;
            }
        }

    }

    @media(min-width:500px ){
        
       
        >div{
            max-width: 100%;
            
            
        }
    }

    @media(min-width:980px ){
        justify-content: flex-start;
        align-items: flex-start;

        >div{
            max-width: 29.5rem;
            justify-content: flex-start;

        }
        
    }
    

`
export const Button = styled.button`
    width: fit-content;
    margin-left: 1.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: .6rem;
    padding: 1rem 3rem;
    font-size: 1.4rem;
    background-color: ${({ theme })=> theme.COLORS.THINTS.TOMATO_100};
    color: ${({ theme })=> theme.COLORS.LIGHT_100};
    font-size: 1rem;
    line-height: 2.4rem;
    letter-spacing: 0.5px;
    >img{
        width: 2rem;
    }

    @media(min-width:980px ){
        max-width: 29rem;
        justify-content: flex-start;
    }
`