import http from "./httpServices";

export function getProductsApi() {
    return http.get("/product/list").then(({ data }) => data.data)
}
