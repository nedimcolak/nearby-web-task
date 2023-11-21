export interface CreateProduct {
    name: string;
    description?: string;
    categoryId?: string;
    price: number;
    latitude: number;
    longitude: number;
    image: string;
}