import { NextResponse } from "next/server";
import { middleWareAuth } from "./functions/middlewareAuth";

export async function middleware(req) {

    const { pathname } = req.nextUrl;

    if (pathname.startsWith("/admin")) {
        const user = await middleWareAuth(req)
        if (!user) return NextResponse.redirect(new URL("/auth", req.nextUrl))
        if (user && user.role !== "ADMIN")
            return NextResponse.redirect(new URL("/", req.nextUrl))
    }

    if (pathname.startsWith("/user")) {
        const user = await middleWareAuth(req)
        if (!user) return NextResponse.redirect(new URL("/auth", req.nextUrl))
    }
}

export const config = {
    mather: ["/user/:path*", "/admin/:path*"],
}
