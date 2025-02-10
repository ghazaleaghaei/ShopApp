import Header from "./Header";

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <div className="w-full max-w-7xl mx-auto bg-secondary-50/20 p-8 rounded min-h-screen my-6">
                {children}
            </div>
        </>
    )
}
