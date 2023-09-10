import { createContext, useContext, useState, useEffect } from "react"

const AuthContext = createContext({})
import { api } from "../services/api"

function AuthProvider({children}){
    const [ data, setData ] = useState({})
    async function signIn({email, password}){
        try{
            const response = await api.post("/sessions", {email, password})
            const {user, token} = response.data

            localStorage.setItem("@food_explorer:token", token)
            localStorage.setItem("@food_explorer:user", JSON.stringify(user))

            api.defaults.headers.common["authorization"] = `Bearer ${token}`
            setData({user, token})

            }catch(error){
                if(error.response){
                    alert(error.response.data.message)
                }else{
                    alert(error)
                }
            }
    }

    function SignOut(){
        localStorage.removeItem("@food_explorer:token")
        localStorage.removeItem("@food_explorer:user")
        setData({})
    }

    useEffect(()=>{
        const token = localStorage.getItem("@food_explorer:token")
        const user = localStorage.getItem("@food_explorer:user")
        if(token && user) {
            api.defaults.headers.common["authorization"] = `Bearer ${token}`
        }

        setData({
            token,
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
