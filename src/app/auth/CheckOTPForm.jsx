"use client"

import TextField from "@/ components/TextField"
import useCheckOtp from "@/hooks/useCheckOtp"
import { useEffect, useState } from "react"

function CheckOTPForm({ phoneNumber, onBack, onResendOtp, otpResponse }) {


    const [time, setTime] = useState(10)
    const [code, setCode] = useState("")
    const { isCheckingOtp, checkOtp } = useCheckOtp()
    console.log(code)

    useEffect(() => {
        const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000)
        return () => {
            if (timer) clearInterval(timer)
        }
    }, [time])

    const checkOtpHandler = (e) => {
        e.preventDefault()
        console.log({ phoneNumber, code })
        checkOtp({
            phoneNumber: phoneNumber,
            otp: code
        })
    }

    return <div className="flex flex-col gap-2">
        <button
            className="w-fit text-error"
            onClick={onBack}
        >
            برگشت
        </button>
        <div className="w-fit text-success">
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
                disabled={isCheckingOtp}
                className="disabled:opacity-50 w-full rounded-lg bg-primary-900 text-center p-2 text-white"
            >
                تایید
            </button>
        </form>
    </div>
}
export default CheckOTPForm
