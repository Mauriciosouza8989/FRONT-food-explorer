import { Container, Form} from "./style"
import { Header } from "../../components/Header"
import { DesktopHeader } from "../../components/DesktopHeader"
import { Footer } from "../../components/Footer"
import { Link, useNavigate } from "react-router-dom"
import { FiChevronLeft,FiShare, FiChevronDown } from "react-icons/fi"
import { Input } from "../../components/Input"
import { TextArea } from "../../components/TextArea"
import { Button } from "../../components/Button"
import { Tags } from "../../components/Tags"
import { useState } from "react"
import { api } from "../../services/api"

export function New(){
    const [ingredients, setIngredients] = useState([])
    const [newIngredient, setNewIngredient] = useState("")
    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")
    const [image, setImage] = useState(null)


    const navigate = useNavigate()

    function handleAddIngredient(){
        if(!newIngredient){
            return
        }
        setIngredients(prevState => [...prevState, newIngredient])
        setNewIngredient("")
    }
    function handleRemoveIngredient(deleted){
        setIngredients(prevState => prevState.filter(name => name !== deleted))
    }

    async function handleCreateProduct(){
        const data = new FormData()
        data.append("image", image)
        data.append("name", name)
        data.append("description", description)
        data.append("category", category)
        data.append("price", price)
        data.append("ingredients", ingredients)
        if(newIngredient){
            return alert("O campo de adicionar produto precisa estar vazio!")
        }
        if(!name || !description || !category || !price || !ingredients || !image){
            return alert("Preencha todos os campos")
        }
        try{
            await api.post("/products",data, {
                headers: {
                    "Content-Type": `multipart/form-data`
                }
            })
            alert("Produto criado com sucesso!")
            navigate("/")
        }catch(e){
            console.log("Error: " + e.message)
        }
    }

    return(
        <Container>
            <Header />
            <DesktopHeader />
            <Form>
                <Link to="/" ><FiChevronLeft />Voltar</Link>
                <h2>Novo prato</h2>
                <div className="firstRow">
                    <div className="image">
                        <p>Imagem do prato</p>
                        <Input onChange={e => setImage(e.target.files[0])} type="file" className="imagem" id="imagem" name="image" placeholder="adicione a sua imagem" label="Imagem do prato" icon={<FiShare />}/>
                    </div>
                    <div className="name">
                        <p>Nome</p>
                        <Input onChange={e => setName(e.target.value)} type="text" id="nome" placeholder="Ex: Salada Ceasar" />
                    </div>
                    <div className="category">
                        <p>Categoria</p>
                        <div>
                            <FiChevronDown/>
                            <select onChange={e => setCategory(e.target.value)}>
                                <option value="">Categoria</option>
                                <option value="Refeicao">Refeicao</option>
                                <option value="Sobremesa">Sobremesa</option>
                                <option value="Bebidas">Bebida</option>
                            </select>
                        </div>
                    </div>
                </div>
                
                <div className="secondRow">
                    <div>
                        <p>Ingredientes</p>
                        <div>
                            {
                                ingredients.map((name, i) => (
                                    <Tags 
                                    key={String(i)}
                                        value={name}
                                        onClick={() => handleRemoveIngredient(name)}
                                    />
                                ))
                            }

                            <Tags 
                                isNew
                                placeholder="adicionar"
                                value={newIngredient}
                                onChange={e => setNewIngredient
                                    (e.target.value)} 
                                onClick={handleAddIngredient}
                            />
                        </div>
                    </div>
                        <Input onChange={e => setPrice(e.target.value)} type="number" id="preco" placeholder="R$00.00" label="Preço" />
                </div> 
                
                <TextArea onChange={e => setDescription(e.target.value)}  placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" label="Descrição" />
                <div className="button">
                    <Button onClick={handleCreateProduct} title="Salvar alterações"/>
                </div>
            
            </Form>
            <Footer />
        </Container>
    )
}
