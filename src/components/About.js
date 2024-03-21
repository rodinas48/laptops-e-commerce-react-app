import "./about.css";
import img from "../assests/slide3.jpg";
function About() {
  return (
    <section className="about-section" id="about">
      <h2 className="about-title">About Us</h2>
      <div className="container">
        <div className="text">
          <span className="thin">YOUR</span>{" "}
          <span className="bold">TRUSTED E-COMMERCE</span>{" "}
          <span className="thin">PLATFORM</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo tempora
            cumque eligendi in nostrum labore omnis quaerat.
          </p>
        </div>
        <img src={img} alt="img"></img>
      </div>
    </section>
  );
}

export default About;
