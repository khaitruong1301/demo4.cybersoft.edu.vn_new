import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Ticket } from "Interface/ticket";
import ticketAPI from "Services/ticketAPI";

interface State {
    listTicket: Ticket[];
    isLoading: boolean;
    error?: string;
}
const initialState: State = {
    listTicket: [],
    isLoading: false,
    error: undefined,
};

export const getListTicketByUser = createAsyncThunk(
    "ticket/getListTicketByUser",
    async (userId: string) => {
        try {
            const listTicket = await ticketAPI.getListTicketByUser(userId);
            console.log(listTicket);
            return listTicket;
        } catch (error) {
            throw error;
        }
    },
);

const ticketSlice = createSlice({
    name: "ticket",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getListTicketByUser.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getListTicketByUser.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.listTicket = payload;
        });
        builder.addCase(getListTicketByUser.rejected, (state, { error }) => {
            state.isLoading = false;
            state.error = error.message;
        });
    },
});

export default ticketSlice.reducer;
