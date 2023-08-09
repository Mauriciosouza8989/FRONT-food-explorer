import { styled } from "styled-components";

export const Container = styled.div`
    display: grid;
    gap: 4rem;
    position: relative;
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
    width: 100vw;
    height: 100%;
    padding: 1.6rem;
    font-family: "Popins", sans-serif;

    >h2{
        font-size: 1.8rem;
        font-weight: 300;
        margin-bottom: 2rem;
        letter-spacing: 1px;
    }

    @media (min-width:880px){
        padding: 12.4rem;
    }

`
export const Presentation = styled.div`
    width: 100%;
    height: 11rem;
    border-radius: .5rem;
    background-color: ${({theme})=> theme.COLORS.DARK_600};
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 6.2rem;
    position: relative;


    >img{
        width: 40%;
        height: auto;
        position: absolute;
        left: -1.8rem;
        bottom: -.6rem;
        
    }
    >div{
        max-width: 64%;
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
        position: relative;
        left: 36%;
        >h2{
            font-weight: 400;
            font-size: 2rem;
            color: ${({theme})=> theme.COLORS.LIGHT_300};
    
        }
        >p{
            max-width: 90%;
            font-size: 1.3rem;
            color: ${({theme})=> theme.COLORS.LIGHT_500};

        }
    }

    @media (min-width:650px){
        height: 16rem;
        >div{
            left: 38%;
            >h2{
                font-size: 4rem;
            }
            >p{
                max-width: 90%;
                font-size: 1.6rem;
            }
            
        }
    }

    @media (min-width:880px) {

        >div{
            >h2{
                font-size: 4rem;
            }
            >p{
                font-size: 1.6rem;
            }
            
        }
        
    }

    @media (min-width:1080px){
        height: 26rem;
        img{
            width: 50%;
            height: auto;
            left: -10rem;
            bottom: -1rem;
        }

        >div{
            left: 45%;
        }
    }

    
`
export const Products = styled.div`
    max-width: 100%;
    margin-bottom: 2.4rem;
    display: flex;
    overflow-x: auto;
    gap: 2.7rem;
    @media (min-width:880px){
        flex: 1;
    }
    
`