import { getOtpApi } from "@/services/AuthService"
import { useMutation } from "@tanstack/react-query"

export default function useSendOtp() {

    const { isPending: isSendingOtp, error, data: otpResponse, mutate: getOtp } = useMutation({
        mutationFn: getOtpApi,
        onSuccess: (data) => {
            console.log(data)
        },
        onError: (err) => console.log(err?.response?.data?.message)
    })
    return { isSendingOtp, error, otpResponse, getOtp }
}
