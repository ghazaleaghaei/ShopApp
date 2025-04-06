"use client"

import { useParams } from "next/navigation"

function page() {

    //for client component use useParams , for server components we use params as props
    const { id } = useParams();

    return <div>
        <h1 className="mb-4 font-bold text-xl p-4">
            {id}
        </h1>
    </div>
}

export default page
