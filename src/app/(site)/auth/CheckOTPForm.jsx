"use client"

import { TiArrowLeftThick } from "react-icons/ti";
import TextField from "@/ components/TextField"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation";
import { checkOtpApi } from "@/services/AuthService";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";

function CheckOTPForm({ phoneNumber, onBack, onResendOtp, otpResponse }) {

    const [time, setTime] = useState(10)
    const [code, setCode] = useState("")
    const { isPending, mutateAsync } = useMutation({
        mutationFn: checkOtpApi
    })
    const router = useRouter()

    useEffect(() => {
        const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000)
        return () => {
            if (timer) clearInterval(timer)
        }
    }, [time])

    const checkOtpHandler = async (e) => {
        e.preventDefault()
        try {
            const data = await mutateAsync({
                phoneNumber: phoneNumber,
                otp: code,
            })
            toast.success(data.message)
            if (data.user.isActive) {
                router.push("/")

            } else {
                router.push("/complete-profile")
            }

        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }

    return <div className="flex flex-col gap-2">
        <button
            className="w-fit"
            onClick={onBack}
        >
            <TiArrowLeftThick />
        </button>
        {
            otpResponse &&
            <p>
                {otpResponse.message}
                <button onClick={onBack}>
                    ویرایش
                </button>
            </p>
        }
        <div className="w-fit">
            {
                time > 0
                    ? <p>{time}پانیه تا ارسال مجدد کد </p>
                    : <button onClick={onResendOtp}>ارسال مجدد کد</button>
            }
        </div>
        <form onSubmit={checkOtpHandler}>
            <TextField
                value={code}
                onChange={(e) => setCode(e.target.value)}
                name="code"
                label="کد"
            />
            <button
                type="submit"
                disabled={isPending}
                className="disabled:opacity-50 w-full rounded-lg bg-primary-900 text-center p-2 text-white"
            >
                تایید
            </button>
        </form>
    </div>
}
export default CheckOTPForm
