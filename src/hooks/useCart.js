import { addToCartApi } from "@/services/cartService";
import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"

export default function useAddToCart({ productId }) {

    const queryClient = useQueryClient();

    const { isLoading, error, data: cart, mutateAsync } = useMutation({
        mutationFn: addToCartApi,
    })

    const addToCartHandler = async () => {
        try {
            const { message } = await mutateAsync(productId)
            toast.success(message)
            queryClient.invalidateQueries({ queryKey: ["get-user"] })

        } catch (error) {
            if (error?.response?.data) {
                toast.error(error.response.data.message)
            }
        }
    }

    return { isLoading, error, cart, mutateAsync, addToCartHandler }
}
