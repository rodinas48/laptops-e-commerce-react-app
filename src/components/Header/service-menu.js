import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping,faHeart} from "@fortawesome/free-solid-svg-icons";

function ServiceMenu() {
  const { cartItems, totalItems, favourite, totalFav } = useContext(CartContext);
  const [alert,setAlert]=useState(null);
  const handleAlertFav = () => {
 if (favourite.length === 0) {
      setAlert(
        <div
          className="alert alert-warning alert-dismissible fade show alert-fav"
          role="alert"
        >
          The Favourite Is Empty!
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      );
    }
  }
  const handleAlertCart = () => {
        if (cartItems.length === 0) {
      setAlert (
        <div
          className="alert alert-warning alert-dismissible fade show alert-cart"
          role="alert"
        >
          The Cart Is Empty!
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      );
    }

  }
  return (
    <nav className="nav service-menu">
      <ul>
        <li>
          <NavLink
            to={cartItems.length === 0 ? "/" : "/checkout"}
            className="counterBtn"
            onClick={handleAlertCart}
          >
            {cartItems.length === 0 ? (
              "Cart"
            ) : (
              <>
                <FontAwesomeIcon icon={faBagShopping} className="counterIcon" />
                <span className="counter">{totalItems}</span>
              </>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink
            to={favourite.length === 0 ?'' :"/favourite"}
            className="favBtn"
            onClick={handleAlertFav}
          >
            {favourite.length === 0 ? (
              "Favourite"
            ) : (
              <>
                <FontAwesomeIcon icon={faHeart} className="favIcon" />
                <span className="favCounter">{totalFav}</span>
              </>
            )}
          </NavLink>
        </li>
        <li>
          <a href="#products">Buy now</a>
        </li>
      </ul>
      {alert}
    </nav>
  );
}

export default ServiceMenu;
