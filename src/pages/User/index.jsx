import React, { memo } from "react";
import UserSidebar from "../../components/UserLayout/UserSidebar"
import { Outlet } from "react-router-dom";
import { UserHeader } from "../../components/layouts";
const index = memo( ()=> {
  return (
    <>
      <section className="User">
        <div className="row">
          <UserSidebar />
          <section className='float-end sidebar-main'>
            <Outlet />
          </section>
        </div>
      </section >
    </>
  )
})
export default index;
