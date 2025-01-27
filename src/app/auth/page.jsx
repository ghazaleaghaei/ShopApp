"use client"

import { useState } from "react"
import SendOTPForm from "./SendOTPForm"
import useSendOtp from "@/hooks/useSendOtp"
import CheckOTPForm from "./CheckOTPForm"

function Auth() {

    const [phoneNumber, setPhoneNumber] = useState("")
    const { isSendingOtp, getOtp } = useSendOtp()
    const [step, setStep] = useState(1)

    const sendOtpHandler = (e) => {
        e.preventDefault()
        console.log({ phoneNumber })
        //with react-query
        getOtp({ phoneNumber }, {
            onSuccess: () => {
                setStep(2)
            },
            onError: () => {
                setStep(2)
            }
        }
        )
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
