import "./Header.css";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <header className="header">
      <h1 className="logo">E-COM</h1>
      <nav className="header-nav">
        <ul className="header-ul">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#service">Services</a>
          </li>
          <li>
            <NavLink to="/shop">Shop Now</NavLink>
          </li>

        </ul>
      </nav>
    </header>
  );
}

export default Header;