import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faHeart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
function DrawLaptops({ FilteredLaptops }) {
  const { favourite, addFavorite, removeFavorite } = useContext(CartContext);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const visibleProducts = FilteredLaptops.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };
  const handleFav = (id) => {
    const isFav = favourite.find((item) => item.id === id);
    if (isFav) {
      removeFavorite(id);
    } else {
      const product = FilteredLaptops.find((laptop) => laptop.id === id);
      if (product) {
        addFavorite(product);
      }
    }
  };
  return (
    <>
      {visibleProducts.map((laptop) => {
        const isFav = favourite.find((fav) => fav.id === laptop.id);
        return (
          <div key={laptop.id} className="product col-12 col-sm-6 col-md-5 col-lg-4">
            <FontAwesomeIcon
              icon={faHeart}
              className={`heart ${isFav ? "AddedFav" : ""}`}
              onClick={() => handleFav(laptop.id)}
            />
            <img src={laptop.img_link} alt={laptop.name} className="col-12" />
            <h2>{laptop.name}</h2>
            <p className="price-rating">
              <span className="price">EGP {laptop.price}</span>{" "}
              {laptop.rating !== "" && (
                <span className="rating">
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ color: "goldenrod" }}
                  />{" "}
                  {laptop.rating}
                </span>
              )}
            </p>
            <Link
              className="btn btn-warning detail-btn"
              to={`/product/${laptop.id}`}
            >
              Details
            </Link>
          </div>
        );
      })}
      <div
        className="mx-auto my-4 w-100"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <button
          disabled={currentPage === 1}
          onClick={handlePrevPage}
          className="mx-2 btn btn-outline-dark "
          style={{ borderRadius: "50%" }}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button
          disabled={indexOfLastProduct >= FilteredLaptops.length}
          onClick={handleNextPage}
          className="mx-2 btn btn-outline-dark"
          style={{ borderRadius: "50%" }}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </>
  );
}

export default DrawLaptops;
