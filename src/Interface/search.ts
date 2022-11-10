import { SingleValue } from "react-select";

export interface SearchValue {
    location: SingleValue<{ value: string; label: string }>;
    checkIn: string;
    checkOut: string;
    guest: number;
}
