import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import "./checkout.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faPlus,
  faShare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "../../modal/modal";
import { useNavigate } from "react-router-dom";
function Checkout() {
  const [showModal, setShowModal] = useState(false);
  const [itemToRemove, setItemToRemove] = useState(null);
  const {
    totalPrice,
    cartItems,
    clearCart,
    removeProductFromCart,
    updateQuantity,
  } = useContext(CartContext);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const nagivateHome = useNavigate();
  const handleShowModal = (id) => {
    setItemToRemove(id);
    setShowModal(true);
  };

  const handleCancel = () => {
    setShowModal(false);
    setItemToRemove(null);
  };

  const handleConfirm = () => {
    if (itemToRemove) {
      removeProductFromCart(itemToRemove);
      setShowModal(false);
    }
  };
  const handleIncreament = (id) => {
    updateQuantity(id, 1);
    console.log(id);
  };
  const handleDecreament = (id, quantity) => {
    if (+quantity > 1) {
      updateQuantity(id, -1);
    }
  };
  const handleCheckout = () => {
    clearCart();
    setShowSuccessMessage(true);
  };
  return (
    <>
      <div style={{ overflow: "auto" }}></div>
      <div className="checkout-container col-12 col-lg-9 col-xl-9">
        <h2>Checkout</h2>
        <div className="checkout-products">
          {showSuccessMessage && (
            <div className="success-msg alert-success">
              Payment completed successfully!
              <button onClick={() => nagivateHome("/")}>
                Back to Shop <FontAwesomeIcon icon={faShare} />
              </button>
            </div>
          )}
          {cartItems.map((item) => {
            return (
              <div
                className="checkout-product col-12 flex-column flex-md-row"
                key={item.id}
              >
                <div className="d-flex flex-column align-items-center flex-md-row">
                  <img src={item.img_link} alt={item.name} />
                  <span className="my-2 mt-4 my-md-0 mt-md-0">{item.name}</span>
                </div>
                <div className="price-btns col-12 col-md-6 col-lg-4">
                  {" "}
                  <span>EGP{item.price} </span>
                  <div className="btns">
                    <button onClick={() => handleIncreament(item.id)}>
                      <FontAwesomeIcon icon={faPlus} />{" "}
                    </button>
                    <span>{item.quantity || 1}</span>
                    <button
                      onClick={() => handleDecreament(item.id, +item.quantity)}
                    >
                      <FontAwesomeIcon icon={faMinus} />{" "}
                    </button>
                    <button onClick={() => handleShowModal(item.id)}>
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="total-price">
            <span>Total | EGP {+totalPrice}</span>
          </div>
          <button
            onClick={handleCheckout}
            className="buy-now-btn btn btn-warning my-2"
          >
            Buy Now
          </button>
        </div>
      </div>
      {showModal && <Modal onConfirm={handleConfirm} onCancel={handleCancel} />}
    </>
  );
}

export default Checkout;
