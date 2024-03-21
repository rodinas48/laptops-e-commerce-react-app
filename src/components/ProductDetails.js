import { useParams } from "react-router-dom";
import "./productDetails.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar,faHeart } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
function ProductDetails() {
  const url = "https://fakestoreapi.com/products";
  const [detail, setDetail] = useState("");
  const { productId } = useParams();
  // console.log(productId);

  useEffect(() => {
    axios.get(`${url}/${productId}`).then((response) => {
      setDetail(response.data);
      console.log(response.data);
    });
  }, [productId]);

  return (
    <>
      {detail ? (
        <div
          className="product col-8"
          key={productId}
        >
          <img
            src={detail.image}
            alt={detail.title}
            className="imgDetails col-11 col-md-9 col-lg-5 col-xl-4"
          />
          <div className="details col-12 col-md-12 col-lg-6 col-xl-7">
            <h2 className="product-title">{detail.title}</h2>
            <span className="product-category">
              <span>Category :</span> {detail.category}
            </span>
            <div className="price">
              <span className="product-price">${detail.price}</span>
              {"|"}
              <span className="rating">
                {detail.rating.rate}{" "}
                <FontAwesomeIcon icon={faStar} className="star" /> |{" "}
                {detail.rating.count}{" "}
                <FontAwesomeIcon icon={faHeart} className="heart" />
              </span>
            </div>

            <p className="product-desc">{detail.description}</p>

            <button className="btn btn-primary btnCart">Add to cart</button>
          </div>
        </div>
      ) : (
        <p className="load"></p>
      )}
    </>
  );
}
export default ProductDetails;
