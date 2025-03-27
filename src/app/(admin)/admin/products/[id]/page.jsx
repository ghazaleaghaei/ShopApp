"use client"

import { useParams } from "next/navigation"

function page() {

    //for client component use useParams , for server components we use params as props
    const { id } = useParams();

    return <div>{id}</div>
}

export default page
