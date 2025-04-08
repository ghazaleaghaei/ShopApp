"use client"

import { useGetCategoryById } from "@/hooks/useCategories";
import { useParams } from "next/navigation"
import Form from "../../_/components/Form";

function page() {

    //for client component use useParams , for server components we use params as props
    const { id } = useParams();
    const { data, isLoading } = useGetCategoryById(id)
    const { category } = data || {}

    if (isLoading) return <p>loading....</p>

    return <div className="w-full max-w-sm mx-auto py-10">
        <h1 className="mb-4 font-bold text-xl"> ویرایش دسته بندی</h1>
        <Form categoryToEdit={category} />
    </div>
}

export default page
