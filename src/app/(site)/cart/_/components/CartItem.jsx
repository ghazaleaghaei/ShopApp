import { FaBeer } from 'react-icons/fa';

function CartItem({ cartItem }) {
    return <div className="border rounded-xl p-4 flex justify-between">
        <p className="flex-1 font-bold">
            {cartItem.title}
        </p>
        <div>
            <span>تعداد: {cartItem.quantity}</span>
            <div className="flex gap-x-2">
                <button className="bg-primary-900 text-white rounded p-1">
                    <FaBeer className="w-4 h-4" />
                </button>
                <button>
                    <FaBeer className="text-rose-500 w-6 h-6" />
                </button>
                <button className="border rounded p-1">
                    <FaBeer className="w-4 h-4" />
                </button>
            </div>
        </div>
    </div>
}
export default CartItem
