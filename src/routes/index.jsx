import { BrowserRouter } from "react-router-dom"

import { useAuth } from "../hooks/auth"

import { AdminRoutes } from './admin.routes'
import { CustomerRoutes } from './customer.routes'
import { AuthRoutes } from './auth.routes'
import { useEffect } from "react"
import { api } from "../services/api"

export function Routes(){
    const { user, SignOut } = useAuth()

    useEffect(()=> {
        api.get('/users/validated').catch((error) => {
            if(error.response?.status === 401){
                SignOut()
            }
        })
    }, [])
    
    function AccessRoutes(){
        const { user } = useAuth()
    
        switch(user.role){
            case 'admin': return <AdminRoutes />;
            case 'customer': return <CustomerRoutes />;
            default: return <CustomerRoutes/>;
        }
    }

    return(
        <BrowserRouter>
            {user ? <AccessRoutes /> : <AuthRoutes />}
        </BrowserRouter>
    )
}