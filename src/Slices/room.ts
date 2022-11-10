import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Booking, Room } from "Interface/room";
import roomAPI from "Services/roomAPI";

interface State {
    roomDetail: Room | null;
    listRoom: Room[];
    isLoading: boolean;
    error?: string;
}
const initialState: State = {
    roomDetail: null,
    listRoom: [],
    isLoading: false,
    error: undefined,
};

export const getListRoom = createAsyncThunk("room/getListRoom", async () => {
    try {
        const listRoom = await roomAPI.getListRoom();
        return listRoom;
    } catch (error) {
        throw error;
    }
});

export const getListRoomByLocation = createAsyncThunk(
    "room/getListRoomByLocation",
    async (locationId: string) => {
        try {
            const listRoom = await roomAPI.getListRoomByLocation(locationId);
            return listRoom;
        } catch (error) {
            throw error;
        }
    },
);

export const getRoomDetail = createAsyncThunk(
    "room/getRoomDetail",
    async (roomId: string) => {
        try {
            const room = await roomAPI.getRoomDetail(roomId);
            return room;
        } catch (error) {
            throw error;
        }
    },
);

export const booking = createAsyncThunk(
    "room/booking",
    async (values: Booking) => {
        try {
            const result = await roomAPI.booking(values);
            console.log(result);
            return result;
        } catch (error) {
            throw error;
        }
    },
);

const roomSlice = createSlice({
    name: "room",
    initialState,
    reducers: {},
    extraReducers(builder) {
        // getListRoom
        builder.addCase(getListRoom.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getListRoom.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.listRoom = payload;
        });
        builder.addCase(getListRoom.rejected, (state, { error }) => {
            state.isLoading = false;
            state.error = error.message;
        });

        // getListRoomByLocation
        builder.addCase(getListRoomByLocation.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(
            getListRoomByLocation.fulfilled,
            (state, { payload }) => {
                state.isLoading = false;
                state.listRoom = payload;
            },
        );
        builder.addCase(getListRoomByLocation.rejected, (state, { error }) => {
            state.isLoading = false;
            state.error = error.message;
        });

        // getListRoomDetail
        builder.addCase(getRoomDetail.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getRoomDetail.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.roomDetail = payload;
        });
        builder.addCase(getRoomDetail.rejected, (state, { error }) => {
            state.isLoading = false;
            state.error = error.message;
        });
    },
});

export default roomSlice.reducer;
