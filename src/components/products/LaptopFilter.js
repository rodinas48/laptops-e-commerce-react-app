import React, { useState, useEffect } from "react";
import data from "../../data.json";
function LaptopFilter({ handleFilterByCategory, activeBtn }) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const categories = extractCategories();
    setCategories(categories);
  }, []);
  const extractCategories = () => {
    const uniqueCategories = new Set();
    data.laptop.forEach((product) => {
      uniqueCategories.add(product.brand);
    });
    return Array.from(uniqueCategories);
  };
  const handleFilter = (category) => {
    handleFilterByCategory(category);
  };

  return (
    <>
      {categories.map((category, index) => {
        return (
          <button
            className={`btn btn-filter m-1 ${activeBtn===category? "active":""}`}
            key={index}
            onClick={() => handleFilter(category)}
          >
            {category}
          </button>
        );
      })}
    </>
  );
}

export default LaptopFilter;
