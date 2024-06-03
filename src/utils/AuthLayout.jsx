import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Navigate, Outlet, useLocation } from "react-router-dom"

const AuthLayout = () => {

    const location = useLocation()
    
    const { token } = useSelector(
        (state) => state.auth)

    useEffect(() => {
        if(token) {
            <Navigate to="/login" state={{ from: location }} replace={true} />
        }
    }, [token, location])

    return <Outlet />


}

export default AuthLayout