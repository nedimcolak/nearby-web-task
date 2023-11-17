export interface PageableResponse<T> {
    totalPages: number,
    pageData: Array<T>
}