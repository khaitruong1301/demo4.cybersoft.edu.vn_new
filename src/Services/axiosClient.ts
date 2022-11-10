import axios, { AxiosError } from "axios";

const axiosClient = axios.create({
    baseURL: "https://airbnb.cybersoft.edu.vn",
    headers: {
        tokenByClass:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAwMSIsIkhldEhhblN0cmluZyI6IjMwLzA5LzIwMzEiLCJIZXRIYW5UaW1lIjoiMTk0ODQ5MjgwMDAwMCIsIm5iZiI6MTYwMTIyNjAwMCwiZXhwIjoxOTQ4NjQwNDAwfQ.4l-eTzlgVnFczfvc2Or7BNPOcaesY3Kwc8RoNm-o-6M",
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
