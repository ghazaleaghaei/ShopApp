"use client"

import { useAddToCart } from "@/hooks/useCart"
import useUser from "@/hooks/useUser"
import Link from "next/link"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

function AddToCart({ product }) {

    const router = useRouter()
    const { data } = useUser()
    const { user } = data || {}

    const { isLoading, error, cart, mutateAsync, addToCartHandler } = useAddToCart({ productId: product._id })

    const isInCArt = (user, product) => {
        if (!user) return false;
        return user.cart?.products.some(item => item.productId === product._id)
    }

    const addToCart = async () => {
        if (!user) {
            toast.error("لطفا ابتدا لاگین کنید.")
            router.push("/auth")
            return;
        }
        addToCartHandler()
    }

    return (
        <div>
            {
                isInCArt(user, product) ? (
                    <Link
                        href="/cart"
                        className="text-primary-900 font-bold"
                    >
                        ادامه سفارش
                    </Link>
                )
                    : <button
                        className="bg-primary-900 p-2 rounded-xl shadow-xl text-white disabled:opacity-50"
                        disabled={isLoading}
                        onClick={addToCart}
                    >
                        اضافه کردن به سبد خرید
                    </button>
            }
        </div>
    )
}

export default AddToCart
