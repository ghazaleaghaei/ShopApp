"use client"

import { toLocalDate } from "@/functions/toLocalDate"
import useUser from "@/hooks/useUser"

function Panel() {

    const { data, isLoading } = useUser()
    const { user } = data || {}

    if (isLoading) return <p>loading...</p>

    return <div className="m-6 flex flex-col gap-6">
        <h1>{user.name} خوش آمدی</h1>
        <p>
            <span>تاریخ پیوستن : </span>
            <span>{toLocalDate(user.createdAt)}</span>
        </p>
    </div>
}

export default Panel
