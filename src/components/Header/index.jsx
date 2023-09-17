import { FiMenu } from "react-icons/fi"
import { Container, Button } from "./style"
import { Title } from "../Title"
import { Cart } from "../Cart"
import { Menu } from "../Menu"
import { useState } from "react"
import { useAuth } from "../../hooks/auth"
import { useNavigate } from "react-router-dom"


export function Header(){
    const [menuOn, setMenuOn] = useState(false)
    const { user } = useAuth()

    const navigate = useNavigate()

    function handleMenuOn(){
        setMenuOn(true)
    }
    function handleMenuOff(){
        setMenuOn(false)
    }
    function home(){
        return navigate("/")
    }

    return(
        <Container className="MobileHeader">
            {
                menuOn ? <Menu onClick={handleMenuOff}/>: null
            }
            
            <Button >
                <FiMenu onClick={handleMenuOn}/>
            </Button>
            <Title size={30} onClick={home}/>
            {
                user.role != "admin" && <Cart />
            }
            
        </Container>
    )
}