import { Booking, Room } from "Interface/room";
import axiosClient from "./axiosClient";

const roomAPI = {
    getListRoom: () => {
        return axiosClient.get<Room[]>("api/rooms", {
            params: {
                limit: 32,
            },
        });
    },
    getListRoomByLocation: (locationId: string) => {
        return axiosClient.get<Room[]>("api/rooms", {
            params: {
                locationId,
            },
        });
    },
    getRoomDetail: (roomId: string) => {
        return axiosClient.get<Room>(`api/rooms/${roomId}`);
    },
    booking: (values: Booking) => {
        return axiosClient.post<any>("api/rooms/booking", values);
    },
};
export default roomAPI;
