"use client"

import { useProductById } from "@/hooks/useProducts";
import { useParams } from "next/navigation"

function page() {

    //for client component use useParams , for server components we use params as props
    const { id } = useParams();
    const { data, isLoading } = useProductById(id)
    const { product } = data || {}

    if (isLoading) return <p>loading....</p>

    return <div>
        <h1 className="mb-4 font-bold text-xl p-4">
            {product.title}
        </h1>
    </div>
}

export default page
