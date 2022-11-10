import { AppDispatch, RootState } from "configStore";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getListRoomByLocation } from "Slices/room";
import { TabTitle } from "Utill/GenaralFunction";
import HotelList from "../../Components/HotelList/HotelList";
import Map from "../../Components/Map/Map";

const RoomByCity = () => {
    const { listRoom } = useSelector((state: RootState) => state.room);
    TabTitle(
        `Airbnb - Phòng theo vị trí - ${
            listRoom[0].locationId ? listRoom[0].locationId.name : ""
        }`,
    );
    const { id } = useParams();

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getListRoomByLocation(id!));
    }, [id]);

    return (
        <div className="container mx-auto">
            <div className="h-28"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <HotelList />
                <Map />
            </div>
        </div>
    );
};

export default RoomByCity;
