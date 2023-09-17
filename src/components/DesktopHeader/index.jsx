import { FiSearch, FiLogOut } from "react-icons/fi"
import { Container, Search, Button } from "./style"
import { Title } from "../Title"
import { ButtonText } from "../ButtonText"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/auth"
import { useState } from "react"




export function DesktopHeader({onChange}){

        const { user } = useAuth()

        const navigate = useNavigate()
        const [cart, setCart] = useState()

        function handleSignOut(){
            const ensure = confirm("Tem certeza que deseja sair da sua conta?")
            if (ensure){
                navigate("/")
                localStorage.removeItem("@food_explorer:token")
                localStorage.removeItem("@food_explorer:user")
                navigate("/")
                location.reload()
            }else{
                return
            }
            
        }
        function newPlate(){
            return navigate("/new")
        }
        function home(){
            return navigate("/")
        }

    return(
        <Container className="DesktopHeader">
            <Title size={30} onClick={home}/>
            <Search>
                <FiSearch />
                <input onChange={onChange} type="text" placeholder="Busque por pratos ou ingredientes"/>
            </Search>
            {

               user.role == "admin" ? <Button onClick={newPlate}>Novo prato</Button> : <Button><img src="https://i.ibb.co/2g3sXfL/Receipt.png" /><p>pedidos <span>({user.cart||0})</span></p></Button>
            }

            <ButtonText onClick={handleSignOut} title={<FiLogOut />} />
                

        </Container>
    )
}