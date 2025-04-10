"use client"

import PaymentTable from "@/ components/PaymentTable"
import { useUser } from "@/hooks/useUser"

function Payments() {

    const { data, isLoading } = useUser()
    const { user, payments } = data || {}

    if (isLoading) return <p>loading....</p>

    return (
        <div className="px-4 py-10">
            <h1>
                سفارشات کاربر
            </h1>
            <PaymentTable
                payments={payments}
            />
        </div>
    )
}

export default Payments
