import { AppDispatch, RootState } from "configStore";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getRoomDetail } from "Slices/room";
import { TabTitle } from "Utill/GenaralFunction";
import HotelDetail from "../../Components/HotelDetail/HotelDetail";

const RoomDetail = () => {
    const { id } = useParams();

    const { roomDetail } = useSelector((state: RootState) => state.room);

    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(getRoomDetail(id!));
    }, []);
    TabTitle(`Airbnb - Chi tiết phòng - ${roomDetail ? roomDetail.name : ""}`);
    return (
        <div>
            <HotelDetail />
        </div>
    );
};

export default RoomDetail;
