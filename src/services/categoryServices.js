import http from "./httpServices";

export function getCategoriesApi() {
    return http.get("/category/list").then(({ data }) => data.data)
}

export function getCategoryApi(id) {
    return http.get(`/category/${id}`).then(({ data }) => data.data)
}

export function addCategoryApi(data) {
    return http.post("/admin/category/add", data).then(({ data }) => data.data)
}

export function updateCategoryApi({ editData, id }) {
    return http.patch(`/admin/category/update/${id}`, editData).then(({ data }) => data.data)
}

export function removeCategoryApi(id) {
    return http.delete(`/admin/category/remove/${id}`).then(({ data }) => data.data)
}
