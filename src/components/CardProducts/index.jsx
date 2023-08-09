import { Container } from "./style"
import { useAuth } from "../../hooks/auth"
import { FiChevronRight, FiPlus, FiMinus, FiHeart, FiEdit3 } from "react-icons/fi"
import { Button } from "../Button"
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";


export function CardProducts({ onClick, img,alt, name, preco, product_id}){
    const {user} = useAuth()
    const navigate = useNavigate()
        function handleClick(product_id){
            user.id == "1" ? navigate(`/edit/${product_id}`) : addFavorit(product_id)
        }

        async function addFavorit(product_id){
            await api.post(`/favorites/${product_id}`)
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
                user.id == "1" ? <button onClick={() => handleClick(product_id)}><FiEdit3 /></button> : <button onClick={() => handleClick(product_id)}><FiHeart /></button>
            }
            <img src={img} alt={alt} />
            <button onClick={onClick} className="details"><p>{name} <FiChevronRight /></p></button>
            <span>R$ {preco}</span>
            <div>
                <button><FiMinus /></button>
                <span>01</span>
                <button><FiPlus /></button>
            </div>
            { user.id == "1" ? <Button title="excluir" onClick={handleRemoveProduct} /> : <Button title="Incluir" />}
        </Container>

    )
}