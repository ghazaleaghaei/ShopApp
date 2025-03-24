import { toLocalDate } from "@/functions/toLocalDate"
import { toPersianNumbersWithComma } from "@/functions/toPersionNumbers"

const userPaymentHeads = [
    {
        id: 1,
        label: "#"
    },
    {
        id: 2,
        label: "شماره فاکتور"
    },
    {
        id: 3,
        label: "توضیحات"
    },
    {
        id: 4,
        label: "محصولات"
    },
    {
        id: 5,
        label: "مبلغ"
    },
    {
        id: 6,
        label: "تاریخ"
    },
    {
        id: 7,
        label: "وضعیت"
    }
]


function PaymentTable({ payments }) {
    return <div className="shadow-md overflow-auto my-8">
        <table className="border-collapse table-auto w-full min-w-[800px] text-sm">
            <thead>
                <tr>
                    {userPaymentHeads.map(item => <th
                        className="whitespace-nowrap border-b font-medium p-3 ps-8 text-right border-b-gray-500"
                        key={item.id}
                    >
                        {item.label}
                    </th>)}
                </tr>
            </thead>
            <tbody>
                {
                    payments.map((payment, index) => <tr
                        className="*:border-b *:border-b-gray-300 *:p-3 *:ps-8 *:text-right"
                        key={payment._id}
                    >
                        <td>{index + 1}</td>
                        <td>{payment.invoiceNumber}</td>
                        <td className="max-w-[280px] whitespace-nowrap truncate">
                            {payment.description}
                        </td>
                        <td>
                            <div className="flex flex-col gap-y-2 items-start">
                                {
                                    payment.cart.productDetail.map(product => <div
                                        className="px-2 py-1 rounded-xl bg-secondary-600 text-white whitespace-nowrap"
                                        key={product._id}
                                    >
                                        {product.title}
                                    </div>
                                    )
                                }
                            </div>
                        </td>
                        <td>{toPersianNumbersWithComma(payment.amount)}</td>
                        <td>{toLocalDate(payment.createdAt)}</td>
                        <td>
                            {
                                payment.status === "COMPLETED"
                                    ? <span className="bg-green-500 text-white px-2 py-0.5 rounded-xl">
                                        موفق
                                    </span>
                                    : <span className="bg-rose-500 text-white px-2 py-0.5 rounded-xl">
                                        ناموفق
                                    </span>
                            }
                        </td>
                    </tr>)
                }
            </tbody>
        </table>
    </div>
}

export default PaymentTable
