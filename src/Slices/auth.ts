import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    LoginResult,
    LoginValues,
    RegisterValues,
    UpdateUser,
    UserUpdateValues,
    UserValues,
} from "Interface/auth";
import authAPI from "Services/authAPI";

interface State {
    user: UserValues | null;
    isLoading: boolean;
    error?: string;
}
const initialState: State = {
    user: null || JSON.parse(localStorage.getItem("user") as string),
    isLoading: false,
    error: undefined,
};
export const login = createAsyncThunk(
    "auth/login",
    async (values: LoginValues) => {
        try {
            const loginResult = await authAPI.login(values);
            if (loginResult.user) return loginResult;
            else return null;
        } catch (error) {
            throw error;
        }
    },
);
export const registerUser = createAsyncThunk(
    "auth/registerUser",
    async (values: RegisterValues) => {
        try {
            const result = await authAPI.registerUser(values);
            return result;
        } catch (error) {
            throw error;
        }
    },
);

export const getUserDetail = createAsyncThunk(
    "auth/getUserDetail",
    async (id: string) => {
        try {
            const user = await authAPI.getUserDetail(id);
            return user;
        } catch (error) {
            throw error;
        }
    },
);

export const updateUser = createAsyncThunk(
    "auth/updateUser",
    async (values: UpdateUser) => {
        try {
            const result = await authAPI.updateUser(values);
            console.log(result);
            return result;
        } catch (error) {
            throw error;
        }
    },
);
export const uploadAvatar = createAsyncThunk(
    "auth/uploadAvatar",
    async (values: any) => {
        console.log(values);
        try {
            const result = await authAPI.uploadAvatar(values);
            console.log(result);
            return result;
        } catch (error) {
            throw error;
        }
    },
);
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        removeUser: (state, { payload }) => {
            state.user = payload;
        },
    },
    extraReducers(builder) {
        builder.addCase(login.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(login.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            if (payload) state.user = payload.user;
        });
        builder.addCase(login.rejected, (state, { error }) => {
            state.isLoading = false;
            state.error = error.message;
        });
        builder.addCase(registerUser.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(registerUser.fulfilled, (state, { payload }) => {
            state.isLoading = false;
        });
        builder.addCase(registerUser.rejected, (state, { error }) => {
            state.isLoading = false;
            state.error = error.message;
        });
        builder.addCase(getUserDetail.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getUserDetail.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.user = payload;
        });
        builder.addCase(getUserDetail.rejected, (state, { error }) => {
            state.isLoading = false;
            state.error = error.message;
        });
        builder.addCase(uploadAvatar.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(uploadAvatar.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.user = payload;
        });
        builder.addCase(uploadAvatar.rejected, (state, { error }) => {
            state.isLoading = false;
            state.error = error.message;
        });
    },
});

export const { removeUser } = authSlice.actions;

export default authSlice.reducer;
