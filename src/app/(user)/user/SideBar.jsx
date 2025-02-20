"use client"

import { logoutApi } from "@/services/AuthService"
import Link from "next/link"

function SideBar() {

    const logoutHandler = async () => {
        await logoutApi()
        //localStorage.removeItem("userInfo")
        // localStorage.removeItem("cartItems")
        // localStorage.removeItem("token")
        document.location.href = "/"
    }

    return <div>
        <ul className="flex flex-col gap-6 my-6">
            <li>
                <Link href="/">
                    صفحه اصلی
                </Link>
            </li>
            <li>
                <Link href="/user">
                    داشبورد
                </Link>
            </li>
            <li>
                <Link href="/user/profile">
                    اطلاعات کاربری
                </Link>
            </li>
            <button
                className="w-fit"
                onClick={logoutHandler}
            >
                خروج از حساب کاربری
            </button>
        </ul>
    </div>
}
export default SideBar
