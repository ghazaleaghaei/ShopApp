import { getCategoriesApi } from "@/services/categoryServices"
import { getProductsApi } from "@/services/productServices"
import CategorySidebar from "./_/components/CategorySidebar"
import queryString from "query-string"
import Link from "next/link"
import { toLocalDate } from "@/functions/toLocalDate"
import AddToCart from "./_/components/AddToCart"
import LikeProduct from "./_/components/LikeProduct"
import { cookies } from "next/headers"
import { toStringCookies } from "@/functions/toStringCookies"

async function Products({ searchParams }) {

    const query = queryString.stringify(await searchParams)

    // const { products } = await getProductsApi(query)
    // const { categories } = await getCategoriesApi()

    const cookieStore = await cookies()
    const strCookies = toStringCookies(cookieStore)

    const productsPromise = getProductsApi(query, strCookies)
    const categoriesPromise = getCategoriesApi()

    const [{ products }, { categories }] = await Promise.all([
        productsPromise,
        categoriesPromise,
    ])


    return <div className="grid grid-cols-4">
        <h1 className="text-xl font-bold mb-6 col-span-4">صفحه محصولات</h1>
        <CategorySidebar categories={categories} />
        <div className="col-span-3 grid grid-cols-3 gap-4 items-stretch">
            {
                products.map(product => <div
                    className="border rounded-xl shadow-md p-4 w-full h-full flex flex-col gap-4"
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
                    <LikeProduct product={product} />
                    <AddToCart product={product} />
                </div>)
            }
        </div>
    </div>
}
export default Products
