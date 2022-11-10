export interface Room {
    deleteAt: boolean;
    _id: string;
    name: string;
    bath: number;
    description: string;
    price: number;
    __v: number;
    image: string;
    cableTV: boolean;
    dryer: boolean;
    elevator: boolean;
    gym: boolean;
    heating: boolean;
    kitchen: boolean;
    pool: boolean;
    wifi: boolean;
    locationId: LocationID;
    bedRoom: number;
    guests: number;
}

export interface LocationID {
    deleteAt: boolean;
    name: string;
    province: string;
    country: string;
    valueate: number;
    image: string;
}
export interface Booking {
    roomId: string;
    checkIn: Date;
    checkOut: Date;
}
