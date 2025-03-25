"use client"

import { useUsers } from "@/hooks/useUser"
import UsersTable from "./UsersTable"

function UsersPage() {

    const { isLoading, data } = useUsers()
    const { users } = data || {}

    if (isLoading) return <p>loading...</p>

    return <div>
        <h1>اطلاعات کاربران</h1>
        <UsersTable users={users} />
    </div>
}

export default UsersPage
