import { FiMenu } from "react-icons/fi"
import { Container, Button } from "./style"
import { Title } from "../Title"
import { Cart } from "../Cart"
import { Menu } from "../Menu"
import { useState } from "react"


export function Header(){
    const [menuOn, setMenuOn] = useState(false)
    function handleMenuOn(){
        setMenuOn(true)
    }
    function handleMenuOff(){
        setMenuOn(false)
    }

    return(
        <Container className="MobileHeader">
            {
                menuOn ? <Menu onClick={handleMenuOff}/>: null
            }
            <Button >
                <FiMenu onClick={handleMenuOn}/>
            </Button>
            <Title size={30}/>
            <Cart />
        </Container>
    )
}