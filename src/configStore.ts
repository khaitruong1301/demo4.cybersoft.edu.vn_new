import { configureStore } from "@reduxjs/toolkit";
import auth from "./Slices/auth";
import location from "./Slices/location";
import room from "./Slices/room";
import review from "./Slices/review";
import ticket from "./Slices/ticket";

const store = configureStore({
    reducer: { auth, location, room, review, ticket },
});

// type cho hàm dispatch
export type AppDispatch = typeof store.dispatch;

// type cho state
export type RootState = ReturnType<typeof store.getState>;

export default store;
