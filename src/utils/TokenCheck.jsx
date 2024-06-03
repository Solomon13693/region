import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { Logout } from "../features/auth/authSlice";

const IsTokenExpired = () => {

    const dispatch = useDispatch();

    useEffect(() => {

        const token = Cookies.get("token");
        const expirationDate = Cookies.get("token_exp");

        if (!token || !expirationDate) {
            dispatch(Logout());
            return;
        }

        const interval = setInterval(() => {
            const currentTime = Math.floor(Date.now() / 1000);
            if (currentTime >= expirationDate) {
                clearInterval(interval);
                dispatch(Logout());
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [dispatch]);

    return null;
};

export default IsTokenExpired;
