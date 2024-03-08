import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faStar,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import data from "../../data.json";
import "./productDetails.css";
import { CartContext } from "../../context/CartContext";
function ProductDetails({ isLoggedIn }) {
  const paramsId = useParams();
  const navigateLogin = useNavigate();
  const [productDetails, setProductDetails] = useState({});
  const {
    cartItems,
    addProductToCart,
    removeProductFromCart,
    favourite,
    addFavorite,
    removeFavorite,
  } = useContext(CartContext);
  const [inCart, setInCart] = useState(false);
  const [isInFavourites, setIsInFavourites] = useState(false);

  useEffect(() => {
    const storedValue = localStorage.getItem(`product-${productDetails.id}`);
    if (storedValue) setInCart(true);
  }, [productDetails.id]);
  useEffect(() => {
    const storedFav = favourite.some((item) => item.id === productDetails.id);
    setIsInFavourites(storedFav);
  }, [favourite, productDetails.id]);
  useEffect(() => {
    findProduct();
  }, []);
  const findProduct = () => {
    const targetedProduct = data.laptop.find(
      (item) => item.id === +paramsId.id
    );
    setProductDetails(targetedProduct);
  };
  const handleAddToCart = () => {
    if (!isLoggedIn) {
      navigateLogin("/login");
      return;
    }
    if (inCart) {
      removeProductFromCart(productDetails.id);
      localStorage.removeItem(`product-${productDetails.id}`);
    } else {
      addProductToCart(productDetails);
      localStorage.setItem(
        `product-${productDetails.id}`,
        JSON.stringify(productDetails)
      );
    }
    setInCart(!inCart);
  };
  const handleAddToFav = () => {
    if (!isLoggedIn) {
      navigateLogin("/login");
      return;
    }
    if (isInFavourites) {
      removeFavorite(productDetails.id);
      // setIsInFavourites(false);
      localStorage.setItem(
        "favourites",
        JSON.stringify(
          favourite.filter((item) => item.id !== productDetails.id)
        )
      );
    } else {
      addFavorite(productDetails);
      localStorage.setItem(
        "favourites",
        JSON.stringify([...favourite, productDetails])
      );
      // setIsInFavourites(true)
    }
    setIsInFavourites(!isInFavourites);
  };
  return (
    <>
      <div style={{ overflow: "auto" }}></div>
      <div className="product-container row  col-11 col-md-8 col-lg-10 col-xl-7">
        <div className="product-image col-12 col-md-10 col-lg-4 mb-4">
          <img src={productDetails.img_link} alt={productDetails.name} />
        </div>
        <div className="product-info col-12 col-md-10 col-lg-6">
          <h2 className="product-name">{productDetails.name}</h2>

          {/* <StarRating/> */}
          <hr />
          <p className="d-flex justify-content-between w-75 mx-auto ">
            <span>EGP {productDetails.price}</span> |{" "}
            <span>
              <FontAwesomeIcon className="text-warning" icon={faStar} />{" "}
              {productDetails.rating}
            </span>{" "}
            |{" "}
            <span>
              <FontAwesomeIcon className="text-secondary" icon={faComment} />{" "}
              {productDetails.no_of_reviews}
            </span>
          </p>
          <hr />
          <div className="laptop-info">
            <p>
              <span>Brand</span> <span>{productDetails.brand}</span>
            </p>
            <p>
              <span>Processor</span> <span>{productDetails.processor}</span>
            </p>
            <p>
              <span>Ram</span> <span>{productDetails.ram}</span>
            </p>
            <p>
              <span>OS</span> <span>{productDetails.os}</span>
            </p>
            <p>
              <span>Storage</span> <span>{productDetails.storage}</span>
            </p>
            <p>
              <span>Display(in inch)</span>
              <span>{productDetails["display(in inch)"]}</span>
            </p>
          </div>
          <button
            className={`btn  ${
              inCart && localStorage.getItem(`product-${productDetails.id}`)
                ? "btn-danger my-1"
                : "btn-warning my-2"
            } me-2  `}
            onClick={handleAddToCart}
          >
            {inCart && localStorage.getItem(`product-${productDetails.id}`) ? (
              <>REMOVE FROM CART</>
            ) : (
              <>
                <FontAwesomeIcon icon={faCartShopping} /> ADD TO CART
              </>
            )}
          </button>
          <button className={`btn btn-dark me-2`} onClick={handleAddToFav}>
            <FontAwesomeIcon icon={faHeart} />{" "}
            {isInFavourites ? "REMOVE FROM WISHLIST" : "SAVE TO WISHLIST"}
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
