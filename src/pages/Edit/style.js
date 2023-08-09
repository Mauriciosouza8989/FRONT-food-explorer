import { styled } from "styled-components"

export const Container = styled.div`
    width: 100vw;
    height: auto;
    display: flex;
    flex-direction: column;
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
    .firstRow{
      
    }

    >.secondRow{
        display: grid;
        grid-template-columns: 4fr 1fr;
        gap: 1.6rem;
        >div{
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            gap: 1.6rem;
            >p{
                max-width: 100%;
                font-family: Poppins, sans-serif;
                color: ${({ theme })=> theme.COLORS.LIGHT_400};
                font-size: 1.6rem;
            }
            >div{
                background-color: ${({ theme })=> theme.COLORS.DARK_900};
                height: auto;
                border-radius: 0.8rem;
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                height: 4.8rem;
            }
        }
    }
    >div{
        display: grid;
       
        >.categoria{
          
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
        
    }
    
}
    .button{
        width: max-content;
        display: flex;
        justify-self: flex-end;
        gap: 3.2rem;
        >button:nth-child(1){
            background-color: ${({ theme })=> theme.COLORS.DARK_900};

        }
        >button{
            width: max-content;
        }
    }
   

    @media(min-width: 680px) {
        display: grid;
        padding: 2rem 10.2rem;
    }

    @media(min-width: 820px) {

        >.firstRow{
            display: grid;
            grid-template-columns: 2fr 4fr 3fr;
            gap: 1.6rem;
            >.name{
                label{
                    display: none;
                }
            }
            div{
                display: flex;
                gap: 1.6rem;
                flex-direction: column;
                >p{
                    max-width: 100%;
                    font-family: Poppins, sans-serif;
                    color: ${({ theme })=> theme.COLORS.LIGHT_400};
                    font-size: 1.6rem;
                }
            }
        }
    }
`
