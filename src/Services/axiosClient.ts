import axios, { AxiosError } from "axios";

const axiosClient = axios.create({
    baseURL: "https://airbnb.cybersoft.edu.vn",
    headers: {
        tokenByClass:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNzEiLCJIZXRIYW5TdHJpbmciOiIyOS8xMi8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NzIyNzIwMDAwMDAiLCJuYmYiOjE2NDU5ODEyMDAsImV4cCI6MTY3MjQxOTYwMH0.SZe3CJl1OkNH-0zfzqOV0CSC8WZ6q2hw64UykpCytT0",
    },
});

//request
axiosClient.interceptors.request.use((config) => {
    if (config.headers) {
        const accessToken = localStorage.getItem("token");
        if (accessToken) {
            config.headers.token = `${accessToken}`;
        }
    }
    return config;
});

//response
axiosClient.interceptors.response.use(
    (response: any) => {
        return response.data;
    },
    (error: AxiosError<{ content: string }>) => {
        return error.response?.data;
    },
);

export default axiosClient;
