import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header, SearchDrawer } from "../../components";

const SharedLayout = () => {
  const [show, setShow] = useState(false);

  const toggle = () => setShow(!show);

  return (
    <div className="container">
      <Header toggle={toggle} />
      <SearchDrawer show={show} toggle={toggle} />
      <Outlet />
    </div>
  );
};

export default SharedLayout;
