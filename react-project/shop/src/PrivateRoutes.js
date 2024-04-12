import { Outlet, Navigate } from "react-router-dom";
export const PrivateRouter = () => { 
    const auth = 'private'
    return (
        auth == 'dew' ? <Outlet /> : <Navigate to={'/login'} />
     )
}