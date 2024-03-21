import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone ,faLocationDot, faEnvelope} from "@fortawesome/free-solid-svg-icons";
function Footer() {
  return (
    <footer className="foot">
      <div className="footer">
        <h2 className="logo">LOGO</h2>
        <div className="menu-list">
          <h5 className="menu-title">MENU</h5>
          <ul className="menu">
            <li>
              <a href="#0">Home</a>
            </li>
            <li>
              <a href="#0">About</a>
            </li>
            <li>
              <a href="#0">Services</a>
            </li>
            <li>
              <a href="#0">Shop now</a>
            </li>
          </ul>
        </div>
        <div className="contact-list">
          <h5 className="contact-title">Contact </h5>
          <ul className="contact">
            <li>
              <a href="#0"><FontAwesomeIcon icon={faPhone}/> Phone</a>
            </li>
            <li>
              <a href="#0"><FontAwesomeIcon icon={faLocationDot}/> Address</a>
            </li>
            <li>
              <a href="#0"><FontAwesomeIcon icon={faEnvelope}/> Email</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <hr />
        <p>Copyright ©2024 All rights reserved | made by Rodina Sameh</p>{" "}
      </div>
    </footer>
  );
}
export default Footer;