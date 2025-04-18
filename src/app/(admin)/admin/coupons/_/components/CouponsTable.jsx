import Link from "next/link"
import { HiEye, HiTrash } from "react-icons/hi"
import { BiSolidEditAlt } from "react-icons/bi";
import { toLocalDate } from "@/functions/toLocalDate";
import { useRemoveCoupon } from "@/hooks/useCoupons";

const couponsTableHeads = [
    {
        id: 1,
        label: "#"
    },
    {
        id: 2,
        label: "کد"
    },
    {
        id: 3,
        label: "نوع"
    },
    {
        id: 4,
        label: "مقدار"
    },
    {
        id: 5,
        label: "شامل محصولات"
    },
    {
        id: 6,
        label: "مقدار مصرفی"
    },
    {
        id: 7,
        label: "ظرفیت"
    },
    {
        id: 8,
        label: "تاریخ انقضا"
    },
    {
        id: 9,
        label: "عملیات"
    },
]

function CouponsTable({ coupons }) {
    const { isRemoving, removeSubmitHandler } = useRemoveCoupon()
    return <div className="shadow-md overflow-auto my-8">
        <table className="border-collapse table-auto w-full min-w-[800px] text-sm">
            <thead>
                <tr>
                    {couponsTableHeads.map(item => <th
                        className="whitespace-nowrap border-b font-medium p-3 ps-8 text-right border-b-gray-500"
                        key={item.id}
                    >
                        {item.label}
                    </th>)}
                </tr>
            </thead>
            <tbody>
                {
                    coupons.map((coupon, index) => <tr
                        className="*:border-b *:border-b-gray-300 *:p-3 *:ps-8 *:text-right"
                        key={coupon._id}
                    >
                        <td>{index + 1}</td>
                        <td>{coupon.code}</td>
                        <td className="font-bold whitespace-nowrap">
                            <span className="bg-primary-700 text-white px-3 py-1 rounded-xl">
                                {coupon.type}
                            </span>
                        </td>
                        <td>{coupon.amount}</td>
                        <td className="flex flex-col gap-2">
                            {
                                coupon.productIds.map(product => <span className="bg-secondary-700 text-white px-3 py-1 rounded-xl w-fit"
                                    key={product._id}
                                >
                                    {product.title}
                                </span>)
                            }
                        </td>
                        <td>{coupon.usageCount}</td>
                        <td>{coupon.usageLimit}</td>
                        <td>{toLocalDate(coupon.expireDate)}</td>
                        <td>
                            <div className="font-bold flex items-center justify-start gap-2">
                                <Link href={`/admin/coupons/${coupon._id}`}>
                                    <HiEye className="text-primary-900 w-6 h-6" />
                                </Link>
                                <button
                                    className="disabled:opacity-50 cursor-pointer"
                                    onClick={(e) => removeSubmitHandler(coupon._id, e)}
                                    disabled={isRemoving}
                                >
                                    <HiTrash className="text-rose-600 w-6 h-6" />
                                </button>
                                <Link href={`/admin/coupons/edit/${coupon._id}`}>
                                    <BiSolidEditAlt className="w-6 h-6 text-secondary-600" />
                                </Link>
                            </div>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>
    </div>
}

export default CouponsTable
