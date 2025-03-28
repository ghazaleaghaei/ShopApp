import TextField from "@/ components/TextField"
import Select from "./Select"
import TagsInput from "./TagsInput"
import { useCategories } from "@/hooks/useCategories"
import { useState } from "react"
import { useAddProduct } from "@/hooks/useProducts"

const productsFormData = [
    {
        id: 1,
        label: "عنوان",
        name: "title",
    },
    {
        id: 2,
        label: "توضیحات",
        name: "description",
    },
    {
        id: 3,
        label: "اسلاگ",
        name: "slug",
    },
    {
        id: 4,
        label: "برند",
        name: "brand",
    },
    {
        id: 5,
        label: "قیمت",
        name: "price",
    },
    {
        id: 6,
        label: "تخفیف",
        name: "discount",
    },
    {
        id: 7,
        label: "قیمت با تخفیف",
        name: "offPrice",
    },
    {
        id: 8,
        label: "موجودی",
        name: "countInStock",
    },
    {
        id: 9,
        label: "لینک عکس محصول",
        name: "imageLink",
    },
]

const includesProductKey = [
    "title",
    "description",
    "slug",
    "brand",
    "price",
    "offPrice",
    "discount",
    "countInStock",
    "imageLink",
]

function Form({ productToEdit = {} }) {

    const { _id: editId } = productToEdit;
    const isEditSession = Boolean(editId)

    const { data } = useCategories()
    const { categories } = data || []

    const [tags, setTags] = useState([])
    const [selectCategories, setSelectCategories] = useState("")

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        slug: "",
        brand: "",
        price: "",
        offPrice: "",
        discount: "",
        countInStock: "",
        imageLink: "",
    })

    const handelChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const { isLoading, submitHandler } = useAddProduct({ ...formData, tags, category: selectCategories })

    return <form
        className="space-y-4"
        onSubmit={submitHandler}
    >
        {
            productsFormData.map(item =>
                <TextField
                    key={item.id}
                    label={item.label}
                    name={item.name}
                    onChange={handelChange}
                    value={formData[item.name]}
                />
            )
        }
        <TagsInput
            label="تگ محصولات"
            name="tags"
            tags={tags}
            setTags={setTags}
        />
        <Select
            label="دسته بندی"
            name="category"
            selectCategories={selectCategories}
            handleChange={(e) => setSelectCategories(e.target.value)}
            options={categories}
        />
        <button
            className="w-full bg-primary-900 text-white p-3 rounded-xl"
            type="submit"
        >
            اضافه کردن محصول
        </button>
    </form>
}

export default Form
