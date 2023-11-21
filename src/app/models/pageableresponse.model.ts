export interface PageableResponse<T> {
    totalElements: number,
    totalPages: number,
    pageData: Array<T>
}