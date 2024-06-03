import { useSelector } from "react-redux"
import { useLocation, Outlet, Navigate } from "react-router-dom"

const ProtectedRoute = () => {

    const location = useLocation()

    const { token } = useSelector((state) => state.auth)

    return (
        <>

            { token
                ? <Outlet />
                : <Navigate to="/login" state={{ from: location }} replace={true} />}

        </>
    )
}

export default ProtectedRoute