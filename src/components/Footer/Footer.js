import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { faEnvelope } from "@fortawesome/fontawesome-free-regular";
import "./footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="logo ">
          Top<span>Store</span>
        </h2>
        <div className="contact">
          <h5>Contact Us</h5>
          <div className="contact-btns">
            {" "}
            <button>
              <FontAwesomeIcon icon={faFacebookF} />{" "}
            </button>
            <button>
              <FontAwesomeIcon icon={faInstagram} />
            </button>
            <button>
              <FontAwesomeIcon icon={faWhatsapp} />
            </button>
            <button>
              <FontAwesomeIcon icon={faTwitter} />
            </button>
            <button>
              <FontAwesomeIcon icon={faEnvelope} />
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div className="copyright">
        <p>
          Copyright &copy; 2024 | All rights reserved | made by{" "}
          <span className="name">Rodina Sameh</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
