import http from "./httpServices";

export function getProductsApi(query) {
    return http.get(`/product/list?${query}`).then(({ data }) => data.data)
}

export function getProductApi(slug) {
    return http.get(`/product/slug/${slug}`).then(({ data }) => data.data)
}
