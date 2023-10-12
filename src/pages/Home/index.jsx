import { Container, Main, Presentation, Products } from "./style"
import { Header } from "../../components/Header"
import { DesktopHeader } from "../../components/DesktopHeader"
import { CardProducts } from "../../components/CardProducts"
import { Footer } from "../../components/Footer"
import { api } from "../../services/api"
import { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { FiChevronLeft, FiChevronRight, FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";



export function Home(){
    const navigate = useNavigate()
    const [ products, setProducts] = useState([])
    const [favorites, setFavorites] = useState([])

    const [search, setSearch] = useState("")

    const meals = useRef()
    const dessert = useRef()
    const drinks = useRef()

    function handleDetails(id){
        navigate(`/details/${id}`)
    }

    function handleLeftClick(ref){

        if(ref == "meals"){
            meals.current.scrollLeft -= meals.current.offsetWidth
        }
        if(ref == "dessert"){
            dessert.current.scrollLeft -= dessert.current.offsetWidth
        }
        if(ref == "drinks"){
            drinks.current.scrollLeft -= drinks.current.offsetWidth
        }
    }

    function handleRightClick(ref){
        if(ref == "meals"){
            meals.current.scrollLeft += meals.current.offsetWidth
        }
        if(ref == "dessert"){
            dessert.current.scrollLeft += dessert.current.offsetWidth
        }
        if(ref == "drinks"){
            drinks.current.scrollLeft += drinks.current.offsetWidth
        }
    }

    useEffect(() =>{
        async function fetchProducts(){
            const response = await api.get(`/products?name=${search}`)
            setProducts(response.data)
        }
       
        fetchProducts()
    },[search])

        
        useEffect(()=>{
            async function getFavorites(){
                const response = await api.get(`/favorites`)
                alert(favorites)
                response.data.map(fav => setFavorites(prevState => [...prevState, fav.product_id]))
            }
        getFavorites()
    },[])
    
    return(
        <Container>
            <Header />
                <DesktopHeader onChange={ e => setSearch(e.target.value)}/>
            <Main>
                {
                search.length == 0 &&
                <Presentation>
                    <img src="https://i.ibb.co/m08DTyW/home.png" />
                    <div>
                        <h2>Sabores inigualáveis</h2>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
                    </div>
                </Presentation>
                }

                <div>
                
                    <h2>Refeições</h2>
                    <section>
                        <button onClick={() => handleLeftClick("meals")} className="scroll-left"><FiChevronLeft/></button>
                        <Products ref={meals}>
                            {

                                products && products.map((product, i) =>
                                    ( 
                                    product.category == "Refeicao" ? 
                                    <div key={String(i)}><CardProducts product_id={product.id} 
                                    onClick={()=> handleDetails(product.id)} img={`${api.defaults.baseURL}/files/${product.image}`} 
                                    name={product.name} preco={product.price.toFixed(2).replace(".", ",")}
                                    heart={favorites.includes(product.id) ? <FaHeart/> : <FiHeart/>}
                                    /></div>: null )
                                )
                            }

                        </Products>
                        <button onClick={() => handleRightClick("meals")} className="scroll-right"><FiChevronRight/></button>
                    </section>

                        <h2>Sobremesas</h2>
                    <section>
                        <button onClick={() => handleLeftClick("dessert")} className="scroll-left"><FiChevronLeft/></button>
                        <Products ref={dessert}>

                            {
                                products && products.map((product, i) =>
                                    (product.category == "Sobremesa" ? <div key={String(i)}>
                                        <CardProducts product_id={product.id} onClick={()=> handleDetails(product.id)} 
                                        img={`${api.defaults.baseURL}/files/${product.image}`} name={product.name} 
                                        preco={product.price.toFixed(2).replace(".", ",")} 
                                        heart={favorites.includes(product.id) ? <FaHeart/> : <FiHeart/>}/>
                                        </div>: null )
                                )
                            }

                        </Products>
                        <button onClick={() => handleRightClick("dessert")} className="scroll-right"><FiChevronRight/></button>
                    </section>
                    
                        <h2>Bebidas</h2>
                    <section>
                        <button onClick={() => handleLeftClick("drinks")} className="scroll-left"><FiChevronLeft/></button>
                        <Products ref={drinks}>

                            {
                                products && products.map((product, i) =>
                                    (product.category == "Bebidas" ? <div key={String(i)}>
                                        <CardProducts product_id={product.id} onClick={()=> handleDetails(product.id)} 
                                        img={`${api.defaults.baseURL}/files/${product.image}`}name={product.name}
                                        preco={product.price.toFixed(2).replace(".", ",")} 
                                        heart={favorites.includes(product.id) ? <FaHeart/> : <FiHeart/>}/>

                                        </div>: null )
                                )
                            }

                        </Products>
                        <button onClick={() => handleRightClick("drinks")} className="scroll-right" ><FiChevronRight/></button>
                    </section>
                </div>
            </Main>
            <Footer />
        </Container>
    )
}
