"use client"

import TextField from "@/ components/TextField"
import useCheckOtp from "@/hooks/useCheckOtp"
import { useState } from "react"

function CheckOTPForm({ phoneNumber, onBack, onResendOtp, otpResponse }) {

    const [code, setCode] = useState("")
    const { isCheckingOtp, checkOtp } = useCheckOtp()

    const checkOtpHandler = (e) => {
        e.preventDefault()
        console.log({ phoneNumber, code })
        checkOtp({
            phoneNumber: phoneNumber,
            otp: code
        })
    }

    return <div className="">
        <form onSubmit={checkOtpHandler}>
            <TextField
                value={code}
                onChange={(e) => setCode(e.target.value)}
                name="code"
                label="code"
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
