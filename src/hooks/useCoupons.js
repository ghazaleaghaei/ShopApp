import { addNewCouponApi, getAllCouponsApi } from "@/services/CouponService"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

export function useGetCoupons() {
    const { data, error, isLoading } = useQuery({
        queryKey: ["get-coupons"],
        queryFn: getAllCouponsApi,
        retry: false,
        refetchOnWindowFocus: true,
    })
    return { data, error, isLoading }
}

export function useAddCoupon(formData) {

    const router = useRouter()

    const { isLoading, error, data, mutateAsync: addCoupon } = useMutation({
        mutationFn: addNewCouponApi,
    })

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const { message } = await addCoupon(formData)
            router.push("/admin/coupons")
            toast.success(message)

        } catch (error) {
            console.log(error)
            toast.error(error?.response?.data?.message)
        }
    }

    return { isLoading, error, submitHandler }
}
