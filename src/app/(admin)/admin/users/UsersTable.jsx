import { toLocalDate } from "@/functions/toLocalDate"
import Link from "next/link"
import { HiCheckCircle } from "react-icons/hi"

const usersTableHeads = [
    {
        id: 1,
        label: "#"
    },
    {
        id: 2,
        label: "نام"
    },
    {
        id: 3,
        label: "ایمیل"
    },
    {
        id: 4,
        label: "موبایل"
    },
    {
        id: 5,
        label: "محصولات"
    },
    {
        id: 6,
        label: "تاریخ پیوستن"
    },
    {
        id: 7,
        label: "مشاهده"
    },
]


function UsersTable({ users }) {
    return <div className="shadow-md overflow-auto my-8">
        <table className="border-collapse table-auto w-full min-w-[800px] text-sm">
            <thead>
                <tr>
                    {usersTableHeads.map(item => <th
                        className="whitespace-nowrap border-b font-medium p-3 ps-8 text-right border-b-gray-500"
                        key={item.id}
                    >
                        {item.label}
                    </th>)}
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user, index) => <tr
                        className="*:border-b *:border-b-gray-300 *:p-3 *:ps-8 *:text-right"
                        key={user._id}
                    >
                        <td>{index + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <div className="flex whitespace-nowrap gap-x-2 items-center">
                                {user.phoneNumber}{" "}
                                {
                                    user.isVerifiedPhoneNumber
                                    && <HiCheckCircle className="w-6 h-6 text-green-600" />
                                }
                            </div>
                        </td>
                        <td>
                            <div className="flex flex-col gap-y-2 items-start">
                                {
                                    user.Products.map((product, index) => <div
                                        className="px-2 py-1 rounded-xl bg-secondary-600 text-white whitespace-nowrap"
                                        key={index}
                                    >
                                        {product.title}
                                    </div>
                                    )
                                }
                            </div>
                        </td>
                        <td>
                            {toLocalDate(user.createdAt)}
                        </td>
                        <td className="font-bold">
                            <Link href={`/admin/users/${user._id}`}>مشاهده جزئیات</Link>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>
    </div>
}

export default UsersTable
