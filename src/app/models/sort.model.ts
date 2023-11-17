export interface Sort {
    sortBy: string;
    order: SORT_ORDER;
}

export enum SORT_ORDER {
    ASC,
    DESC
}