"use client"

import CheckBox from "@/ components/CheckBox"
import { useState } from "react"

function CategorySidebar({ categories }) {

    const [selectedCategories, setSelectedCategories] = useState([])

    return <div className="col-span-1">
        <p>دسته بندی ها</p>
        <ul>
            {
                categories.map(category => <CheckBox
                    key={category._id}
                    id={category._id}
                    value={category.englishTitle}
                    name="product-type"
                    label={category.title}
                    // onChange={categoryHandler}
                    checked={selectedCategories.includes(category.englishTitle)}
                />)
            }
        </ul>
    </div>
}
export default CategorySidebar
