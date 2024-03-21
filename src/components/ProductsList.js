import { useState, useEffect } from "react";
import Product from "./Product";
import "./productsList.css";
import axios from "axios";
function ProductsList() {
  const url = "https://fakestoreapi.com/products";
  const [product, setProduct] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCat, setSelectedCat] = useState('all');
  const getProducts = () => {
    axios.get(url).then((response) => {
      setProduct(response.data);
    });
  };
  const getCategories = () => {
    axios.get(`${url}/categories`).then((response) => {
      setCategories(response.data);
    });
  };
  const filterCategory = (category) => {
    axios.get(`${url}/category/${category}`).then((response) => {
      setProduct(response.data);
      //  console.log(response.data);
    });
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  return (
    <>
      <h2 className="products-title">Our Products</h2>
      <div className="container d-block">
        <div className="filter">
          {
            <button
              key="all"
              className={
                selectedCat ==="all"? "btn btn-primary" : "btn btn-outline-primary"
              }
              onClick={() => {
                getProducts("all")
              setSelectedCat("all")
              }}
            >
              All
            </button>
          }
          {categories.map((category) => {
            return (
              <button
                key={category}
                className={
                  selectedCat ===category? "btn btn-primary" : "btn btn-outline-primary"
                }
                onClick={() => {
                  filterCategory(category)
                  setSelectedCat(category);
                }}
              >
                {category}
              </button>
            );
          })}
        </div>
        <div className="row gy-2 gx-5">
          {product.map((product) => {
            return (
              <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3" key={product.id}>
                <Product product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductsList;
