import { useState } from "react";
import "./style.css";
import data from "../../data.json";
import LaptopFilter from "./LaptopFilter";
import DrawLaptops from "./DrawLaptops";
function Products() {
  const [FilteredLaptops, setFilteredLaptops] = useState(data.laptop);
  const [activeBtn, setActiveBtn] = useState("All");
  const [searchInput, setSearchInput] = useState("");
  const handleFilterByCategory = (category) => {
    if (category === "All") {
      setFilteredLaptops(data.laptop);
    } else {
      const filteredData = data.laptop.filter(
        (item) => item.brand === category
      );
      setFilteredLaptops(filteredData);
    }
    setActiveBtn(category);
  };
  const handleSearch = (e) => {
    const searchinput = e.target.value.trim().toLowerCase();
    setSearchInput(searchinput);
    if (!searchinput) {
      handleFilterByCategory(activeBtn);
      return;
    }
    const filteredData = FilteredLaptops.filter((item) => {
      return item.name.toLowerCase().includes(searchinput);
    });
    setFilteredLaptops(filteredData);
  };
  return (
    <section className="container" id="products">
      <h2 className="product-header">Our Products</h2>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-9 order-2 order-lg-1">
          <p className="data-length">{FilteredLaptops.length} Items Found</p>
          <div className="products-items ">
            <DrawLaptops FilteredLaptops={FilteredLaptops} />
          </div>
        </div>
        <div className="products-category col-sm-12 col-md-8 col-lg-3 mx-auto order-1 order-lg-2">
          <input
            type="search"
            className="input-search"
            placeholder="search for a product.."
            onChange={handleSearch}
          />
          <h4>Categories</h4>
          <div className="category-buttons">
            <button
              className={`btn btn-filter m-1 ${
                activeBtn === "All" ? "active" : ""
              }`}
              onClick={() => handleFilterByCategory("All")}
            >
              All
            </button>
            <LaptopFilter
              handleFilterByCategory={handleFilterByCategory}
              activeBtn={activeBtn}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
