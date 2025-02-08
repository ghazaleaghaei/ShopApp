import axios from "axios";

const app = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    withCredentials: true,
})

app.interceptors.request.use(
    (res) => res,
    (err) => Promise.reject(err)
)

//error=>status===401
//check where get error401?
app.interceptors.response.use(
    (res) => res,
    async (err) => {
        const originalConfig = err.config;
        if (err.response.status === 401) {
            try {
                const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/user/refresh-token`, {
                    withCredentials: true,
                });
                if (data) return app(originalConfig);
            } catch (error) {
                return Promise.reject(err)
            }
        }
        return Promise.reject(err)
    }
)

const http = {
    get: app.get,
    post: app.post,
    patch: app.patch,
    delete: app.delete,
    put: app.put,
}

export default http
