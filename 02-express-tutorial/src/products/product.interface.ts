export interface BaseProduct {
    id: number;
    name: string;
    image: string;
    price: number;
    desc: string;
}

export interface Product extends BaseProduct {
    id: number;
}