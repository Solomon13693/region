import axios from "../app/axios";

const getWallet = async (token) => {
    const response = await axios.get("/user/profile", {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

const getDeposits = async (token) => {
    const response = await axios.get("/user/deposits", {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

const Deposit = async (payload) => {
    const response = await axios.post('/user/investments', payload?.values, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            Authorization: `Bearer ${payload?.token}`,
        },
    });
    return response.data;
};

const Withdraw = async (payload) => {
    const response = await axios.post('/user/withdraw', payload?.values, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            Authorization: `Bearer ${payload?.token}`,
        },
    });
    return response.data;
};

const DepositRequest = async (payload) => {
    const response = await axios.post('/user/deposit', payload?.values, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            Authorization: `Bearer ${payload?.token}`,
        },
    });
    return response.data;
};

const getWithdrawal = async (token) => {
    const response = await axios.get("/user/withdraw", {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};


const userService = {
    Deposit,
    getWallet,
    getDeposits,
    Withdraw,
    getWithdrawal,
    DepositRequest
};

export default userService;