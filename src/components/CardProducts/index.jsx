import { Container } from "./style"
import { useAuth } from "../../hooks/auth"
import { FiChevronRight, FiPlus, FiMinus, FiHeart, FiEdit3 } from "react-icons/fi"
import { Button } from "../Button"
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";




export function CardProducts({ onClick, img, alt, name, preco, product_id, heart}){
    const {user} = useAuth()
    const navigate = useNavigate()

        async function addFavorit(product_id){
            await api.post(`/favorites/${product_id}`)
            return location.reload()
        }
        function handleClick(product_id){
            user.role == "admin" ? navigate(`/edit/${product_id}`) : addFavorit(product_id)
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

        

    return(
        <Container>
            {
                user.role == "admin" ? <button onClick={() => handleClick(product_id)}><FiEdit3 />
                </button> : <button onClick={() => addFavorit(product_id)}>{heart}</button>
            }
            <img src={img} alt={alt} />
            <button onClick={onClick} className="details"><p>{name} <FiChevronRight /></p></button>
            <span>R$ {preco}</span>
            <div>
                <button><FiMinus /></button>
                <span>01</span>
                <button><FiPlus /></button>
            </div>
            { user.role == "admin" ? <Button title="excluir" onClick={handleRemoveProduct} /> : <Button title="Incluir" />}
        </Container>

    )
}