import { Form } from "./style"
import { Input } from "../Input"
import { TextArea } from "../TextArea"
import { Button } from "../Button"
import { FiChevronLeft,FiShare, FiChevronDown } from "react-icons/fi"
import { Link } from "react-router-dom"
import { Tags } from "../Tags"





export function FormPlate({name,title}){
    return(
        <Form>
            <Link to="/" ><FiChevronLeft />Voltar</Link>
            <h2>{title}</h2>
            <Input type="file" className="imagem" id="imagem" placeholder="adicione a sua imagem" label="Imagem do prato" icon={<FiShare />}/>
            <Input value={name} type="text" id="nome" placeholder="Ex: Salada Ceasar" label="Nome" />
            <div className="categoria">
                <p>Categoria</p>
                <div>
                    <FiChevronDown/>
                    <select>
                        <option value="Refeicao">Refeição</option>
                        <option value="Sobremesa">Sobremesa</option>
                        <option value="Bebida">Bebida</option>
                    </select>
                </div>
            </div>
            
            <div className="ingredients">
                <p>Ingredientes</p>
                <div >
                    <Tags 
                        value="Pão nan" 
                    />

                    <Tags 
                        isNew
                        placeholder="adicionar" 
                    />
                </div>
            </div> 
            
            <Input type="number" id="preco" placeholder="R$00,00" label="Preço" />
            <TextArea  placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" label="Descrição" />
            <Button title="Salvar alterações" disabled/>
           
        </Form>
    )
}