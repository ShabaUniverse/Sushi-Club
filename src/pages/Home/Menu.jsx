import React from "react";
import "../../styles/pages/Home/Menu.scss";
import Categories from "./Categories";
import Catalog from "./Catalog";

const Menu = () => {

  let categories = [
    { name: "temaki", id: 1 },
    { name: "rice bowl", id: 2 },
    { name: "warm dishes", id: 3 },
    { name: "drinks", id: 4 },
  ];

  return (
    <div className="menu" id="menu">
      <div className="menu-images">
        <p>SUSHI CLUB</p>
      </div>

      <div className="menu-content">
        <Categories categories={categories}/>
        <Catalog />
      </div>
    </div>
  );
};

export default Menu;
