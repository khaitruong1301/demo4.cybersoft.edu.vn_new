import { UserValues } from "./auth";
import { Room } from "./room";

export interface Ticket {
    deleteAt: boolean;
    _id: string;
    checkIn: Date;
    checkOut: Date;
    userId: UserValues;
    roomId: Room;
    __v: number;
}
