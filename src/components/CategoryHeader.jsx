import axios from "axios";
import React, { useEffect, useState } from "react";
import { topCategories } from "../data";
import { BsChevronDown } from "react-icons/bs";

const CategoryHeader = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    setCategories(topCategories);
    return () => {
      console.log("unmounted categories component");
    };
  }, []);

  return (
    <div className="category-cntr">
      {topCategories.map((category, idx) => {
        return (
          <div key={idx} className="category">
            {category}
            <div className="dropdown-icon">
              <BsChevronDown />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryHeader;
