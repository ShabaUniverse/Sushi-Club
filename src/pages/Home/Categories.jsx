import React, { useEffect } from "react";
import { useState } from "react";
import "../../styles/pages/Home/Categories.scss";

const Categories = () => {

  const [activeCategory, setActiveCategory] = useState({name: 'temaki', id: 1});

  let categories = [
    { name: "temaki", id: 1 },
    { name: "rice bowl", id: 2 },
    { name: "warm dishes", id: 3 },
    { name: "drinks", id: 4 },
  ];

  const onClickChange = (obj) => {
    setActiveCategory(obj.name)
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
