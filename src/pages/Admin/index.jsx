import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminSidebar from "../../components/AdminLayouts/AdminSidebar";

const index = () => {
    return (
        <section style={{ display: 'flex' }}>
            <AdminSidebar />
            <Outlet />
        </section>
    )

}

export default index