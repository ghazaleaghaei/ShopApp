"use client"

import { useProducts } from "@/hooks/useProducts"
import ProductsTable from "./ProductsTable"
import Link from "next/link"

function page() {

    const { data, isLoading } = useProducts()
    const { products } = data || {}

    if (isLoading) return <p>loading...</p>

    return <div>
        <div className="bg-secondary-50/30 font-bold px-4 py-10 w-full flex items-center justify-between">
            <h1>محصولات</h1>
            <Link href="/admin/products/add" className="text-primary-800">
                اضافه کردن محصولات
            </Link>
        </div>
        <ProductsTable products={products} />
    </div>
}
export default page
