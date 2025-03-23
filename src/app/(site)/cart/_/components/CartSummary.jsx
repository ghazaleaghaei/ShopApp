import { toPersianNumbersWithComma } from "@/functions/toPersionNumbers";
import { usePayment } from "@/hooks/usePayment";

function CartSummary({ payDetail }) {

    const { totalOffAmount, totalPrice, totalGrossPrice } = payDetail;

    const { isLoading, createPaymentHandler } = usePayment()

    return <div className="border p-4 rounded-xl">
        <p className="mb-4 font-bold">
            اطلاعات پرداخت
        </p>
        <div className="mb-4 flex items-center justify-between">
            <p>حمع کل</p>
            <p>{toPersianNumbersWithComma(totalGrossPrice)}</p>
        </div>
        <div className="mb-4 flex items-center justify-between">
            <p>تخفیف</p>
            <p>{toPersianNumbersWithComma(totalOffAmount)}-</p>
        </div>
        <div className="mb-4 flex items-center justify-between font-bold">
            <p>مبلغ قابل پرداخت</p>
            <p>{toPersianNumbersWithComma(totalPrice)}</p>
        </div>
        <button
            className="bg-primary-900 p-2 w-full rounded-xl text-white shadow-lg shadow-primary-900 disabled:opacity-50"
            onClick={createPaymentHandler}
            disabled={isLoading}
        >
            ثبت سفارش
        </button>
    </div>
}

export default CartSummary
