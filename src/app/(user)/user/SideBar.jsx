import Link from "next/link"

function SideBar() {
    return <div>
        <ul className="flex flex-col gap-6 my-6">
            <li>
                <Link href="/">
                    صفحه اصلی
                </Link>
            </li>
            <li>
                <Link href="/user/profile">
                    اطلاعات کاربری
                </Link>
            </li>
        </ul>
    </div>
}
export default SideBar
