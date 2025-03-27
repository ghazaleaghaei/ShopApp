import Link from "next/link"
import { HiEye, HiTrash } from "react-icons/hi"
import { BiSolidEditAlt } from "react-icons/bi";

const productsTableHeads = [
    {
        id: 1,
        label: "#"
    },
    {
        id: 2,
        label: "عنوان"
    },
    {
        id: 3,
        label: "دسته بندی"
    },
    {
        id: 4,
        label: "قیمت"
    },
    {
        id: 5,
        label: "تخفیف"
    },
    {
        id: 6,
        label: "قیمت با تخفیف"
    },
    {
        id: 7,
        label: "موجودی"
    },
    {
        id: 8,
        label: "عملیات"
    },
]


function ProductsTable({ products }) {
    return <div className="shadow-md overflow-auto my-8">
        <table className="border-collapse table-auto w-full min-w-[800px] text-sm">
            <thead>
                <tr>
                    {productsTableHeads.map(item => <th
                        className="whitespace-nowrap border-b font-medium p-3 ps-8 text-right border-b-gray-500"
                        key={item.id}
                    >
                        {item.label}
                    </th>)}
                </tr>
            </thead>
            <tbody>
                {
                    products.map((product, index) => <tr
                        className="*:border-b *:border-b-gray-300 *:p-3 *:ps-8 *:text-right"
                        key={product._id}
                    >
                        <td>{index + 1}</td>
                        <td className="font-bold whitespace-nowrap">{product.title}</td>
                        <td>{product.category.title}</td>
                        <td>{product.price}</td>
                        <td>{product.discount}</td>
                        <td>{product.offPrice}</td>
                        <td>{product.countInStock}</td>
                        <td className="font-bold flex items-center justify-center gap-2">
                            <Link href={`/admin/products/${product._id}`}>
                                <HiEye className="text-primary-900 w-6 h-6" />
                            </Link>
                            <button>
                                <HiTrash className="text-rose-600 w-6 h-6" />
                            </button>
                            <Link href={`/admin/products/edit/${product._id}`}>
                                <BiSolidEditAlt className="w-6 h-6 text-secondary-600" />
                            </Link>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>
    </div>
}

export default ProductsTable
