import { getCategoriesApi } from "@/services/categoryServices"
import { getProductsApi } from "@/services/productServices"
import CategorySidebar from "./_/components/CategorySidebar"
import queryString from "query-string"
import Link from "next/link"
import { toLocalDate } from "@/functions/toLocalDate"

async function Products({ searchParams }) {

    const query = queryString.stringify(await searchParams)

    // const { products } = await getProductsApi(query)
    // const { categories } = await getCategoriesApi()

    const productsPromise = getProductsApi(query)
    const categoriesPromise = getCategoriesApi()

    const [{ products }, { categories }] = await Promise.all([
        productsPromise,
        categoriesPromise,
    ])


    return <div className="grid grid-cols-4">
        <h1 className="text-xl font-bold mb-6 col-span-4">صفحه محصولات</h1>
        <CategorySidebar categories={categories} />
        <div className="col-span-3 grid grid-cols-3 gap-4">
            {
                products.map(product => <div
                    className="border rounded-xl shadow-md p-4 w-full h-fit flex flex-col gap-4"
                    key={product._id}
                >
                    <h2 className="font-bold">
                        {product.title}
                    </h2>
                    <div>
                        <span>تاریخ ساختن:</span>
                        <span>
                            {toLocalDate(product.createdAt)}
                        </span>
                    </div>
                    <Link
                        className="text-primary-900 font-bold"
                        href={`/products/${product.slug}`}
                    >
                        مشاهده محصول
                    </Link>
                </div>)
            }
        </div>
    </div>
}
export default Products
