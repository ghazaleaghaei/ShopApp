"use client"

import { useParams } from "next/navigation"

function page() {

    const { id } = useParams()

    return (
        <div>{id}</div>
    )
}
export default page
