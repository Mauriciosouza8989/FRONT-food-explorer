import { Container } from "./style";


export function Button({disabled, title, onClick}){
    return(
        <Container disabled={disabled} type="button" onClick={onClick}>
             {title} 
        </Container>
            
    )
}