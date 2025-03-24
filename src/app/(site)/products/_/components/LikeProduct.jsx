"use client"

import { AiFillLike, AiOutlineLike } from "react-icons/ai"
import { likeProductApi } from "@/services/productServices"
import toast from "react-hot-toast"
import { usePathname, useRouter } from "next/navigation"

function LikeProduct({ product }) {

    const router = useRouter()

    const likeHandler = async () => {
        try {
            const { message } = await likeProductApi(product._id)
            toast.success(message)
            router.refresh()
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }

    return <div>
        <button onClick={likeHandler}>
            {
                product.isLiked
                    ? <AiFillLike className="fill-rose-700 w-6 h-6" />
                    : <AiOutlineLike className="text-secondary-700 w-6 h-6" />
            }
        </button>
    </div>
}
export default LikeProduct
