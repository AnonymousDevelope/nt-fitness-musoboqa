import React, { memo } from "react";
import UserSidebar from "../../components/UserLayout/UserSidebar"
import { Outlet } from "react-router-dom";

const index = () => {
  return (
    <>
      <section className="User">
        <div className="row">
          <UserSidebar />
          <Outlet />
        </div>
      </section>
    </>
  )

}
export default index;
