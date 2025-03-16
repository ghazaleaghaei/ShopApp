"use client"

import useUser from "@/hooks/useUser"
import Link from "next/link"
import CartItem from "./_/components/CartItem"


function CartPage() {

    const { data, isLoading } = useUser()
    const { user, cart } = data || {}

    if (isLoading) return <p>loading....</p>

    if (!user || !data) {
        return (
            <div className="text-center">
                <p className="font-bold mb-4">
                    برای مشاهده سبد خرید لطفا لاگین کنید
                </p>
                <Link
                    href="/auth"
                    className="text-lg font-bold text-primary-900"
                >
                    رفتن به صفحه لاگین
                </Link>
            </div>
        )
    }

    if (!user.cart?.products || user.cart?.products.length === 0) {
        return (
            <div>
                <p>سبد خرید خالی است</p>
                <Link
                    href="/products"
                    className="text-lg font-bold text-primary-900"
                >
                    رفتن به صفحه محصولات</Link>
            </div>
        )
    }

    return <div className="grid grid-cols-4 gap-4">
        <div className="space-y-5 col-span-3">
            {
                cart && cart.productDetail.map(cartItem => <CartItem
                    cartItem={cartItem}
                    key={cartItem._id}
                />)
            }
        </div>
        <div className="col-span-1">
            cart summary
        </div>
    </div>
}

export default CartPage
