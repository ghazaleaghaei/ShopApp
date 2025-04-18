import { addNewCouponApi, getAllCouponsApi, getCouponApi, removeCouponApi, updateCouponApi } from "@/services/CouponService"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
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

export function useGetCoupon(id) {
    const { data, error, isLoading } = useQuery({
        queryKey: ["get-coupon", id],
        queryFn: () => getCouponApi(id),
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

export function useUpdateCoupon({ editData, id }) {

    const router = useRouter()
    const queryClient = useQueryClient();

    const { isLoading: isEditing, error, data, mutateAsync: editCoupon } = useMutation({
        mutationFn: updateCouponApi,
    })

    const editSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const { message } = await editCoupon({ editData, id })
            router.push("/admin/coupons")
            toast.success(message)
            // queryClient.invalidateQueries({ queryKey: ["get-category", id] })

        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }

    return { isEditing, data, error, editSubmitHandler }
}

export function useRemoveCoupon() {

    const queryClient = useQueryClient();

    const { isLoading: isRemoving, error, data, mutateAsync: removeCoupon } = useMutation({
        mutationFn: removeCouponApi,
    })

    const removeSubmitHandler = async (id, e) => {
        e.preventDefault();
        try {
            const { message } = await removeCoupon(id)
            toast.success(message)
            queryClient.invalidateQueries({ queryKey: ["get-coupons"] })

        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }

    return { isRemoving, data, error, removeSubmitHandler }
}
