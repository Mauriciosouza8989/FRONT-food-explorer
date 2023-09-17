import { BrowserRouter } from "react-router-dom"

import { useAuth } from "../hooks/auth"

import { AdminRoutes } from './admin.routes'
import { CustomerRoutes } from './customer.routes'
import { AuthRoutes } from './auth.routes'

function AccessRoutes(){
    const { user } = useAuth()

    switch(user.role){
        case 'admin': return <AdminRoutes />;
        case 'customer': return <CustomerRoutes />;
        default: return <CustomerRoutes/>;
    }
}


export function Routes(){
    const { user } = useAuth()
    return(
        <BrowserRouter>
            {user ? <AccessRoutes /> : <AuthRoutes />}
        </BrowserRouter>
    )
}