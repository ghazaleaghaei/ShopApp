import http from "./httpServices";

export function getProductsApi(query, cookies) {
    return http.get(`/product/list?${query}`, {
        headers: {
            Cookie: cookies
        }
    }).then(({ data }) => data.data)
}

export function getProductApi(slug) {
    return http.get(`/product/slug/${slug}`).then(({ data }) => data.data)
}

export function likeProductApi(id) {
    return http.post(`/product/like/${id}`).then(({ data }) => data.data)
}

export function addProductApi(data) {
    return http.post(`/admin/product/add`, data).then(({ data }) => data.data)
}
