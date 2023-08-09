import { Container } from "./style"
import { useAuth } from "../../hooks/auth"
export function Title({size, onClick}){
    const {user} = useAuth()
    return(
        <Container onClick={onClick}>
            <div>
                <img 
                    src="https://i.ibb.co/2nRr84T/Polygon-1.png" 
                    alt="imagem de um poligono" 
                    width={size}
                    height={size}
                />
                <h1>food explorer</h1>
            </div>
            {
                user && user.id == "1" ? <span>admin</span> : ''
            }
        </Container>
    )
   
}