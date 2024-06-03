import { setAnalytics, setConfig, setPlans } from "../slice/extraSlice";
import userService from "../../services/userService";


export const fetchWallet = () => async (dispatch, getState) => {

    const token = getState().auth.token;

    try {

        const response = await userService.getWallet(token);
        dispatch(setAnalytics(response));

    } catch (error) {
        console.error('Error fetching data:', error);
    }
    
};
