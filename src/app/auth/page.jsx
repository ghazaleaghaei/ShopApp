"use client"

import { useState } from "react"
import SendOTPForm from "./SendOTPForm"
import CheckOTPForm from "./CheckOTPForm"
import { useMutation } from "@tanstack/react-query"
import { getOtpApi } from "@/services/AuthService"
import toast from "react-hot-toast"

function Auth() {

    const [phoneNumber, setPhoneNumber] = useState("")
    const { isPending: isSendingOtp, data: otpResponse, mutateAsync } = useMutation({
        mutationFn: getOtpApi,
    })
    const [step, setStep] = useState(1)

    const sendOtpHandler = async (e) => {
        e.preventDefault()

        //with react-query
        try {
            const data = await mutateAsync({ phoneNumber })
            setStep(2)
            toast.success(data.message)
        } catch (error) {
            setStep(2)
            toast.error(error?.response?.data?.message)
        }
        //with axios
        // try {
        //     const { data } = await http.post("/user/get-otp", { phoneNumber })
        //     toast.success(data.data)
        // } catch (error) {
        //     toast.error(error?.response?.data?.message)
        // }

    }

    const renderStep = () => {
        switch (step) {
            case 1:
                return <SendOTPForm
                    setStep={setStep}
                    phoneNumber={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    onSubmit={sendOtpHandler}
                    isSendingOtp={isSendingOtp}
                />
            case 2:
                return <CheckOTPForm
                    phoneNumber={phoneNumber}
                    onBack={() => setStep((s) => s - 1)}
                    onResendOtp={sendOtpHandler}
                    otpResponse={otpResponse}
                />
            default:
                return null;
        }
    }

    return (
        <section className="w-full max-w-sm mx-auto">
            {renderStep()}
        </section>
    )
}
export default Auth
