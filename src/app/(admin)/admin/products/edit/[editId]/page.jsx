"use client"

import { useProductById } from "@/hooks/useProducts"
import { useParams } from "next/navigation"
import Form from "../../_/components/Form"


function page() {

    const { editId } = useParams()
    const { data, isLoading } = useProductById(editId)
    const { product } = data || {}

    if (isLoading) return <p>loading...</p>

    return <div className="w-full max-w-sm mx-auto py-10">
        <h1 className="mb-4 font-bold text-xl"> ویرایش محصول</h1>
        <Form productToEdit={product} />
    </div>
}
export default page
