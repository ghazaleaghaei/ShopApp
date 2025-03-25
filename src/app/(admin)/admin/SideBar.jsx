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
                <Link href="/admin">
                    داشبورد
                </Link>
            </li>
            <li>
                <Link href="/admin/users">
                    کاربران
                </Link>
            </li>
            <li>
                <Link href="/admin/products">
                    محصولات
                </Link>
            </li>
            <li>
                <Link href="/admin/categories">
                    دسته بندی ها
                </Link>
            </li>
            <li>
                <Link href="/admin/coupons">
                    کد تخفیف
                </Link>
            </li>
            <li>
                <Link href="/admin/payments">
                    سفارشات
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
