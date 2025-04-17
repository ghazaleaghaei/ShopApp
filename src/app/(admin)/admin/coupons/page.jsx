"use client"

import { useGetCoupons } from "@/hooks/useCoupons"
import Link from "next/link"
import CouponsTable from "./_/components/CouponsTable"

function page() {

    const { data, isLoading } = useGetCoupons()
    const { coupons } = data || {}

    if (isLoading) return <p>loading...</p>

    return <div>
        <div className="bg-secondary-50/30 font-bold px-4 py-10 w-full flex items-center justify-between">
            <h1>کد تخفیف</h1>
            <Link href="/admin/coupons/add" className="text-primary-800">
                اضافه کردن کد تخفیف
            </Link>
        </div>
        <CouponsTable coupons={coupons} />
    </div>
}
export default page
