"use client"

import useUser from "@/hooks/useUser"
import Link from "next/link"

function Header() {

    const { data, error, isLoading } = useUser()
    const { user, cart } = data || {}

    return (
        <header className={`w-full shadow-lg sticky top-0 transition-all duration-300 ${isLoading ? "blur-sm opacity-70" : "opacity-100 blur-0"}`}>
            <nav className="w-full max-w-7xl mx-auto">
                <ul className="flex justify-between w-full p-4 items-center">
                    <li>
                        <Link href="/">
                            خانه
                        </Link>
                    </li>
                    <li>
                        <Link href="/products">
                            محصولات
                        </Link>
                    </li>
                    <li>
                        <Link href="/cart">
                            سبد خرید ({cart ? cart.payDetail?.productIds.length : 0})
                        </Link>
                    </li>
                    <li>
                        <Link href="/user">
                            پنل کاربر
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin">
                            پنل ادمین
                        </Link>
                    </li>
                    <li>
                        {
                            user ? (
                                <span>{user.name}</span>
                            ) : <Link href="/auth">
                                ورود
                            </Link>
                        }
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header
