import React from "react";
import HamburgerDrawer from "./HamburgerDrawer";

import "./NavNews.css";

const NavNews = ({ setCategory }) => {
  return (
    <div className="nav">
      <div className="icon">
        {" "}
        <HamburgerDrawer setCategory={setCategory} />
      </div>
      <h3>Australia News ✌🏼</h3>
    </div>
  );
};

export default NavNews;
