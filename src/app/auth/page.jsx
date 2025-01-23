"use client"

import { useState } from "react"
import SendOTPForm from "./SendOTPForm"
import useSendOtp from "@/hooks/useSendOtp"

function Auth() {

    const [phoneNumber, setPhoneNumber] = useState("")
    const { isSendingOtp, error, otpResponse, getOtp } = useSendOtp()

    const sendOtpHandler = (e) => {
        e.preventDefault()
        console.log({ phoneNumber })
        getOtp({ phoneNumber })
    }

    return (
        <section className="w-full max-w-sm mx-auto">
            <SendOTPForm
                phoneNumber={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                onSubmit={sendOtpHandler}
            />
        </section>
    )
}
export default Auth
