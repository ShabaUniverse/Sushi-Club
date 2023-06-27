import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "../../styles/pages/Home/Categories.scss";
import { setActiveCategory } from "../../data/slices/menuSlice";

const Categories = ({categories}) => {

  const dispatch = useDispatch();

  const {activeCategory} = useSelector((state) => state.menu);

  const onClickChange = (obj) => {
    dispatch(setActiveCategory(obj.name))
  };
  return (
    <div className="categories">
      <div className="categories-list">
        {categories.map((item) => (
          <p onClick={() => onClickChange(item)} key={item.id} className={activeCategory === item.name ? 'active' : ''}>
            {item.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Categories;
