import { getCategoriesApi } from "@/services/categoryServices"
import { getProductsApi } from "@/services/productServices"
import CategorySidebar from "./_/components/CategorySidebar"
import queryString from "query-string"

async function Products({ searchParams }) {

    const query = queryString.stringify(await searchParams)
    const { products } = await getProductsApi(query)
    const { categories } = await getCategoriesApi()

    return <div className="grid grid-cols-4">
        <h1 className="text-xl font-bold mb-6 col-span-4">صفحه محصولات</h1>
        <CategorySidebar categories={categories} />
        <div className="col-span-3 grid grid-cols-3 gap-4">
            {
                products.map(product => <div
                    className="border rounded-xl shadow-md p-4"
                    key={product._id}
                >
                    <h2>
                        {product.title}
                    </h2>
                </div>)
            }
        </div>
    </div>
}
export default Products
