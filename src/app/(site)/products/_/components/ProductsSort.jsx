"use client"

import RadioInput from "@/ components/RadioInput"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"

const sortOptions = [
    {
        id: 1,
        value: "latest",
        label: "جدیدترین"
    },
    {
        id: 2,
        value: "earliest",
        label: "قدیمی ترین"
    },
    {
        id: 3,
        value: "popular",
        label: "محبوب ترین"
    }
]

function ProductsSort() {


    const searchParams = useSearchParams()
    const [sort, setSort] = useState(searchParams.get("sort") || "")

    const pathname = usePathname()
    const router = useRouter()

    const sortHandler = (e) => {
        const value = e.target.value
        const newParams = new URLSearchParams(searchParams.toString());

        setSort(value)
        newParams.set("sort", value)

        router.push(pathname + "?" + newParams.toString(), { scroll: false })
    }
    return <div className="mt-4">
        <p>مرتب سازی</p>
        {
            sortOptions.map(option => <RadioInput
                id={option.id}
                key={option.id}
                name="product-sort"
                value={option.value}
                onChange={sortHandler}
                checked={sort == option.value}
                label={option.label}
            />)
        }
    </div>
}

export default ProductsSort
