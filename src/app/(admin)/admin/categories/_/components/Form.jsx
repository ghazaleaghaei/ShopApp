import Select from "@/ components/Select"
import TextField from "@/ components/TextField"
import { useAddCategory } from "@/hooks/useCategories"
import { useState } from "react"

const categoriesFormData = [
    {
        id: 1,
        label: "عنوان",
        name: "title",
    },
    {
        id: 2,
        label: "عنوان انگلیسی",
        name: "englishTitle",
    },
    {
        id: 3,
        label: "توضیحات",
        name: "description",
    },
]

const categoryTypes = [
    {
        id: 1,
        _id: "product",
        title: "محصول",

    },
    {
        id: 1,
        _id: "post",
        title: "پست",

    },
    {
        id: 1,
        _id: "ticket",
        title: "تیکت",

    },
    {
        id: 1,
        _id: "comment",
        title: "نظرات",

    }
]

function Form() {

    const [selectedType, setSelectedType] = useState("")

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        englishTitle: "",
    })

    const { isLoading, submitHandler } = useAddCategory({ ...formData, type: selectedType })

    const handelChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return <form
        className="space-y-4"
        onSubmit={submitHandler}
    >
        {
            categoriesFormData.map(item =>
                <TextField
                    key={item.id}
                    label={item.label}
                    name={item.name}
                    onChange={handelChange}
                    value={formData[item.name] || ""}
                />
            )
        }
        <Select
            label="نوع"
            name="type"
            selectCategories={selectedType}
            handleChange={(e) => setSelectedType(e.target.value)}
            options={categoryTypes}
        />
        <button
            className="w-full bg-primary-900 text-white p-3 rounded-xl disabled:opacity-50"
            type="submit"
            disabled={isLoading}
        >
            اضافه کردن دسته بندی
        </button>
    </form>
}

export default Form
