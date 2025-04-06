"use client"

import Link from "next/link"
import { useCategories } from "@/hooks/useCategories"
import CategoriesTable from "./CategoriesTable"

function page() {

    const { data, isLoading } = useCategories()
    const { categories } = data || {}

    if (isLoading) return <p>loading...</p>

    return <div>
        <div className="bg-secondary-50/30 font-bold px-4 py-10 w-full flex items-center justify-between">
            <h1>دسته بندی</h1>
            <Link href="/admin/categories/add" className="text-primary-800">
                اضافه کردن دسته بندی
            </Link>
        </div>
        <CategoriesTable categories={categories} />
    </div>
}
export default page
