
import { toPersianNumbers, toPersianNumbersWithComma } from "@/functions/toPersionNumbers";
import { useAddToCart, useDecrementToCart } from "@/hooks/useCart";
import {
    FaRegTrashAlt,
    FaPlus,
    FaMinus,
} from "react-icons/fa";

function CartItem({ cartItem }) {

    const { addToCartHandler } = useAddToCart({ productId: cartItem._id })
    const { decrementToCartHandler } = useDecrementToCart({ productId: cartItem._id })

    return <div className="border rounded-xl p-4 flex justify-between items-center">
        <p className="flex-1 font-bold">
            {cartItem.title}
        </p>
        <div className="flex items-center justify-between gap-x-8 flex-1">
            <div>
                <div className="flex">
                    قیمت:{" "}
                    <p className={`${cartItem.discount ? "line-through text-gray-500" : "font-bold"}`}>
                        {toPersianNumbersWithComma(cartItem.price)}
                    </p>
                </div>
                {
                    !!cartItem.discount && (
                        <div className="flex items-center gap-x-2 mt-2">
                            <p className="font-bold">
                                {toPersianNumbersWithComma(cartItem.offPrice)}
                            </p>
                            <div className="bg-rose-500 px-2 py-0.5 rounded-xl text-white text-sm">
                                {toPersianNumbers(cartItem.discount)}%
                            </div>
                        </div>
                    )
                }
            </div>
            <span>تعداد: {toPersianNumbers(cartItem.quantity)}</span>
            <div className="flex gap-x-2">
                <button
                    className="bg-primary-900 text-white rounded p-1"
                    onClick={addToCartHandler}
                >
                    <FaPlus className="w-4 h-4" />
                </button>
                <button
                    className="border rounded p-1"
                    onClick={decrementToCartHandler}
                >
                    {
                        cartItem.quantity > 1
                            ? <FaMinus className="w-4 h-4" />
                            : <FaRegTrashAlt className="text-rose-500 w-4 h-4" />

                    }
                </button>
            </div>
        </div>
    </div>
}
export default CartItem
