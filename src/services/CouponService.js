import http from "./httpServices"

export function getAllCouponsApi() {
    return http.get("/admin/coupon/list").then(({ data }) => data.data)
}

export function getCouponApi(id) {
    return http.get(`/admin/coupon/${id}`).then(({ data }) => data.data)
}

export function addNewCouponApi(data) {
    return http.post("/admin/coupon/add", data).then(({ data }) => data.data)
}

export function updateCouponApi({ editData, id }) {
    return http.patch(`/admin/coupon/update/${id}`, editData).then(({ data }) => data.data)
}

export function removeCouponApi(id) {
    return http.delete(`/admin/coupon/remove/${id}`).then(({ data }) => data.data)
}
