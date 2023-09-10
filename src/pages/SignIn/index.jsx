import { Container } from "./style"
import { Input } from "../../components/Input"
import { Form } from "../../components/Form"
import { Button } from "../../components/Button"
import { Link } from "react-router-dom"
import { Title } from "../../components/Title"

import { useState } from "react"

import { useAuth } from "../../hooks/auth"

export function SignIn(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {signIn} = useAuth()
  

    function handleSignIn(){
        try{
            signIn({email, password})
        }
        catch(err){
            alert(err.response.data.msg)
        }
        return
    }

    return(
        <Container>
            <Title size={43}/>
            <Form title="Fça login">
                <Input 
                    type="email" 
                    placeholder="exemplo:exemplo@exemplo.com" 
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
                     !email || password.length<6 ? <Button title="Entrar" disabled/> : <Button title="Entrar" onClick={handleSignIn}/>

                }
                <Link to="/register">Criar conta</Link>
            </Form>
        </Container>
        
    )
}
