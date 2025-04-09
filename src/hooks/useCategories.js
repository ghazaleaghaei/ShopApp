import { addCategoryApi, getCategoriesApi, getCategoryApi, removeCategoryApi, updateCategoryApi } from "@/services/categoryServices"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
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

export function useGetCategoryById(id) {
    const { data, error, isLoading } = useQuery({
        queryKey: ["get-category", id],
        queryFn: () => getCategoryApi(id),
        retry: false,
        refetchOnWindowFocus: true,
    })
    return { data, error, isLoading }
}

export function useUpdateCategory({ editData, id }) {

    const router = useRouter()
    const queryClient = useQueryClient();

    const { isLoading: isEditing, error, data, mutateAsync: editCategory } = useMutation({
        mutationFn: updateCategoryApi,
    })

    const editSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const { message } = await editCategory({ editData, id })
            router.push("/admin/categories")
            toast.success(message)
            // queryClient.invalidateQueries({ queryKey: ["get-category", id] })

        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }

    return { isEditing, data, error, editSubmitHandler }
}

export function useRemoveCategory() {

    const queryClient = useQueryClient();

    const { isLoading: isRemoving, error, data, mutateAsync: removeCategory } = useMutation({
        mutationFn: removeCategoryApi,
    })

    const removeSubmitHandler = async (id, e) => {
        e.preventDefault();
        try {
            const { message } = await removeCategory(id)
            toast.success(message)
            queryClient.invalidateQueries({ queryKey: ["get-categories"] })

        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }

    return { isRemoving, data, error, removeSubmitHandler }
}

