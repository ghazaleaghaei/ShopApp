import http from "./httpServices";

export function getCategoriesApi() {
    return http.get("/category/list").then(({ data }) => data.data)
}

export function addCategoryApi(data) {
    return http.post("/admin/category/add", data).then(({ data }) => data.data)
}
