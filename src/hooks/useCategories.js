import { addCategoryApi, getCategoriesApi } from "@/services/categoryServices"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

export function useCategories() {
    const { data, error, isLoading } = useQuery({
        queryKey: ["get-categories"],
        queryFn: getCategoriesApi,
        retry: false,
    })
    return { data, error, isLoading }
}

export function useAddCategory(formData) {

    const router = useRouter()

    const { isLoading, error, data, mutateAsync: addCategory } = useMutation({
        mutationFn: addCategoryApi,
    })

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const { message } = await addCategory(formData)
            router.push("/admin/categories")
            toast.success(message)

        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }

    return { isLoading, error, submitHandler }
}
