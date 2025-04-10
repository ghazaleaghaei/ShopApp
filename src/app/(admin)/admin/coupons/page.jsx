import Link from "next/link"

function page() {

    return <div>
        <div className="bg-secondary-50/30 font-bold px-4 py-10 w-full flex items-center justify-between">
            <h1>کد تخفیف</h1>
            <Link href="/admin/coupons/add" className="text-primary-800">
                اضافه کردن کد تخفیف
            </Link>
        </div>
    </div>
}
export default page
