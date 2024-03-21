import "./services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightLeft,
  faTruck,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
function Services() {
  return (
    <section className="services-section col-12 col-xl-10" id="service">
      <h2 className="section-title">Our Services</h2>
      <div className="section-content">
        <div className="service col-11 col-sm-9 col-md-7 col-lg-5 col-xl-3 my-3">
          <FontAwesomeIcon className="i" icon={faRightLeft} />
          <h4>30 DAYS RETURN</h4>
          <span>Simply return it within 30 days for an exchange</span>
        </div>
        <div className="service col-11 col-sm-9 col-md-7 col-lg-5 col-xl-3 my-3">
          <FontAwesomeIcon className="i" icon={faTruck} />
          <h4>FREE US DELIVERY</h4>
          <span>On orders over $200 !</span>
        </div>
        <div className="service col-11 col-sm-9 col-md-7 col-lg-5 col-xl-3 my-3">
          <FontAwesomeIcon className="i" icon={faPhoneVolume} />
          <h4>Support 24/7</h4>
          <span>Contact us 24 hours a day. 7 days a week</span>
        </div>
      </div>
    </section>
  );
}
export default Services;
