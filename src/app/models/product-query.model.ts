import { Category } from "./category.model";
import { SORT_ORDER, Sort } from "./sort.model";

export interface ProductQuery {
    page: number;
    minPrice?: number;
    maxPrice?: number;
    searchTerm?: string;
    sortBy: string;
    order: string;
}