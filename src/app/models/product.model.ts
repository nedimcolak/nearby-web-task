export interface Product {
    id: string;
    name: string;
    description?: string;
    categoryName: string;
    price: number;
    views: number;
    latitude: number;
    longitude: number;
    image: string;
}