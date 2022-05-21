import React from "react";
import HamburgerDrawer from "./HamburgerDrawer";

import "./NavNews.css";

const NavNews = () => {
  return (
    <div className="nav">
      <div className="icon">
        {" "}
        <HamburgerDrawer />
      </div>
      <h3>SydneyNews</h3>
    </div>
  );
};

export default NavNews;
