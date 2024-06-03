import axios from "../app/axios";


const Login = async (payload) => {
    const response = await axios.post("/auth/login", payload);
    return response.data;
};

const updateUser = async (payload) => {
    console.log(payload);
    const response = await axios.post('/user/update/profile', payload?.values, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            Authorization: `Bearer ${payload?.token}`,
        },
    });

    return response.data;
};

const updatePassword = async (payload) => {
    const response = await axios.post('/user/update/password', payload?.values, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            Authorization: `Bearer ${payload?.token}`,
        },
    });

    return response.data;
};

// UPDATE IMAGE

const updateProfileImage = async (payload) => {
    const response = await axios.post('/user/upload/avatar', payload.image, {
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${payload.token}`,
        },
    });
    return response.data;
};


const authService = {
    Login,
    updateProfileImage,
    updateUser,
    updatePassword
};

export default authService;