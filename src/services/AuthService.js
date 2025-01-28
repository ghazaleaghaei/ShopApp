import http from "./httpServices";

export function getOtpApi(data) {
    return http.post("/user/get-otp", data).then(({ data }) => data.data)
}

export function getCheckOtpApi(data) {
    return http.post("/user/check-otp", data).then(({ data }) => data.data)
}
