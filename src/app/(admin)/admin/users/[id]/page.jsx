"use client"

import { useParams } from "next/navigation"

function page() {

    //for client side use useParams , for server components we can use params as props
    const { id } = useParams();

    return <div>{id}</div>
}

export default page
