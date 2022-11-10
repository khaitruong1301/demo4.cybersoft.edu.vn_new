import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Review } from "Interface/review";
import reviewAPI from "Services/reviewAPI";

interface State {
    listReview: Review[];
    isLoading: boolean;
    error?: string;
}
const initialState: State = {
    listReview: [],
    isLoading: false,
    error: undefined,
};

export const getReviewByRoomId = createAsyncThunk(
    "review/getReviewByRoomId",
    async (roomId: string) => {
        try {
            const listReview = reviewAPI.getReviewByRoomId(roomId);
            return listReview;
        } catch (error) {
            throw error;
        }
    },
);

const reviewSlice = createSlice({
    name: "review",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getReviewByRoomId.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getReviewByRoomId.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.listReview = payload;
        });
        builder.addCase(getReviewByRoomId.rejected, (state, { error }) => {
            state.isLoading = false;
            state.error = error.message;
        });
    },
});

export default reviewSlice.reducer;
