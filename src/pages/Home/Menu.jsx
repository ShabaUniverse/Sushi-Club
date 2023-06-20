import React from "react";
import "../../styles/pages/Home/Menu.scss";
import Categories from "./Categories";
import Catalog from "./Catalog";

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu-images">
        <p>SUSHI CLUB</p>
      </div>

      <div className="menu-content">
        <Categories />
        <Catalog />
      </div>
    </div>
  );
};

export default Menu;
