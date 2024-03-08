import React from 'react'
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import labtop from "../Home/../../components/../assests/labb.png";

function Home() {
  const handleScroll = () => {
    
  }
  return (
    <>
      <div style={{overflow:'auto'}}></div>
      <section className="home">
        <div className="main-page">
          <div className="main-info col-5">
            <h2>LAPTOPS FOR THE FUTURE</h2>
            <p>
              Looking for a high-quality laptop that meets all your computing
              needs? We offers the perfect blend of performance, style,
              affordability, easy to find the perfect device for you!{" "}
            </p>
            <a href='#products' className="btn btn-warning">
              Shop Now{" "}
              <span>
                <FontAwesomeIcon icon={faArrowRight} className="arrow" />
              </span>
            </a>
          </div>
          <div className="img col-5">
            <img src={labtop} alt="labtop" />
          </div>
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="svg"
          >
            <path
              fill="#FADB3F"
              d="M41.7,-53.7C57.1,-46.2,74.7,-38.1,76.2,-26.4C77.7,-14.8,63,0.5,54.5,14.9C45.9,29.3,43.5,42.9,35.4,56C27.4,69.1,13.7,81.6,1.8,79.2C-10.2,76.8,-20.4,59.4,-30.9,47.1C-41.4,34.8,-52.2,27.7,-61.1,16.1C-70,4.6,-76.9,-11.4,-74.8,-26.3C-72.7,-41.3,-61.6,-55.3,-47.6,-63.2C-33.6,-71.1,-16.8,-72.9,-1.8,-70.4C13.2,-67.9,26.3,-61.1,41.7,-53.7Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </section>
    </>
  );
}

export default Home