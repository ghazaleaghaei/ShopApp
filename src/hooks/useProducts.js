import { addProductApi, getProductByIdApi, getProductsApi, updateProductApi } from "@/services/productServices"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

export function useProducts() {
    const { data, error, isLoading } = useQuery({
        queryKey: ["get-products"],
        queryFn: getProductsApi,
        retry: false,
        refetchOnWindowFocus: true,
    })
    return { data, error, isLoading }
}

export function useAddProduct(formData) {

    const router = useRouter()

    const { isLoading, error, data, mutateAsync: addProduct } = useMutation({
        mutationFn: addProductApi,
    })

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const { message } = await addProduct(formData)
            router.push("/admin/products")
            toast.success(message)

        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }

    return { isLoading, error, submitHandler }
}

export function useUpdateProduct({ editData, id }) {

    const router = useRouter()
    const queryClient = useQueryClient();

    const { isLoading: isEditing, error, data, mutateAsync: editProduct } = useMutation({
        mutationFn: updateProductApi,
    })

    const editSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const { message } = await editProduct({ editData, id })
            router.push("/admin/products")
            toast.success(message)
            queryClient.invalidateQueries({ queryKey: ["get-product", id] })

        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }

    return { isEditing, data, error, editSubmitHandler }
}

export function useProductById(id) {
    const { data, error, isLoading } = useQuery({
        queryKey: ["get-product", id],
        queryFn: () => getProductByIdApi(id),
        retry: false,
        refetchOnWindowFocus: true,
    })
    return { data, error, isLoading }
}
