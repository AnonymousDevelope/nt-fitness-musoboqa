import React, { memo } from "react";
import UserSidebar from "../../components/UserLayout/UserSidebar"
import { Outlet } from "react-router-dom";
import { UserHeader } from "../../components/layouts";
const index = () => {
  return (
    <>

      <section className="User">
        <div className="row">
          <UserSidebar />
          <section className='col-xl-9 float-end sidebar-main'>
            <UserHeader />
            <Outlet />
          </section>
        </div>
      </section >
    </>
  )

}
export default index;
