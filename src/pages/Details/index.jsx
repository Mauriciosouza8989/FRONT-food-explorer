import { Container, Main, Ingredient, Order, Button } from "./style"
import { Header } from "../../components/Header"
import { DesktopHeader } from "../../components/DesktopHeader"
import { Link, useParams, useNavigate } from "react-router-dom"
import { FiChevronLeft, FiPlus, FiMinus } from "react-icons/fi"
import { useState, useEffect } from "react"
import { Footer } from "../../components/Footer"
import { api } from "../../services/api"
import { useAuth } from "../../hooks/auth"



export  function Details() {
   const [product, setProduct] = useState([])
   const [ingredients, setIngredients] = useState([])
   const [amount, setAmount] = useState(1)
   const params = useParams()

   const { user } = useAuth()

   
   
   
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
      if(amount >= 20){
         return
      }
      setAmount(amount + 1)
   }
   
   function decrementAmount(){
      if(amount <= 1){
         return
      }
      setAmount(amount - 1)
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
                  {
                     user.id != "1" &&
                     <div>
                        <button onClick={decrementAmount}><FiMinus /></button>
                        <span>{amount}</span>
                        <button onClick={incrementAmount}><FiPlus /></button>
                     </div>
}
                  {
                     user.id == "1" ? <Button onClick={handleRemoveProduct}>Excluir produto</Button> : <Button>Incluir R$ {`${(product.price * amount).toFixed(2)}`} </Button>

                  }
                     
               </Order>

            </div>
            
        </Main>
        <Footer />
    </Container>
  )
}

