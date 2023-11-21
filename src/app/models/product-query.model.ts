import { Category } from "./category.model";
import { SORT_ORDER, Sort } from "./sort.model";

export interface ProductQuery {
    page: number;
    pageSize: number;
    minPrice?: number;
    maxPrice?: number;
    searchTerm?: string;
    sortBy: string;
    order: string;
    categories?: string[]
}