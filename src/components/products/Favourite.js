import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import "./favourite.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShare } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Modal from "../../modal/modal";
function Favourite() {
  const nagivateProduct = useNavigate();
  const nagivateHome = useNavigate();
  const { favourite, removeFavorite } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const [itemToRemove, setItemToRemove] = useState(null);
  const handleRemove = (id) => {
    setItemToRemove(id);
    setShowModal(true);
  };
  const confirmRemove = () => {
    if (itemToRemove||itemToRemove===0) {
      removeFavorite(itemToRemove);
      setShowModal(false);
    }
  };
  const cancelRemove = () => {
    setShowModal(false);
    setItemToRemove(null);
  };
  return (
    <>
      <div style={{ overflow: "auto" }}></div>
      <div className="fav-container col-12 col-lg-10">
        <h2>Favourite</h2>
        <div className="fav-products ">
          {favourite.length === 0 && (
            <div className="empty-msg">
              <span>Favourite is Empty ! </span>Back to Home Page{" "}
              <button className="btn btn-success btn-back" onClick={ ()=>nagivateHome('/')}>
                <FontAwesomeIcon icon={faShare} />
              </button>{" "}
            </div>
          )}
          {favourite.map((item) => {
            return (
              <div className="fav-product col-8 col-md-5 col-lg-3" key={item.id}>
                <div className="fav-info">
                  <img src={item.img_link} alt={item.name} />
                  <span
                    className="fav-name"
                    onClick={() => nagivateProduct(`/product/${item.id}`)}
                  >
                    {item.name}
                  </span>
                  <span>EGP {item.price}</span>
                </div>

                <button
                  onClick={() => handleRemove(item.id)}
                  className="delete-fav"
                >
                  <FontAwesomeIcon icon={faHeart} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
      {showModal && <Modal onConfirm={confirmRemove} onCancel={cancelRemove} />}
    </>
  );
}

export default Favourite;
