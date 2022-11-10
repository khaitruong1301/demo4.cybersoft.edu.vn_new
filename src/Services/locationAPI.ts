import { Location } from "Interface/location";
import axiosClient from "../Services/axiosClient";

const locationAPI = {
    getListLocation: () => {
        return axiosClient.get<Location[]>("api/locations");
    },
};
export default locationAPI;
