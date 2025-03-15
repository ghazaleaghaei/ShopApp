import { getProductApi, getProductsApi } from "@/services/productServices"

export const dynamic = "force-static"
export const dynamicParams = false

export async function generateStaticParams() {
    const { products } = await getProductsApi()

    return products.map((product) => ({
        slug: product.slug
    }))
}

async function Page({ params }) {

    const { slug } = await params
    const { product } = await getProductApi(slug)

    return <div className="flex flex-col gap-6">
        <h1 className="font-bold text-2xl">{product.title}</h1>
        <p>{product.description}</p>
        <p>
            قیمت محصول:{" "}
            <span className={`${product.discount ? "line-through" : "font-bold"}`}>
                {product.price}
            </span>
        </p>
        {
            !!product.discount && (
                <div className="flex items-center gap-x-2">
                    <p className="text-xl font-bold">
                        قیمت با تخفیف:{product.offPrice}
                    </p>
                    <div className="bg-rose-500 px-2 py-0.5 rounded-xl text-white text-sm">
                        {product.discount}%
                    </div>
                </div>
            )
        }
        <div>
            <button className="bg-primary-900 p-2 rounded-xl shadow-xl text-white">
                اضافه کردن به سبد خرید
            </button>
        </div>
    </div>
}
export default Page
