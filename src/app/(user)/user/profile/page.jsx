"use client"

import TextField from "@/ components/TextField"
import { includeObj } from "@/functions/includeObj"
import useUpdateUser from "@/hooks/useUpdateUser"
import { useUser } from "@/hooks/useUser"
import { useEffect, useState } from "react"

function Profile() {

    const { data, isLoading } = useUser()
    const { user } = data || {}
    const [formData, setFormData] = useState({})
    const { isUpdating, error, updatedData, submitHandler } = useUpdateUser({ formData })

    const includesKey = ["name", "email", "phoneNumber", "biography"]

    useEffect(() => {
        if (user) setFormData(includeObj(user, includesKey))
    }, [user])

    if (isLoading) return <p>loading...</p>



    return <div className="m-6">
        <h1>اطلاعات کاربری</h1>
        <form onSubmit={submitHandler}>
            {
                Object.keys(includeObj(user, includesKey)).map(key =>
                    <TextField
                        label={key}
                        name={key}
                        key={key}
                        value={formData[key] || ""}
                        onChange={(e) =>
                            setFormData({ ...formData, [e.target.name]: e.target.value })
                        }
                    />
                )
            }
            <button
                type="submit"
                disabled={isUpdating}
                className="disabled:opacity-50 w-full rounded-lg bg-primary-900 text-center p-2 text-white"
            >
                ذخیره
            </button>
        </form>
    </div>
}

export default Profile
