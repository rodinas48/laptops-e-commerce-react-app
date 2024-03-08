import React, { useEffect, useState } from "react";
import "./style.css";
import ServiceMenu from "./service-menu";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header({ isLoggedIn, setIsLoggedIn }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenUOpen] = useState(false);
      const userDataObject = JSON.parse(localStorage.getItem("User Data"));
  // console.log(isLogin);
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const handleLogout = () => {
    userDataObject.isLogin = false;
    setIsLoggedIn(false);
    localStorage.setItem("User Data", JSON.stringify(userDataObject));
  };
  const handleToggleMenu = () => {
    setIsMenUOpen(!isMenuOpen);
  }
  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <h1 className="logo">
        <NavLink to={"/"}>Top<span>Store</span></NavLink>
      </h1>
      <button className="menu-btn btn " onClick={handleToggleMenu}> <FontAwesomeIcon icon={faBars} /></button>
      
      <nav className={`nav info-menu ${isMenuOpen ? "open" : ''}`}>
        {isLoggedIn && <ServiceMenu />}
        <ul className="info-menu-ul">
          {isLoggedIn ? (
            <>
              <li>
                <NavLink>{userDataObject.username}</NavLink>
              </li>
              <li>
                <NavLink to={"/login"} onClick={handleLogout}>
                  Logout
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/login">Log in</NavLink>
              </li>
              <li>
                <NavLink to="/signup">Create Account</NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
