import { Container } from "./style";
import { useState } from "react";

export function Cart(){
    const [cart, setCart] = useState(0)
    
    function handleCart(){
        setCart(cart + 1)
    }
    

    return(
        <Container>
            <span onClick={handleCart}>{cart}</span>
            <img src="https://i.ibb.co/2g3sXfL/Receipt.png" alt="imagem de notinha de pedido" />
        </Container>
    )
}