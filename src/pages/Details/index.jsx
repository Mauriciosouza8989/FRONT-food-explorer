import { Container, Main, Ingredient, Order, Button } from "./style"
import { Header } from "../../components/Header"
import { DesktopHeader } from "../../components/DesktopHeader"
import { Link, useParams } from "react-router-dom"
import { FiChevronLeft, FiPlus, FiMinus } from "react-icons/fi"
import { useState, useEffect } from "react"
import { Footer } from "../../components/Footer"
import { api } from "../../services/api"


export  function Details() {
   const [product, setProduct] = useState([])
   const [ingredients, setIngredients] = useState([])
   const [amount, setAmount] = useState(1)
   const params = useParams()
   
   
   useEffect(()=>{
      async function getProduct(){
         const response = await api.get(`/products/${params.product_id}`)
         setProduct(response.data)
      }
      
      getProduct()
   },[])  
   
   useEffect(() =>{
      async function getIngredients(){
         const response = await api.get(`/ingredients/${params.product_id}`)
         setIngredients(response.data)
      }
      
      getIngredients()
   },[])
   
   function incrementAmount(){
      setAmount(amount + 1)
   }
   
   function decrementAmount(){
      setAmount(amount - 1)
   }
   
   

  return (
    <Container>
        <Header />
        <DesktopHeader />

        <Main>
            <Link to="/" ><FiChevronLeft />Voltar</Link>
            <img src={`${api.defaults.baseURL}/files/${product.image}`} />
            <div>
               <h2>{product.name}</h2>
               <p>{product.description}</p>
               <div>
                  {
                     ingredients && ingredients.map((ingredient, i) =>(
                        <Ingredient key={i}>{ingredient.name}</Ingredient>
                     )) 

                  }
               </div>
               <Order>
                  <div>
                     <button onClick={decrementAmount}><FiMinus /></button>
                     <span>{amount}</span>
                     <button onClick={incrementAmount}><FiPlus /></button>
                  </div>
                  
                  <Button>
                     Incluir R$ {`${product.price}`}
                  </Button>
                     
               </Order>

            </div>
            
        </Main>
        <Footer />
    </Container>
  )
}

