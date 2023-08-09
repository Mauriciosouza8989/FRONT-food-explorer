import { Container } from "./style"

export function Form({title, placeholder, children}){
    return(
        <Container placeholder={placeholder}>
            <h2>{title}</h2>
            {children}
        </Container>
    )
}
