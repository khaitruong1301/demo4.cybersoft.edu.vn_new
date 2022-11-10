import { Ticket } from "Interface/ticket";
import axiosClient from "./axiosClient";

const ticketAPI = {
    getListTicketByUser: (userId: string) => {
        return axiosClient.get<Ticket[]>("api/tickets/by-user", {
            params: {
                userId,
            },
        });
    },
};

export default ticketAPI;
