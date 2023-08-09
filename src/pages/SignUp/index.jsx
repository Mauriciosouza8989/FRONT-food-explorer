import { Container } from "../SignIn/style"
import { Form } from "../../components/Form"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Link, useNavigate } from "react-router-dom"
import { Title } from "../../components/Title"
import { useState } from "react"

import { api } from "../../services/api"


export function SignUp(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    function handleSignUp(e) {
        e.preventDefault()
        if(!name || !email || !password){
            return alert("Preencha todos os campos!")
        }

        if(password.length < 6){
            return alert("A sua senha precisa ter pelomenos 6 caracteres!")
        }

        api.post("/users", {name, email, password})
        .then(()=> {
            navigate("/")
            alert("Usuário cadastrado com sucesso!")
        })
        .catch(err => {
            if(err.response){
                alert(err.response.data.message)
            }else{
                alert("Não foi possível cadastrar este usuário!")
            }
        })
    }

    return(
        <Container>
            <Title size={43}/>
            <Form title="Crie sua conta">
                <Input
                    type="text"
                    label="Seu nome"
                    placeholder="Ex: Maria da Silva"
                    id="name"
                    onChange={e => setName(e.target.value)}
                />
                <Input
                    type="email"
                    label="Email"
                    placeholder="Ex: exemplo@exemplo.com"
                    id="email"
                    onChange={e => setEmail(e.target.value)}
                />
                <Input
                    type="password"
                    label="Senha"
                    placeholder="No minimo 6 caracteres"
                    id="password"
                    onChange={e => setPassword(e.target.value)}
                />

                {
                    !name || !email || password.length<6 ? <Button disabled title="Criar conta" /> : <Button onClick={(e) => handleSignUp(e)} title="Criar conta" />
                }
                <Link to="/">Já tenho conta</Link>
            </Form>
        </Container>
    )
}