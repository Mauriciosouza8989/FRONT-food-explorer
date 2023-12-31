import { Routes, Route } from "react-router-dom"

import { Home } from "../pages/Home"
import { Details } from "../pages/Details"
import { New } from "../pages/New"
import { Edit } from "../pages/Edit"

export function AdminRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:product_id" element={<Details />} />
            <Route path="/new" element={<New />} />
            <Route path="/edit/:product_id" element={<Edit />} />

            <Route path="*" exact={true} element={<Home />} />
        </Routes>
    )
}