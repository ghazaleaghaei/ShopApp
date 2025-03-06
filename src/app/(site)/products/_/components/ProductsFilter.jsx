"use client"

import CheckBox from "@/ components/CheckBox"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"

function ProductsFilter({ categories }) {

    const searchParams = useSearchParams()
    const pathname = usePathname()
    const router = useRouter()
    const [selectedCategories, setSelectedCategories] = useState(
        searchParams.get("category")?.split(",") || []
    )

    const categoryHandler = (e) => {

        const value = e.target.value
        const newParams = new URLSearchParams(searchParams.toString());

        if (selectedCategories.includes(value)) {
            const categories = selectedCategories.filter(item => item !== value)
            setSelectedCategories(categories)
            if (categories.length > 0) {
                newParams.set("category", categories)
            } else {
                newParams.delete("category")
            }
        } else {
            setSelectedCategories([...selectedCategories, value])
            newParams.set("category", [...selectedCategories, value])
        }


        router.push(pathname + "?" + newParams.toString(), { scroll: false })
    }

    return <div>
        <p>دسته بندی ها</p>
        <ul>
            {
                categories.map(category => <CheckBox
                    key={category._id}
                    id={category._id}
                    value={category.englishTitle}
                    name="product-type"
                    label={category.title}
                    onChange={categoryHandler}
                    checked={selectedCategories.includes(category.englishTitle)}
                />)
            }
        </ul>
    </div>
}
export default ProductsFilter
