import { Container, Form} from "./style"
import { Header } from "../../components/Header"
import { DesktopHeader } from "../../components/DesktopHeader"
import { Footer } from "../../components/Footer"
import { Link, useNavigate, useParams} from "react-router-dom"
import { FiChevronLeft,FiShare, FiChevronDown } from "react-icons/fi"
import { Input } from "../../components/Input"
import { TextArea } from "../../components/TextArea"
import { Tags } from "../../components/Tags"
import { useState, useEffect } from "react"
import { api } from "../../services/api"


export function Edit(){
    const [name, setName] = useState("")
    const [ingredients, setIngredients] = useState([])
    const [oldIngredients, setOldIngredients] = useState([])
    const [newIngredient, setNewIngredient] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")
    const [image, setImage] = useState(null)
    const [ product, setProduct] = useState([])

    const params = useParams()


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

    async function handleUpdateProduct(){
        const data = new FormData()
        data.append("image", image)
        data.append("name", name)
        data.append("description", description)
        data.append("category", category)
        data.append("price", price)
        data.append("ingredients", ingredients)
        if(!image){
            return alert("Por favor escolha uma imagem!")
        }
        
        if(!name || !description || !category || !price || !ingredients){
            return alert("Preencha todos os campos")
        }
        
        if(newIngredient){
            return alert("O campo de adicionar ingrediente precisa estar vazio!")
        }
        
        try{
            await api.put(`/products/${params.product_id}`,data, {
                headers: {
                    "Content-Type": `multipart/form-data`
                }
            })
            navigate("/")
            alert("Produto atualizado com sucesso!")
        }catch(e){
            if(e.response){
                alert(e.response.data.message)
            }
        }
    }

    async function handleRemoveProduct(){
        const deleteConfirm = confirm("Tem certeza que deseja excluir este produto?")
        if(deleteConfirm){

            try{
                await api.delete(`/products/${params.product_id}`)
                alert("Produto excluido com sucesso!")
                navigate("/")
            }catch(e){
                if(e.response){
                    alert(e.response.data.message)
                }
            }
        }
    }

    useEffect(()=>{
        async function getProduct(){
           const response = await api.get(`/products/${params.product_id}`)
           setProduct(response.data)
           setName(response.data.name)
           setDescription(response.data.description)
           setCategory(response.data.category)
           setPrice(response.data.price)

        }
        
        getProduct()
     },[]) 

     useEffect(() =>{
        async function getIngredients(){
           const response = await api.get(`/ingredients/${params.product_id}`)
           setOldIngredients(response.data)
                oldIngredients.map(item => (
                setIngredients(prevState => [...prevState, item.name]))
           )
        }
        getIngredients()
    },[])

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
                        <Input value={name} onChange={e => setName(e.target.value)} type="text" id="nome" placeholder="Ex: Salada Ceasar" />
                    </div>
                    <div className="category">
                        <p>Categoria</p>
                        <div>
                            <FiChevronDown/>
                            <select value={product.category || category} onChange={e => setCategory(e.target.value)}>
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
                                onChange={e => setNewIngredient(e.target.value)} 
                                onClick={handleAddIngredient}
                            />
                        </div>
                    </div>
                    <Input value={price} onChange={e => setPrice(e.target.value)} type="number" id="preco" placeholder="R$00,00" label="Preço" />
                </div> 
                
                <TextArea value={description} onChange={e => setDescription(e.target.value)}  placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" label="Descrição" />
                <div className="button">
                    <button type="button" onClick={handleRemoveProduct}>Excluir prato</button>
                    <button type="button" onClick={()=> handleUpdateProduct()}>Salvar alterações</button>
                </div>
            
            </Form>
            
            <Footer />
        </Container>
    )
}