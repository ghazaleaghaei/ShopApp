import Link from "next/link"
import { HiEye, HiTrash } from "react-icons/hi"
import { BiSolidEditAlt } from "react-icons/bi";

const categoriesTableHeads = [
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
        label: "توضیحات"
    },
    {
        id: 4,
        label: "عنوان انگلیسی"
    },
    {
        id: 5,
        label: "نوع"
    },
    {
        id: 6,
        label: "عملیات"
    },
]


function CategoriesTable({ categories }) {
    return <div className="shadow-md overflow-auto my-8">
        <table className="border-collapse table-auto w-full min-w-[800px] text-sm">
            <thead>
                <tr>
                    {categoriesTableHeads.map(item => <th
                        className="whitespace-nowrap border-b font-medium p-3 ps-8 text-right border-b-gray-500"
                        key={item.id}
                    >
                        {item.label}
                    </th>)}
                </tr>
            </thead>
            <tbody>
                {
                    categories.map((category, index) => <tr
                        className="*:border-b *:border-b-gray-300 *:p-3 *:ps-8 *:text-right"
                        key={category._id}
                    >
                        <td>{index + 1}</td>
                        <td className="font-bold whitespace-nowrap">{category.title}</td>
                        <td>{category.description}</td>
                        <td>{category.englishTitle}</td>
                        <td>
                            <span className="bg-secondary-700 text-white px-3 py-1 rounded-xl">
                                {category.type}
                            </span>
                        </td>
                        <td className="font-bold flex items-center justify-start gap-2">
                            <Link href={`/admin/categories/${category._id}`}>
                                <HiEye className="text-primary-900 w-6 h-6" />
                            </Link>
                            <button>
                                <HiTrash className="text-rose-600 w-6 h-6" />
                            </button>
                            <Link href={`/admin/categories/edit/${category._id}`}>
                                <BiSolidEditAlt className="w-6 h-6 text-secondary-600" />
                            </Link>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>
    </div>
}

export default CategoriesTable
