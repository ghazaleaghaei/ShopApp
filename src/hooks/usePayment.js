import { createPaymentApi } from "@/services/PaymentService";
import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"

export function usePayment() {

    const queryClient = useQueryClient();

    const { isLoading, error, data: cart, mutateAsync } = useMutation({
        mutationFn: createPaymentApi,
    })

    const createPaymentHandler = async () => {
        try {
            const { message } = await mutateAsync()
            toast.success(message)
            queryClient.invalidateQueries({ queryKey: ["get-user"] })

        } catch (error) {
            if (error?.response?.data) {
                toast.error(error.response.data.message)
            }
        }
    }

    return { isLoading, error, cart, mutateAsync, createPaymentHandler }
}
