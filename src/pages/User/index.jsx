import React, { memo, useEffect } from "react";
import UserSidebar from "../../components/UserLayout/UserSidebar";
import { Outlet } from "react-router-dom";
import { UserHeader } from "../../components/layouts";
import "../../firebase/config";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const index = memo(() => {

  const auth = getAuth()
  useEffect(() =>{
    let findOut  = onAuthStateChanged(auth,(user) =>{
      if(user){
        console.log(true);
      }else{
        navigate("/login")
        console.log(false);
      } 
    });
    return findOut
  },[auth])
  return (
    <>
      <section className="User">
        <div className="row">
          <UserSidebar />
          <section className="float-end sidebar-main">
            <Outlet />
          </section>
        </div>
      </section>
    </>
  );
});
export default index;
