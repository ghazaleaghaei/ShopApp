"use client"

import MultiSelect from "@/ components/MultiSelect"
import RadioInput from "@/ components/RadioInput"
import TextField from "@/ components/TextField"
import { useProducts } from "@/hooks/useProducts"
import { useState } from "react"

const couponsFormData = [
    {
        id: 1,
        label: "کد",
        name: "code",
    },
    {
        id: 2,
        label: "مقدار",
        name: "amount",
    },
    {
        id: 3,
        label: "ظرفیت",
        name: "usageLimit",
    },
]

function Form() {

    const { data } = useProducts()
    const { products } = data || {}

    const [formData, setFormData] = useState({
        code: "",
        amount: "",
        usageLimit: "",
    })
    const [type, setType] = useState("percent")
    const [productsId, setProductsId] = useState([])

    const handelChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <form className="space-y-4 mt-10 pb-72">
            {
                couponsFormData.map(item =>
                    <TextField
                        key={item.id}
                        label={item.label}
                        name={item.name}
                        onChange={handelChange}
                        value={formData[item.name] || ""}
                    />
                )
            }
            <div className="flex items-center justify-between flex-wrap gap-2">
                <p className="w-full">نوع کد تخفیف</p>
                <RadioInput
                    id="percent-type"
                    name="type"
                    value="percent"
                    onChange={(e) => setType(e.target.value)}
                    checked={type == "percent"}
                    label="درصد"
                />
                <RadioInput
                    id="fixedProduct-type"
                    name="type"
                    value="fixedProduct"
                    onChange={(e) => setType(e.target.value)}
                    checked={type == "fixedProduct"}
                    label="قیمت ثابت"
                />
            </div>
            <MultiSelect
                label="شامل محصولات"
                name="products"
                selected={productsId}
                toggleOption={(option) => {
                    setProductsId((prev) =>
                        prev.includes(option)
                            ? prev.filter((item) => item !== option)
                            : [...prev, option]
                    );
                }}
                options={products}
                setSelected={setProductsId}
            />
        </form>
    )
}
export default Form
