import { toStringCookies } from "./toStringCookies";

export async function middleWareAuth(req) {

    const options = {
        method: "GET",
        credentials: "include",
        headers: {
            Cookie: toStringCookies(req.cookies)
        },
    };

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/user/profile`,
        options
    );

    const { data } = await res.json();
    const { user } = data || {}

    return user;
}
