import SideBar from "./SideBar";

export default function Layout({ children }) {
    return (
        <>
            <div className="grid grid-cols-4 h-screen">
                <div className="col-span-1 bg-primary-50/50 overflow-y-auto p-4">
                    <SideBar />
                </div>
                <div className="col-span-3 overflow-y-auto">
                    {children}
                </div>
            </div>
        </>
    )
}
