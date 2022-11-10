import { AppDispatch } from "configStore";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getListRoom } from "Slices/room";
import { TabTitle } from "Utill/GenaralFunction";
import Filter from "../../Components/Filter/Filter";
import RoomList from "../../Components/RoomList/RoomList";

const Home = () => {
    TabTitle("Nhà nghỉ dưỡng & Căn hộ cao cấp cho thuê - Airbnb");

    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(getListRoom());
    }, []);

    return (
        <>
            <Filter />
            <RoomList />
        </>
    );
};

export default Home;
