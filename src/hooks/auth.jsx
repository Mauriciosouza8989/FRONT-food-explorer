import { createContext, useContext, useState, useEffect } from "react"

const AuthContext = createContext({})
import { api } from "../services/api"

function AuthProvider({children}){
    const [ data, setData ] = useState({})
    async function signIn({email, password}){
        try{
            const response = await api.post("/sessions", {email, password}, {withCredentials: true});
            const { user } = response.data

            localStorage.setItem("@food_explorer:user", JSON.stringify(user))

            setData({user})

            }catch(error){
                if(error.response){
                    alert(error.response.data.message)
                }else{
                    alert("Não foi possível logar!")
                }
            }
    }

    function SignOut(){
        localStorage.removeItem("@food_explorer:user")
        setData({})
        return
    }

    useEffect(()=>{
        const user = localStorage.getItem("@food_explorer:user")
        if(user) {
        }

        setData({
            user: JSON.parse(user)
        })
    },[])

    return(
        <AuthContext.Provider value={{signIn, user: data.user, SignOut}}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext)
    return context
}




export { AuthProvider, useAuth }
