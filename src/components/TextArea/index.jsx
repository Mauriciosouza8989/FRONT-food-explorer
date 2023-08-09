import { Container, Label, Input } from "./style"

export function TextArea({value, label, id, placeholder, onChange}){
    return(
        <Container>
            <Label htmlFor={id}>{label}</Label>
            <Input value={value} onChange={onChange} id={id} placeholder={placeholder}/>
        </Container>
    )
}