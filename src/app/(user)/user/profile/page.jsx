"use client"

import TextField from "@/ components/TextField"
import { includeObj } from "@/functions/includeObj"
import useUser from "@/hooks/useUser"
import { useEffect, useState } from "react"

function Profile() {

    const { data, isLoading } = useUser()
    const { user } = data || {}
    const [formData, setFormData] = useState({})

    const includesKey = ["name", "email", "phoneNumber", "biography"]

    useEffect(() => {
        if (user) setFormData(includeObj(user, includesKey))
    }, [user])

    if (isLoading) return <p>loading...</p>

    return <div className="m-6">
        <h1>اطلاعات کاربری</h1>
        <form>
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
        </form>
    </div>
}

export default Profile
