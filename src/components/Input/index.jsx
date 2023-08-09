import { Container } from "./style";
import { Label, Inputs } from "./style";


export function Input({value, onChange, icon, label, id, placeholder, type, className}){
    return(
        <Container>
            <Label className={className} htmlFor={id}>{icon}{label}</Label>
            <Inputs value={value} onChange={onChange} type={type} id={id} placeholder={placeholder}/>
        </Container>
    )
    
}