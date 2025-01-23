import Link from "next/link"

function Header() {
    return (
        <header className="w-full shadow-lg">
            <nav className="w-full max-w-7xl mx-auto">
                <ul className="flex justify-between w-full p-4 items-center">
                    <li>
                        <Link href="/">
                            خانه
                        </Link>
                    </li>
                    <li>
                        <Link href="/products">
                            محصولات
                        </Link>
                    </li>
                    <li>
                        <Link href="/auth">
                            ورود
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header
