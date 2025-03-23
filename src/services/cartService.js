import http from "./httpServices";

export function addToCartApi(productId) {
    return http.post("/cart/add", { productId }).then(({ data }) => data.data)
}

export function decrementToCartApi(productId) {
    return http.post("/cart/remove", { productId }).then(({ data }) => data.data)
}

