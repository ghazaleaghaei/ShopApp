"use client"

import PaymentTable from "@/ components/PaymentTable"
import { useGetPayments } from "@/hooks/usePayment"

function page() {

    const { data, isLoading } = useGetPayments()
    const { payments } = data || {}

    if (isLoading) return <p>loading....</p>

    return (
        <div>
            <div className="bg-secondary-50/30 font-bold px-4 py-10 w-full flex items-center justify-between">
                <h1>سفارشات</h1>
            </div>
            <PaymentTable
                payments={payments}
                isAdmin
            />
        </div >
    )
}

export default page
