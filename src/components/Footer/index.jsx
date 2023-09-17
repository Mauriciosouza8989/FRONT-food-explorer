import { Container } from "./style"
import { Title } from "../Title"
import { FaThemeco } from "react-icons/fa";


export function Footer(){
    return(
        <Container>
            <div>
                <FaThemeco /> <h1>food explorer</h1>
            </div>
            <p>© 2023 - Todos os direitos reservados.</p>
        </Container>
    )
}