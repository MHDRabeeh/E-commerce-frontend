import AdminNav from "../_components/adminComponents/AdminNav"
import SideBar from "../_components/adminComponents/Sidebar"

const Layout = ({ children }) => {
    return (
        <div>
            <AdminNav />
            <div className='flex w-full'>
                <SideBar />
                {children}
            </div>
        </div>
    )
}

export default Layout