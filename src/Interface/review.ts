export interface Review {
    deleteAt: boolean;
    _id: string;
    content: string;
    roomId: RoomID;
    userId: UserID;
    created_at: Date;
    updatedAt: Date;
    __v: number;
}

export interface RoomID {
    deleteAt: boolean;
    _id: string;
    name: string;
    description: string;
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
    bath: number;
    bedRoom: number;
    price: number;
    locationId: string;
    guests: number;
    hotTub: boolean;
    indoorFireplace: boolean;
}

export interface UserID {
    tickets: string[];
    deleteAt: boolean;
    _id: string;
    name: string;
    email: string;
    password: string;
    phone: string;
    birthday: Date;
    gender: boolean;
    address: string;
    type: string;
    __v: number;
    avatar: string;
}
