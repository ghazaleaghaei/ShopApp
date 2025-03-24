"use client"

import { toLocalDate } from "@/functions/toLocalDate"
import useUser from "@/hooks/useUser"
import PaymentTable from "./payments/PaymentTable"
import Link from "next/link"

function Panel() {

    const { data, isLoading } = useUser()
    const { user, payments } = data || {}

    if (isLoading) return <p>loading...</p>

    return <div className="m-6 flex flex-col gap-6">
        <h1>{user.name} خوش آمدی</h1>
        <p>
            <span>تاریخ پیوستن : </span>
            <span>{toLocalDate(user.createdAt)}</span>
        </p>
        <div className="border rounded-xl mt-8 p-4">
            <div className="flex items-center justify-between font-bold">
                <h2>آخرین سفارشات کاربر</h2>
                <Link
                    className="text-primary-900"
                    href="/user/payments"
                >
                    مشاهده همه سفارشات
                </Link>
            </div>
            <PaymentTable payments={payments
                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                .slice(0, 3)
            } />
        </div>
    </div>
}

export default Panel
