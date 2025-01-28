import { getCheckOtpApi } from "@/services/AuthService"
import { useMutation } from "@tanstack/react-query"
import toast from "react-hot-toast"

export default function useCheckOtp() {

    const { isPending: isCheckingOtp, error, data: checkOtpResponse, mutate: checkOtp } = useMutation({
        mutationFn: getCheckOtpApi,
        onSuccess: (data) => {
            toast.success(data)
        },
        onError: (err) => toast.error(err?.response?.data?.message)
    })
    return { isCheckingOtp, error, checkOtpResponse, checkOtp }
}
