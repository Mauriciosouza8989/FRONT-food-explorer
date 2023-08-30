import { styled } from "styled-components";

export const Container = styled.div`
    display: grid;
    gap: 3rem;
    >.DesktopHeader{
        display: none;
    }
    
    section{
        width: 100%;
        display: flex;
        position: relative;
        z-index: 8;
        margin-bottom: 5rem;
        
        >div::-webkit-scrollbar{
        display: none;
        overflow-y: hidden;
        
    }

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
    
    >div>section>.scroll-right, >div>section>.scroll-left{
            display: none;
    }

    font-family: "Popins", sans-serif;

    >div>h2{
        font-size: 1.8rem;
        font-weight: 300;
        margin-bottom: 2rem;
        letter-spacing: 1px;
        margin-left: 1rem;
    }

   

    @media (min-width:880px){
        padding: 12.4rem;
    }
    @media (min-width:1100px){

        >div>section>.scroll-left, >div>section>.scroll-right {
            height: 95%;
            width: 15rem;
            display: inline-block;

            background-color: transparent;
            border: none;
            position: absolute;
            top: 0;
            z-index: 8;
            border-radius: 5px 0 0 5px;
            
                >svg{
                    font-size: 5rem;
                }
            
            }
            >div>section>.scroll-right{
                right: 0;
                display: grid;
                align-items:center;
                justify-content: end;
                background: linear-gradient(to left, black,  rgba(0,0,0,.5), transparent 99%  );
                
            }
            >div>section>.scroll-left{
                display: grid;
                align-items:center;
                background: linear-gradient(to right, black,  rgba(0,0,0,.5), transparent 99% );
            }
    }

`
export const Presentation = styled.div`
    width: 90%;
    margin: auto;
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
        object-fit: cover;
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
        width: 100%;

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
        width: 100%;
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
    max-width: 100vw;
    margin-bottom: 2.4rem;
    display: flex;
    overflow-x: auto;
    gap: 2.7rem;
    scroll-behavior: smooth;
   
    
    @media (min-width:880px){
        flex: 1;
    }
    
`
