import { Container, Loading } from "./style"
import { Input } from "../../components/Input"
import { Form } from "../../components/Form"
import { Link } from "react-router-dom"
import { Title } from "../../components/Title"
import { useRef } from "react"


import { useState } from "react"

import { useAuth } from "../../hooks/auth"

export function SignIn(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [buttonValue, setButtonValue] = useState("Entrar")
    const {signIn} = useAuth()
    const buttonLogin = useRef(null)
  

    function handleSignIn(e){
        e.preventDefault()
        buttonLogin.current.disabled = true
        setButtonValue(<Loading/>)

            signIn({email, password})
            .then(()=> {
                navigate("/")
            })
            .catch(err =>{
                buttonLogin.current.disabled = false
                setButtonValue("Entrar")
                alert(err.response.data.msg)
            })

        
    }

    return(
        <Container>
            <Title size={43}/>
            <Form title="Fça login">
                <Input 
                    type="email" 
                    placeholder="exemplo@exemplo.com"
                    label="E-mail" 
                    id="email" 
                    onChange={e => setEmail(e.target.value)}
                />
                <Input 
                    type="password" 
                    placeholder="no minimo 6 caracteres" 
                    label="Senha" 
                    id="password"
                    onChange={e => setPassword(e.target.value)}
                />
                {
                     !email || password.length<6 ? <button disabled>Entrar</button> : <button ref={buttonLogin} onClick={handleSignIn}>{buttonValue}</button>

                }
                <Link to="/register">Criar conta</Link>
            </Form>
        </Container>
        
    )
}
