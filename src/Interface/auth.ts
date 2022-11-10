export interface LoginValues {
    email: string;
    password: string;
}
export interface LoginResult {
    message: string;
    user: UserValues;
    token: string;
}
export interface UserValues {
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

export interface UserUpdateValues {
    name: string;
    email: string;
    phone: string;
    birthday: Date;
    gender: boolean;
    address: string;
}

export interface UpdateUser {
    id: string;
    values: UserUpdateValues;
}
export interface RegisterValues {
    name: string;
    email: string;
    phone: string;
    password: string;
    address: string;
    birthday: Date;
    gender: boolean;
}
