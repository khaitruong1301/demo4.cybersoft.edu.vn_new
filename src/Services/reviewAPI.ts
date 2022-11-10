import { Review } from "Interface/review";
import axiosClient from "./axiosClient";

const reviewAPI = {
    getReviewByRoomId: (roomId: string) => {
        return axiosClient.get<Review[]>("api/reviews/byRoom", {
            params: { roomId },
        });
    },
};

export default reviewAPI;
