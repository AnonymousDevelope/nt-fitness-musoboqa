import React, { memo } from "react";
import { Footer, Header } from "../../components/layouts";
import { Outlet } from "react-router-dom";

const index = memo(() => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
});

export default index;
