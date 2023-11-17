export interface PageableResponse<T> {
    totalPages: number,
    totalElements: number,
    pageNumber: number,
    content: Array<T>
}

/*
"pageable": {
        "pageNumber": 0,
        "pageSize": 10,
        "sort": {
            "empty": true,
            "unsorted": true,
            "sorted": false
        },
        "offset": 0,
        "paged": true,
        "unpaged": false
    },
    "last": true,
    "totalPages": 1,
    "totalElements": 4,
    "first": true,
    "size": 10,
    "number": 0,
    "sort": {
        "empty": true,
        "unsorted": true,
        "sorted": false
    },
    "numberOfElements": 4,
    "empty": false
*/