import http from "./httpServices";

export function getOtpApi(data) {
    return http.post("/user/get-otp", data).then(({ data }) => data.data)
}
