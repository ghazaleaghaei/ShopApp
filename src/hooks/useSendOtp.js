import { getOtpApi } from "@/services/AuthService"
import { useMutation } from "@tanstack/react-query"
import toast from "react-hot-toast"

export default function useSendOtp() {

    const { isPending: isSendingOtp, error, data: otpResponse, mutate: getOtp } = useMutation({
        mutationFn: getOtpApi,
        onSuccess: (data) => {
            toast.success(data.message)
        },
        onError: (err) => toast.error(err?.response?.data?.message)
    })
    return { isSendingOtp, error, otpResponse, getOtp }
}
