import { Container, Main, Presentation, Products } from "./style"
import { Header } from "../../components/Header"
import { DesktopHeader } from "../../components/DesktopHeader"
import { CardProducts } from "../../components/CardProducts"
import { Footer } from "../../components/Footer"
import { api } from "../../services/api"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export function Home(){
    const navigate = useNavigate()
    const [ products, setProducts] = useState([])
    

    const [search, setSearch] = useState("")

    function handleDetails(id){
        navigate(`/details/${id}`)
    }
    useEffect(() =>{
        async function fetchProducts(){
            const response = await api.get(`/products?name=${search}`)
            setProducts(response.data)
            
        }
       
        fetchProducts()
    },[search])
    return(
        <Container>
             
            <Header />
                <DesktopHeader onChange={ e => setSearch(e.target.value)}/>
            <Main>
                {
                search.length == 0 &&
                <Presentation>
                    <img src="../../../src/assets/home.png" />
                    <div>
                        <h2>Sabores inigualáveis</h2>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
                    </div>
                </Presentation>
                }
                <h2>Refeições</h2>
                <Products>
                    {
                        products && products.map((product, i) =>
                            (product.category == "Refeicao" ? <div key={String(i)}><CardProducts product_id={product.id} onClick={()=> handleDetails(product.id)} img={`${api.defaults.baseURL}/files/${product.image}`} name={product.name} preco={product.price.toFixed(2).replace(".", ",")}/></div>: null )
                        )
                    }
                </Products>


                <h2>Sobremesas</h2>
                <Products>
                    {
                        products && products.map((product, i) =>
                            (product.category == "Sobremesa" ? <div key={String(i)}><CardProducts product_id={product.id} onClick={()=> handleDetails(product.id)} img={`${api.defaults.baseURL}/files/${product.image}`} name={product.name} preco={product.price.toFixed(2).replace(".", ",")}/></div>: null )
                        )
                    }
                </Products>

                <h2>Bebidas</h2>
                <Products>
                    {
                        products && products.map((product, i) =>
                            (product.category == "Bebidas" ? <div key={String(i)}><CardProducts product_id={product.id} onClick={()=> handleDetails(product.id)} img={`${api.defaults.baseURL}/files/${product.image}`}name={product.name}preco={product.price.toFixed(2).replace(".", ",")}/></div>: null )
                        )
                    }
                </Products>
                
            </Main>
            <Footer />
        </Container>
    )
}