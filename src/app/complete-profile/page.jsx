"use client"

import TextField from "@/ components/TextField"
import { completeProfileApi } from "@/services/AuthService"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { useState } from "react"
import toast from "react-hot-toast"

function CompleteProfile() {

    const router = useRouter()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const { isPending, mutateAsync } = useMutation({
        mutationFn: completeProfileApi,
    })

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            const data = await mutateAsync({ name, email })
            toast.success(data.message)
            router.push("/")

        } catch (error) {
            console.log(error)
            toast.error(error?.response?.data?.message)
        }
    }

    return <section className="w-full max-w-sm mx-auto">
        <form onSubmit={submitHandler}>
            <TextField
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="name"
                label="نام و نام خانوادگی"
            />
            <TextField
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                label="ایمیل"
            />
            <button
                type="submit"
                disabled={isPending}
                className="disabled:opacity-50 w-full rounded-lg bg-primary-900 text-center p-2 text-white"
            >
                ثبت
            </button>
        </form>
    </section>
}
export default CompleteProfile
