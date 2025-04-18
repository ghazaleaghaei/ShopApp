"use client"

import { useParams } from "next/navigation"
import { useGetCoupon } from "@/hooks/useCoupons";
import Form from "../../_/components/Form";

function page() {

    //for client component use useParams , for server components we use params as props
    const { id } = useParams();
    const { data, isLoading } = useGetCoupon(id)
    const { coupon } = data || {}

    if (isLoading) return <p>loading....</p>

    return <div className="w-full max-w-sm mx-auto py-10">
        <h1 className="mb-4 font-bold text-xl"> ویرایش کد تخفیف</h1>
        <Form couponToEdit={coupon} />
    </div>
}

export default page
