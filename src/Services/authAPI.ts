import axiosClient from "./axiosClient";
import {
    LoginResult,
    LoginValues,
    RegisterValues,
    UpdateUser,
    UserUpdateValues,
    UserValues,
} from "Interface/auth";

const authAPI = {
    login: (values: LoginValues) => {
        return axiosClient.post<LoginResult>("api/auth/login", values);
    },
    registerUser: (values: RegisterValues) => {
        return axiosClient.post<UserValues>("api/auth/register", values);
    },
    getUserDetail: (id: string) => {
        return axiosClient.get<UserValues>(`api/users/${id}`);
    },
    updateUser: (values: UpdateUser) => {
        return axiosClient.put<any>(`api/users/${values.id}`, values.values);
    },
    uploadAvatar: (values: any) => {
        const formData = new FormData();

        for (const key in values) {
            formData.append(key, values[key]);
        }
        console.log(values);
        console.log(formData);
        return axiosClient.post<any>("api/users/upload-avatar", formData);
    },
};
export default authAPI;
