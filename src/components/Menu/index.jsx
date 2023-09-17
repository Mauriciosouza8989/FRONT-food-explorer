import { Container, Header, Main, Input } from "./style"
import { FiX, FiSearch } from "react-icons/fi"
import { Footer } from "../Footer"
import { ButtonText } from "../ButtonText"
import { Button } from "../Button"
import { Link } from "react-router-dom"

import { useAuth } from "../../hooks/auth"


export function Menu({onClick}) {  
        const { SignOut } = useAuth()
        const { user } = useAuth()

        return(
            <Container>
                <Header>
                    <ButtonText title={<FiX />} onClick={onClick}/>
                </Header>
                <Main>
                    <Input>
                        <FiSearch />
                        <input placeholder="Busque por pratos ou ingredientes"/>
                    </Input>
                    {
                        user.role == "admin" ? <>
                            <Link to="/new" type="button" >Novo prato</Link>
                            <Button onClick={SignOut} title="Sair" />
                        </>
                        :<Button onClick={SignOut} title="Sair" />
                    }
                </Main>
                <Footer/>
            </Container>
        )

}