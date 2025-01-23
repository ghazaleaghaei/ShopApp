const { default: axios } = require("axios");

const app = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    withCredentials: true,
})

const http = {
    get: app.get,
    post: app.post,
    patch: app.patch,
    delete: app.delete,
    put: app.put,
}

export default http
