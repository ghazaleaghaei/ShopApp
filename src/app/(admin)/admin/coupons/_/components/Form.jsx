"use client"

import MultiSelect from "@/ components/MultiSelect"
import RadioInput from "@/ components/RadioInput"
import TextField from "@/ components/TextField"
import { useProducts } from "@/hooks/useProducts"
import { useEffect, useState } from "react"
import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import { useAddCoupon, useUpdateCoupon } from "@/hooks/useCoupons"

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

function Form({ couponToEdit = {} }) {

    const { _id: editId } = couponToEdit;
    const isEditSession = Boolean(editId)

    const { data } = useProducts()
    const { products } = data || {}

    const [formData, setFormData] = useState({
        code: "",
        amount: "",
        usageLimit: "",
    })
    const [type, setType] = useState("percent")
    const [productsId, setProductsId] = useState([])
    const [expireDate, setExpireDate] = useState(new Date())

    useEffect(() => {
        if (isEditSession) {
            setFormData({
                code: couponToEdit.code,
                amount: couponToEdit.amount,
                usageLimit: couponToEdit.usageLimit
            })
            setType(couponToEdit.type)
            setProductsId(couponToEdit.productIds)
            setExpireDate(couponToEdit.expireDate)
        }

    }, [couponToEdit])

    const { isLoading, submitHandler } = useAddCoupon({
        ...formData,
        type: type,
        expireDate: new Date(expireDate).toISOString(),
        productIds: productsId.map((p) => p._id)
    })

    const { editSubmitHandler, isEditing } = useUpdateCoupon({
        editData: {
            ...formData,
            type: type,
            expireDate: new Date(expireDate).toISOString(),
            productIds: productsId.map((p) => p._id)
        },
        id: editId
    })

    const handelChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <form
            className="space-y-4 mt-10 pb-72"
            onSubmit={isEditSession ? editSubmitHandler : submitHandler}
        >
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
            <div>
                <span className="mb-2 block">تاریخ انتقضا</span>
                <DatePicker
                    inputClass="rounded-xl p-3 outline-none focus:shadow-lg duration-300 focus:shadow-secondary-300 focus:border focus:border-primary-300 border"
                    value={expireDate}
                    onChange={date => setExpireDate(date)}
                    format="YYYY/MM/DD"
                    calendar={persian}
                    locale={persian_fa}
                />
            </div>
            <button
                className="w-full bg-primary-900 text-white p-3 rounded-xl disabled:opacity-50"
                type="submit"
                disabled={isLoading || isEditing}
            >
                {
                    isEditSession
                        ? "ویرایش کد تخفیف"
                        : "اضافه کردن کد تخفیف"
                }
            </button>
        </form>
    )
}
export default Form
