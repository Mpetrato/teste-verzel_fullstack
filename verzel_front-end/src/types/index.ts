export interface RegisterInputsProps {
    rest: {
        username: string,
        email: string,
        password: string,
    }
}

export interface LoginInputsProps {
    email: string;
    password: string;
}

export type TCar = {
    brand: string;
    car_year: string;
    created_at: string;
    id: number;
    image: string;
    km: string;
    model: string;
    name: string;
    price: number;
    uid: number;
}